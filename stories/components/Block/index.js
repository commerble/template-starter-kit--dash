export const render = ({
    direction,
    end,
    wrap,
    full1,
    full2,
}) => {
    const klass = ['block'];

    if (direction)
        klass.push('block-' + direction);
    
    if (end)
        klass.push('block-' + end);

    if (wrap)
        klass.push('block-wrap');

    return `<div class="${klass.join(' ')}">
    <button class="btn ${full1?'full':''}">Button</button>
    <button class="btn ${full2?'full':''}">Button</button>
</div>`
}