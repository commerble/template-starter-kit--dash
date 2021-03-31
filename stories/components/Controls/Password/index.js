const when = (condition, str) => condition ? str : ''
const renderPassword = ({show, disabled, readonly, invalid}) => {
    const type = show ? 'text' : 'password'
    const mark = show ? '🙈 HIDE' : '🙊 SHOW'

    return `<div class="field-group"><input type="${type}" ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}><button class="btn">${mark}</button></div>`
}

export const render = ({
    wrap,
    required,
    show, disabled, readonly, invalid
}) => {
    const password = renderPassword({show, disabled, readonly, invalid})

    if (!wrap)
        return password

    return `<dl class="field ${required||''}">
    <dt class="field-title">Control</dt>
    <dd class="field-body">
        ${password}
        <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>
    </dd>
</dl>`
}