const ejs = require('ejs');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  const fn = ejs.compile(source, { client: true, strict: true }).toString();

  return 'export default ' + fn;

};
