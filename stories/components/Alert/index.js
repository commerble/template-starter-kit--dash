export const render = ({
    color,
}) => {
    let klass = ["alert"];

    if (color)
        klass.push("alert-" + color);
    
    return `<div class="${klass.join(' ')}">
    <p>アラートメッセージ</p>
    <p>アラートメッセージ</p>
    <p>アラートメッセージ</p>
</div>`
}