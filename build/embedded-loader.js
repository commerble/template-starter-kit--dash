const fs = require('fs');
const path = require('path');

module.exports = function (source) {
    return source.replace(/(\s*)\/\/\s*embedded\s+(.*)/g, (match, $1, $2, offset, text, groups) => {
        const buffer = fs.readFileSync(path.resolve(path.dirname(this.resourcePath), $2), 'utf-8');
        return $1 + buffer;
    })
}
