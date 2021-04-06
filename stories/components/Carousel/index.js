const when = (condition, text) => condition ? text : ''
export const render = ({
    notfound,
    additionalClassName
}) => {
    let src = "https://via.placeholder.com/600x600?text=Image";
    let thumb = "https://via.placeholder.com/64x64?text=";

    if (notfound) {
        thumb = src = 'https://httpstat.us/404'
    }

    return `<div class="carousel ${when(additionalClassName,additionalClassName)}">
    <ul class="carousel-images">
        ${[...Array(15).keys()].map(i => `
            <li id="carousel-frame-${i}" class="carousel-frame image image-square">
                <img src="${src + (i+1)}" alt="Image ${i+1}" loading="lazy" decoding="async">
            </li>
        `).join('')}
    </ul>
    <div class="carousel-thumbnails">
        ${[...Array(15).keys()].map(i => `
            <a href="#carousel-frame-${i}" target="_self">
                <div class="image image-square">
                    <img src="${thumb + (i+1)}" width="64" height="64">
                </div>
            </a>
        `).join('')}
    </div>
</div>
`
}