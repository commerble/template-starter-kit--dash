
export const render = ({
    src,
    ratio,
    notfound,
    wrap,
    wrapWidth,
}) => {
    const klass = ['image'];

    if (ratio)
        klass.push('image-' + ratio);

    if (notfound)
        src = "https://httpstat.us/404";

    if (!wrap)
        return `<div class="${klass.join(' ')}">
    <img src="${src}" alt="Sample image" loading="lazy" decoding="async">
</div>`

    return `<div style="width:${wrapWidth}px">
    <div class="${klass.join(' ')}">
        <img src="${src}" alt="Sample image" loading="lazy" decoding="async">
    </div>
</div>`
}