
/**
 * 設定
 */

const config = {
    apiEndpointEnvKey: 'CBAPI_ENDPOINT',
    apiUsernameEnvKey: 'CBAPI_USERNAME',
    apiPasswordEnvKey: 'CBAPI_PASSWORD',
    apiItemLimit: 100,
    templateDirPath: './templates',
    mailTemplatePrefix: 'Mail',
    mailSharedTemplatePath: './templates/Mail/SharedFunctions.cshtml',
    ignoreTemplates: [
        'MailSharedFunctions'
    ],
    sharedTemplates: [
        'ModdSharedViewStart',
        'ModdSharedHelpers',
        'ModdSharedFunctions',
    ],
    gitDefaultBranch: 'main',
    useLockMode: false
}

/**
 * 以下同期スクリプト
 */

const chokidar = require('chokidar')
const fs = require('fs').promises
const path = require('path')
const { execSync } = require('child_process')
require('dotenv').config()


function stripBom(string) {
    if (typeof string !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof string}`);
    }

    // Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
    // conversion translates it to FEFF (UTF-16 BOM).
    if (string.charCodeAt(0) === 0xFEFF) {
        return string.slice(1);
    }

    return string;
}
const typeMap = {
    text: '.txt',
    cshtml: '.cshtml',
    mail: '.cshtml',
    csx: '.csx'
}

async function main() {
    const mode = process.argv[2]

    if (mode == 'all') {
        await uploadAll()
        return
    }

    if (mode == 'watch') {
        await watch()
        return
    }

    if (mode == 'unlock') {
        const files = process.argv.slice(3);
        await unlock(files);
        return
    }

    console.log(process.argv)
    console.log('sync.js <mode>')
    console.log('mode = upload | sync | unlock')
}

async function validateAll() {
    const [files, nameMaxSize] = await getPlan(config.templateDirPath);
    for (const file of files) {
        const last = files[files.length - 1] === file;
        const [model, _] = await getModel(file, false);
        const prefix = last ? '└' : '├';
        if (config.ignoreTemplates.includes(model.Name)) {
            console.log(`\t${prefix} ${model.Name.padEnd(nameMaxSize)}\tIGNORE`)
            continue;
        }
        const valid = await validateTemplate(model.Name, model.Type, model.Text);
        if (valid.startsWith('NG')) {
            console.error(`\x1b[31m\t${prefix} ${model.Name.padEnd(nameMaxSize)}\t${valid}\x1b[0m`)
        }
        else {
            console.log(`\t${prefix} ${model.Name.padEnd(nameMaxSize)}\t${valid}`)
        }
    }
}

async function uploadAll() {
    if (config.useLockMode) {
        const lockedTemplates = await getLockedTemplateNames();
        if (lockedTemplates.length > 0) {
            for (let name of lockedTemplates) {
                console.error(`\x1b[31m${name}\x1b[0m`)
            }
            if (!process.env.CBSYNC_FORCE_UPLOAD_ALL) {
                console.log('Panic!')
                process.exit(1);
            }
        }
    }

    const [files, nameMaxSize] = await getPlan(config.templateDirPath);
    for (const file of files) {
        const success = await upload(file, false, nameMaxSize)
        if (!success) {
            console.log('Panic!')
            process.exit(1);
        }
    }
    console.log('Done!')
}

async function watch() {
    const files = await getFiles(config.templateDirPath)
    function unitOfWork(file) {
        upload(file, config.useLockMode).then(success => {
            if (success) {
                const [name] = resolveTemplateInfo(file);
                if (config.sharedTemplates.includes(name)) {
                    validateAll();
                }
            }
        })
        if (path.resolve(file) === path.resolve(config.mailSharedTemplatePath)) {
            const dir = path.join(config.templateDirPath, config.mailTemplatePrefix);
            fs.readdir(dir).then(async (files) => {
                for (let file of files) {
                    await upload(path.join(dir, file), true);
                }
            })
        }
    }
    chokidar.watch(config.templateDirPath, {
        persistent: true
    }).on('all', (event, file, stats) => {
        if (file.endsWith('.cshtml') || file.endsWith('.csx') || file.endsWith('.txt')) {
            if (event == 'add' && !files.includes(file)) {
                unitOfWork(file)
            }
            else if (event == 'change') {
                setTimeout(() => { unitOfWork(file) }, 500)
            }
        }
    }).on('error', console.error)
}

async function upload(file, lock, nameMaxSize = 28) {
    const [model, firstLine] = await getModel(file);
    
    const now = new Date()
    const nowText = `${now.toLocaleTimeString()}.${now.getMilliseconds()}`.padEnd(12, '0')
    const modelName = model.Name.padEnd(nameMaxSize);

    if (config.ignoreTemplates.includes(model.Name)) {
        console.log(`[${nowText}] ${modelName}\tIGNORE`)
        return true;
    }
    
    if (lock) {
        if (isInMainBranch(await getHead())) {
            console.error(`'watch' can not work in ${config.gitDefaultBranch} branch`);
            process.exit(1);
        }
        if (isOldMainHead()) {
            console.error(`${config.gitDefaultBranch} is old. You must pull it and merge to current branch.`);
            process.exit(1);
        }
        if (hasAnyUpdatesInMain()) {
            console.error(`${config.gitDefaultBranch} has some updates. You must merge to current branch. `);
            process.exit(1);
        }
        const lockphrase = await getLockPhrase(model.Type);
        if (firstLine === lockphrase || !firstLine.includes(LOCK_MAGIC)) {
            model.Text = `${lockphrase}\n${model.Text}`;
        }
        else {
            console.error(`\x1b[31m[${nowText}] ${modelName}\tNG: ${firstLine}\x1b[0m`)
            return false;
        }
    }

    const valid = await validateTemplate(model.Name, model.Type, model.Text)
    if (valid.startsWith('NG')) {
        console.error(`\x1b[31m[${nowText}] ${modelName}\t${valid}\x1b[0m`)
        return false
    }

    const result = await upsertTemplate(model)
    if (result.startsWith('NG')) {
        console.error(`[${nowText}] ${modelName}\t${result}`)
        return false
    }
    console.log(`[${nowText}] ${modelName}\t${result}`)
    return true;
}

async function unlock(paths, nameMaxSize = 28) {
    const now = new Date()
    const nowText = `${now.toLocaleTimeString()}.${now.getMilliseconds()}`.padEnd(12, '0')
    const files = await getFilesFromPath(paths);

    for (let file of files) {
        const [model, firstLine] = await getModel(file);
        const lockphrase = await getLockPhrase(model.Type);
        const modelName = model.Name.padEnd(nameMaxSize);
        
        if (firstLine === lockphrase) {
            const valid = await validateTemplate(model.Name, model.Type, model.Text)
            if (valid.startsWith('NG')) {
                console.error(`\x1b[31m[${nowText}] ${modelName}\t${valid}\x1b[0m`)
                return false
            }
            const result = await upsertTemplate(model)
            if (result.startsWith('NG')) {
                console.error(`[${nowText}] ${modelName}\t${result}`)
                return false
            }
            console.log(`[${nowText}] ${modelName}\tUNLOCK`);
        }
        else if (firstLine.includes(LOCK_MAGIC)) {
            console.error(`\x1b[31m[${nowText}] ${modelName}\tNG: ${firstLine}\x1b[0m`)
        }
        else {
            console.log(`[${nowText}] ${modelName}\tignore`);
        }
    }
}

const LOCK_MAGIC = '!!!locked!!!';
async function getLockPhrase(type) {
    const head = await getHead();
    const text = `${LOCK_MAGIC} in ${head}`;
    if (type === 'cshtml' || type === 'mail') {
        return `@* ${text} *@`
    }
    else if (type === 'csx' || type === 'template' || type === 'text') {
        return `/* ${text} */`
    }
    else {
        return '';
    }
}

function resolveTemplateInfo(file) {
    const relative = path.relative(config.templateDirPath, file)
    const nameExt = relative.replace(/[\\\/]/g, '')
    const ext = path.extname(nameExt)
    const name = nameExt.replace(ext, '')
    const type = resolveType(name, ext)
    return [name, type];
}

async function getModel(file, withFirstLine = true) {
    const [name, type] = resolveTemplateInfo(file)
    const template = await getTemplate(name, withFirstLine);
    let firstLine = null;
    if (withFirstLine) {
        firstLine = template?.Text?.split('\n',1)[0].trim() || '';
    }
    let text = stripBom(await fs.readFile(file, 'utf8'))
    if (type === 'mail') {
        text = stripBom(await fs.readFile(config.mailSharedTemplatePath, 'utf8')) + '\n' + text;
    }
    return [{
        ...(template || { Name: name }),
        Type: type,
        Text: text || `/*${name}*/`
    }, firstLine]
}

async function getPlan(root) {
    const files = await getFiles(root); 
    const sorted = []
    let nameMaxSize = 0
    for (const file of files) {
        const relative = path.relative(root, file)
        const nameExt = relative.replace(/[\\\/]/g, '')
        const ext = path.extname(nameExt)
        const name = nameExt.replace(ext, '')
        if (config.sharedTemplates.some(_ => _ == name)) {
            sorted.unshift(file)
        } else {
            sorted.push(file)
        }
        nameMaxSize = Math.max(nameMaxSize, name.length)
    }
    return [sorted, nameMaxSize];
}

async function getFiles(root) {
    const files = []
    const dirs = [root]
    do {
        const dir = dirs.pop()
        const items = await fs.readdir(dir, { withFileTypes: true })
        for (const item of items) {
            if (item.isFile())
                files.push(path.join(dir, item.name))
            else if (item.isDirectory())
                dirs.push(path.join(dir, item.name))
        }
    } while (dirs.length > 0)
    return files
}

async function getFilesFromPath(paths) {
    const files = []
    for(let item of paths) {
        const stats = await fs.stat(item);
        if (stats.isDirectory()) {
            files.push(...await getFiles(item));
        }
        else if (stats.isFile) {
            files.push(item);
        }
    }
    return files;
}

async function getTemplate(name, withText) {
    let response = await fetch(ep() + `/meta/Templates?$select=Id,Name${withText?',Text':''}&$filter=Name eq '${name}'`, { headers: { Authorization: auth() } })
    if (!response.ok) {
        const text = await response.text()
        console.error('fetch error:', text)
        return []
    }

    const data = await response.json()

    return data.value[0] || null
}

async function validateTemplate(name, type, content) {
    const [url, model] = type == 'cshtml' ? [ep() + '/template/validate', { Template: content, WithViews: !config.sharedTemplates.some(_ => _ == name) }]
        : type == 'mail' ? [ep() + '/mail/validate', { Template: content }]
            : type == 'csx' ? [ep() + '/query/validate', { Script: content }]
                : [null, null]

    if (url == null)
        return 'skip'

    const response = await fetch(url, { method: 'post', headers: { Authorization: auth(), 'Content-Type': 'application/json' }, body: JSON.stringify(model) })
    if (!response.ok) {
        const contentType = response.headers.get('Content-Type')
        if (contentType && contentType.includes('application/json')) {
            const json = await response.json()
            return 'NG:\n' + json.Message
        }
        else {
            const text = await response.text()
            return 'NG:\n' + response.statusText + text
        }
    }

    return 'OK'
}

async function getLockedTemplateNames() {
    const [method, url] = ['get', ep() + `/meta/Templates/?$select=Name,Text&$filter=contains(Text,'${encodeURIComponent(LOCK_MAGIC)}')`];
    const response = await fetch(url, { method, headers: { Authorization: auth() } })
    
    if (!response.ok ) {
        throw new Error(await response.text());
    }

    const data = await response.json();

    return data.value.map(d => `${d.Name}\t${d.Text.split('\n',1)[0].trim()}` );
}

async function upsertTemplate(template) {
    const [method, url] = template.Id ? ['put', ep() + `/meta/Templates(${template.Id})`] : ['post', ep() + '/meta/Templates']
    const response = await fetch(url, { method, headers: { Authorization: auth(), 'Content-Type': 'application/json' }, body: JSON.stringify(template) })
    if (!response.ok) {
        const text = await response.text()
        return 'NG:\n' + text
    }
    return 'OK'
}
function ep() {
    const url = process.env[config.apiEndpointEnvKey]
    return url.endsWith('/') ? url.splice(0, url.length - 1) : url
}
function auth() {
    return 'Basic ' + Buffer.from(`${process.env[config.apiUsernameEnvKey]}:${process.env[config.apiPasswordEnvKey]}`).toString('base64')
}

function resolveType(name, ext) {
    if (ext == typeMap.mail && name.startsWith(config.mailTemplatePrefix))
        return 'mail'

    return Object.keys(typeMap).find(key => typeMap[key] == ext)
}

async function getHead() {
    return (await fs.readFile('.git/HEAD', 'utf8')).substring(5).split('\n',1)[0].trim();
}

function git(command) {
    return execSync(`git ${command}`).toString();
}

function isInMainBranch(ref) {
    return ref === `refs/heads/${config.gitDefaultBranch}`
}

function isOldMainHead() {
    const remote =  git(`ls-remote origin ${config.gitDefaultBranch}`).split('\t', 1)[0];
    const local =  git(`log --pretty=oneline -1 ${config.gitDefaultBranch}`).split(' ', 1)[0];
    return remote != local;
}

function hasAnyUpdatesInMain() {
    const mergedBranches = git('branch --merged').split('\n').map(l => l.trim());
    return !mergedBranches.includes(config.gitDefaultBranch)
}

main().catch(message => console.error(message));