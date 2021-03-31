const when = (condition, str) => condition ? str : ''
const renderTextArea = ({rows, disabled, readonly, invalid}) => {
    return `<textarea ${when(rows === 'number', `rows=${rows}`)} ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}></textarea>`
}
export const render = ({
    wrap,
    required,
    rows, disabled, readonly, invalid
}) => {
    const textarea = renderTextArea({rows, disabled, readonly, invalid})

    if (!wrap)
        return textarea

    return `<dl class="field ${required||''}">
    <dt class="field-title">Control</dt>
    <dd class="field-body">
        ${textarea}
        <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>
    </dd>
</dl>`
}