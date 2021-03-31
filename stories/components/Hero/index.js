export const render = ({
    title,
    lead,
    action,
    src,
    notfound
}) => {
    if (notfound)
        src = 'https://httpstat.us/404'

    return `<div class="hero-bgimage" style="background-image:url('${src}')">
    <div class="hero-text">
        <p class="title">${title}</p>
        <p class="lead">${lead}</p>
        <div class="block">
            <a href="javascript:void(0)" class="btn btn-ghost btn-primary btn-large">${action}</a>
        </div>
    </div>
</div>`
}