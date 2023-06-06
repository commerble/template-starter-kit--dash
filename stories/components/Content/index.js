export const render = ({
    wide,
}) => {
    let klass = "content";

    if (wide)
        klass = "content-wide";
    
    return `<div class="${klass}" style="background: gray; height: 400px;"></div>`
}