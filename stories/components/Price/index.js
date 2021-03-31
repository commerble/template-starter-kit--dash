function when(condition, text){
    return condition ? text : '';
}
export const render = ({
    price,
    yenMark,
    tax,
    unit,
    strong,
    attention,
    large,
    del
}) => {
    const priceText = price.toLocaleString('ja-JP');
    const unitText = unit == 'yen' ? '円'
                   : unit == 'point' ? 'pt'
                   : '';
    const taxText = tax == 'include' ? '（税込）'
                  : tax == 'notax' ? '（非課税）'
                  : tax == 'exclude' ? '（税抜）'
                  : '';
    const klass = ['price'];

    if (strong)
        klass.push('price-strong');

    if (attention)
        klass.push('price-attention');

    if (large)
        klass.push('price-large')

    if (del)
        klass.push('text-del')

    return `<span class="${klass.join(' ')}"><span class="price-value">${when(yenMark,'&yen;')}${priceText}</span> ${when(!yenMark,unitText)}${when(tax, `<span class="price-tax">${taxText}</span>`)}</span>`
}