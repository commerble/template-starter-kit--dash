const when = (condition, str) => condition ? str : ''
const renderRadio = ({disabled, readonly, invalid}) => {
    return `<label><input type="radio" name="example" ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}><span class="text">ラジオボタン１</span></label>
<label><input type="radio" name="example" ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}><span class="text">ラジオボタン２</span></label>
<label><input type="radio" name="example" ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}><span class="text">ラジオボタン３</span></label>`
}
export const render = ({
    wrap,
    required, disabled, readonly, invalid
}) => {
    const radio = renderRadio({disabled, readonly, invalid})

    if (!wrap)
        return radio

    return `<dl class="field ${required||''}">
    <dt class="field-title">Control</dt>
    <dd class="field-body">
        ${radio}
        <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>
    </dd>
</dl>`
}