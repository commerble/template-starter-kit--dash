
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

type TemplateType = 'cshtml' | 'mail' | 'csx' | 'text' | 'template'
type Extension = '.cshtml' | '.csx' | '.txt'
const typeMap: Record<TemplateType, Extension | null> = {
    text: '.txt',
    cshtml: '.cshtml',
    mail: '.cshtml',
    csx: '.csx',
    template: null,
}
type Template = { Id: number, Name: string, Type: TemplateType, Text: string };

function resolveType(name: string, ext: string): TemplateType {
    if (ext == typeMap.mail && name.startsWith(config.mailTemplatePrefix))
        return 'mail'

    return getKeys(typeMap).find(key => typeMap[key] == ext)!
}

function stripBom(string: string): string {
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

function getKeys<T extends {[key: string]: unknown}>(obj: T): (keyof T)[] {
  return Object.keys(obj)
}

function git(command: string): string {
    return execSync(`git ${command}`).toString();
}

async function getHead(): Promise<string> {
    return ((await fs.readFile('.git/HEAD', 'utf8')) as string).substring(5).split('\n',1)[0].trim();
}

function isInMainBranch(ref: string): boolean {
    return ref === `refs/heads/${config.gitDefaultBranch}`
}

function isOldMainHead(): boolean {
    const remote =  git(`ls-remote origin ${config.gitDefaultBranch}`).split('\t', 1)[0];
    const local =  git(`log --pretty=oneline -1 ${config.gitDefaultBranch}`).split(' ', 1)[0];
    return remote != local;
}

function hasAnyUpdatesInMain(): boolean {
    const mergedBranches = git('branch --merged').split('\n').map(l => l.trim());
    return !mergedBranches.includes(config.gitDefaultBranch)
}

function ep(): string {
    const url = process.env[config.apiEndpointEnvKey]!
    return url.endsWith('/') ? url.slice(0, url.length - 1) : url
}

function auth(): string {
    return 'Basic ' + Buffer.from(`${process.env[config.apiUsernameEnvKey]}:${process.env[config.apiPasswordEnvKey]}`).toString('base64')
}

function http(path:string, init: RequestInit): Promise<Response> {
    if (path.includes('..')) {
        console.error('Cannot use relative path.');
        process.exit(1);
    }
    if (!path.startsWith('/')) {
        path = '/' + path;
    }
    init ??= {}
    init.headers ??= { }
    init.headers = { ...init.headers, Authorization: auth() };
    return fetch(ep() + path, init);
}

async function upsertTemplate(template: Omit<Template,'Id'>&Partial<Pick<Template, 'Id'>>) {
    const [method, url] = template.Id ? ['put', `/meta/Templates(${template.Id})`] : ['post', '/meta/Templates']
    const response = await http(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(template) })
    if (!response.ok) {
        const text = await response.text()
        return 'NG:\n' + text
    }
    return 'OK'
}

async function getLockedTemplateNames(): Promise<string[]> {
    const [method, url] = ['get', `/meta/Templates/?$select=Name,Text&$filter=contains(Text,'${encodeURIComponent(LOCK_MAGIC)}')`];
    const response = await http(url, { method })
    
    if (!response.ok ) {
        throw new Error(await response.text());
    }

    const data: {value: Template[]} = await response.json();

    return data.value.map(d => `${d.Name}\t${d.Text.split('\n',1)[0].trim()}`);
}

async function validateTemplate(name: string, type: string, content: string): Promise<string> {
    const [url, model] = type == 'cshtml' ? ['/template/validate', { Template: content, WithViews: !config.sharedTemplates.some(_ => _ == name) }]
        : type == 'mail' ? ['/mail/validate', { Template: content }]
            : type == 'csx' ? ['/query/validate', { Script: content }]
                : [null, null]

    if (url == null)
        return 'skip'

    const response = await http(url, { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(model) })
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

async function getTemplate(name: string, withText: boolean): Promise<Template | null> {
    let response = await http(`/meta/Templates?$select=Id,Name${withText?',Text':''}&$filter=Name eq '${name}'`, { method: 'get' })
    if (!response.ok) {
        const text = await response.text()
        console.error('fetch error:', text)
        return null
    }

    const data = await response.json()

    return data.value[0] || null
}

async function getFiles(root: string): Promise<string[]> {
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

async function getFilesFromPath(paths: string[]): Promise<string[]> {
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

async function getPlan(root: string, files?: string[]): Promise<[sorted:string[], nameMaxSize: number]> {
    if (!files) {
        files = await getFiles(root)
    }
    const sorted = []
    let nameMaxSize = 0
    for (const file of files) {
        const relative = path.relative(root, file)
        const nameExt = relative.replace(/[\\\/]/g, '')
        const ext = path.extname(nameExt)
        const name = nameExt.replace(ext, '')
        if (name.includes(".")) {
            throw `テンプレートディレクトリのファイルのみ同期できます。: ${file}`
        }
        if (config.sharedTemplates.some(_ => _ == name)) {
            sorted.unshift(file)
        } else {
            sorted.push(file)
        }
        nameMaxSize = Math.max(nameMaxSize, name.length)
    }
    return [sorted, nameMaxSize];
}

function resolveTemplateInfo(file: string): [name: string, type: TemplateType] {
    const relative = path.relative(config.templateDirPath, file)
    const nameExt = relative.replace(/[\\\/]/g, '')
    const ext = path.extname(nameExt)
    const name = nameExt.replace(ext, '')
    const type = resolveType(name, ext)
    return [name, type];
}

async function getModel(file: string, withFirstLine: boolean = true): Promise<[template:Omit<Template,'Id'>&Partial<Pick<Template, 'Id'>>, firstLine: string|null]> {
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

const LOCK_MAGIC = '!!!locked!!!';
async function getLockPhrase(type: TemplateType) {
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

function validateConfig() {
    if (!process.env[config.apiEndpointEnvKey]) {
        console.error(`${config.apiEndpointEnvKey}の設定が必要です。`)
        process.exit(1);
    }
    if (!process.env[config.apiUsernameEnvKey]) {
        console.error(`${config.apiUsernameEnvKey}の設定が必要です。`)
        process.exit(1);
    }
    if (!process.env[config.apiPasswordEnvKey]) {
        console.error(`${config.apiPasswordEnvKey}の設定が必要です。`)
        process.exit(1);
    }
}

async function validateAll(): Promise<void> {
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

async function uploadAll(): Promise<void> {
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

async function watch(): Promise<void> {
    const files = await getFiles(config.templateDirPath)
    function unitOfWork(file: string) {
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
            fs.readdir(dir).then(async (files: string[]) => {
                for (let file of files) {
                    await upload(path.join(dir, file), true);
                }
            })
        }
    }
    const options = process.env.REMOTE_CONTAINERS === 'true' ? {
        persistent: true,
        usePolling: true,
        interval: 250,
    } : { 
        persistent: true 
    };
    chokidar.watch(config.templateDirPath, options).on('all', (event: string, file: string) => {
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

async function upload(file: string, lock: boolean, nameMaxSize: number = 28): Promise<boolean> {
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
        if (firstLine === lockphrase || !firstLine?.includes(LOCK_MAGIC)) {
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

async function unlock(paths: string[], nameMaxSize: number = 28): Promise<void> {
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
                return
            }
            const result = await upsertTemplate(model)
            if (result.startsWith('NG')) {
                console.error(`[${nowText}] ${modelName}\t${result}`)
                return
            }
            console.log(`[${nowText}] ${modelName}\tUNLOCK`);
        }
        else if (firstLine?.includes(LOCK_MAGIC)) {
            console.error(`\x1b[31m[${nowText}] ${modelName}\tNG: ${firstLine}\x1b[0m`)
        }
        else {
            console.log(`[${nowText}] ${modelName}\tignore`);
        }
    }
}

async function rest(method: string, path: string, json?: string): Promise<void> {
    const headers:HeadersInit = json ? { 'Content-Type': 'application/json' } : {}
    const response = await http(path, { method, headers, body: json})
    console.log(response.status);
    console.log(`Content-Type: ${response.headers.has('Content-Type')?response.headers.get('Content-Type'):''}`)
    console.log(await response.text())
}

async function main(): Promise<void> {
    validateConfig();
    
    const cmd = process.argv[2]

    if (cmd == 'all') {
        await uploadAll()
        return
    }

    if (cmd == 'watch') {
        await watch()
        return
    }

    if (cmd == 'unlock') {
        const files = process.argv.slice(3);
        await unlock(files);
        return
    }

    if (cmd == 'upload') {
        const [files, nameMaxSize] = await getPlan(config.templateDirPath, process.argv.slice(3).map(x => path.resolve(x)));
        for(let file of files) {
            await upload(file, config.useLockMode, nameMaxSize).then(success => {
                if (success) {
                    const [name] = resolveTemplateInfo(file);
                    if (config.sharedTemplates.includes(name)) {
                        validateAll();
                    }
                }
            })
        }
        return
    }

    if (cmd == 'rest') {
        const method = process.argv[3];
        const path = process.argv[4];
        const body = process.argv[5];

        if (method && path) {
            await rest(method, path, body);
        }

        return;
    }

    console.log(`USAGE:
    node sync.js <COMMAND>

COMMANDS:
    all
        すべてのテンプレートをアップロードします。

    watch
        起動中に変更のあったテンプレートをアップロードします。

    unlock <...FILE_PATHs>
        指定された1つ以上のファイルをアンロックします。

    upload <...FILE_PATHs>
        指定されたファイルをアップロードします。

    rest <method> <path> [bodyJson]
        REST APIを実行します。
`)
}

main().catch(message => console.error(message));