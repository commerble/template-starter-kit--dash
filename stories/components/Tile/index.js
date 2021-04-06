function when(condition, text){
    return condition ? text : '';
}
export const renderProduct = ({
    columns,
    items,
    unwrap
}) => {
    const tiles = `<div class="tiles tiles-x${columns}">
    ${[...Array(items).keys()].map(i => `
    <article class="tile">
        <a href="javascript:void(0)" rel="bookmark">
            <h1>Product Name ${i} 商品名${i} 商品名${i}</h1>
            <figure class="image image-square">
                <img src="https://httpstat.us/404" alt="Tile Image ${i}">
            </figure>
            <div class="tile-info text-right">
                <span class="price"><span class="price-value">¥1,000</span> <span class="price-tax">(税込)</span></span>
            </div>
        </a>
    </article>`).join('\n')}
</div>`;
    return !unwrap ? `<div class="content">${tiles}</div>` : tiles;
}
export const renderArticle = ({
    columns,
    items,
    unwrap
}) => {
    const tiles = `<div class="tiles tiles-x${columns}">
    ${[...Array(items).keys()].map(i => `
    <article class="tile">
        <a href="javascript:void(0)" rel="bookmark">
            <h1>Title of the article tile ${i}</h1>
            <time datetime="2021-01-01">2021.01.01</time>
            <figure class="image image-golden">
                <img src="https://httpstat.us/404" alt="Tile Image ${i}">
            </figure>
        </a>
    </article>`).join('\n')}
</div>`;
    return !unwrap ? `<div class="content">${tiles}</div>` : tiles;
}