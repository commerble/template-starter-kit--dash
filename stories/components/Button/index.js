export const render = ({
    label,
    color,
    style,
    size,
    next,
    prev
}) => {
    const klass = ['btn'];

    if (color)
        klass.push('btn-' + color);

    if (style)
        klass.push('btn-' + style);

    if (size)
        klass.push('btn-' + size);

    if (next)
        klass.push('btn-next');

    if (prev)
        klass.push('btn-prev');

    return `<button class="${klass.join(' ')}">${label}</button>`
}