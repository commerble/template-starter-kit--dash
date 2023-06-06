export const renderIcon = ({
    icon,
}) => {
    let klass = "icon-dash-" + icon;

    return `<i class="${klass}"></i>`
}

export const renderProductIcon = ({
    url,
    small
}) => {
    const klass = ['product-icon']
    if (small)
        klass.push('icon-small')
    return `<div class="${klass.join(' ')}">
    <div class="image image-square">
        <img src="${url}" alt="icon">
    </div>
</div>`
}