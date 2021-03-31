export const render = ({
    th
}) => {
    let head = 'td';
    let col = 'Column A';
    let row = i => `Value A${i}`;

    if (th) {
        head = 'th';
        col = '#';
        row = i => `${i}`;
    }

    return `<table class="table">
        <thead>
            <tr>
                <th>Column A</th>
                <th>Column B</th>
                <th>Column C</th>
                <th>Column D</th>
                <th>Column E</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            ${[...Array(8).keys()].map(i => `
            <tr>
                <${head} data-title="Column A">${row(i)}</${head}>
                <td data-title="Column B">Value B${i}</td>
                <td data-title="Column C">Value C${i}</td>
                <td data-title="Column D">Value D${i}</td>
                <td data-title="Column E">Value E${i}</td>
                <td align="center"><button class="btn btn-primary btn-text">Button</button></td>
            </tr>
            `).join('')}
        </tbody>
    </table>`
}