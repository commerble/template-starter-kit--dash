module.exports = function (source) {
  return source.replace(/url\((['"]?)([^'")]+)\1\)/g, (match, quote, url) => {
    if (url.startsWith('data:') || url.startsWith('http')) return match;

    let cdnPath = `${process.env.CDN_PREFIX.replace(/\/+$/, '')}/${url}`;

    return `url(${quote}${cdnPath}${quote})`;
  });
};
