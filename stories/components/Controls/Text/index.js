const when = (condition, str) => condition ? str : ''
const renderText = ({type, size, placeholder, disabled, readonly, invalid}) => {
    return `<input type="${type}" ${when(typeof size === 'number', `size="${size}"`)} placeholder="${placeholder||''}" ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}>`
}
export const render = ({
    wrap,
    required,
    type,
    size,
    placeholder, 
    note,
    disabled, readonly, invalid
}) => {
    const text = renderText({type, size, placeholder, disabled, readonly, invalid})

    if (!wrap)
        return text

    return `<dl class="field ${required||''}">
    <dt class="field-title">Control</dt>
    <dd class="field-body">
        ${text}
        <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>
        ${when(note, `<p class="field-note">${note}</p>`)}
    </dd>
</dl>`
}