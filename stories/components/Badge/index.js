const when = (condition, text) =>  condition ? text : ''
export const render = ({
    removal,
    icon,
    img,
    notfound,
}) => {
    const klass = ['badge'];
    const src = notfound ? 'https://httpstat.us/404' : img;

    if (removal)
        klass.push('badge-removal');

    return `<a class="${klass.join(' ')}">
    ${icon=='font' ? `
    <i class="badge-icon icon-heart"></i>
    `:icon=='img' ? `
    <div class="badge-icon">
        <div class="image image-square">
            <img src="${src}" alt="">
        </div>
    </div>
    `:``}
    Badge バッジ
</a>`
}