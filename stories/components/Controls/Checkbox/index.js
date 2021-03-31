const when = (condition, str) => condition ? str : ''
const renderCheckbox = ({disabled, readonly, invalid}) => {
    return `<label><input type="checkbox" name="example" ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}><span class="text">チェックボックス</span></label>`
}
export const render = ({
    wrap,
    required,
    disabled,
    readonly,
    invalid
}) => {
    const checkbox = renderCheckbox({disabled, readonly, invalid})

    if (!wrap)
        return checkbox

    return `<dl class="field ${required||''}">
    <dt class="field-title">Control</dt>
    <dd class="field-body">
        ${checkbox}
        <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>
    </dd>
</dl>`
}