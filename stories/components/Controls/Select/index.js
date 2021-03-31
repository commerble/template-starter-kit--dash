const when = (condition, str) => condition ? str : ''
const renderSelect = ({disabled, readonly, invalid}) => {
    return `<select ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}>
    <option value="">未選択</option>
    <option value="1">選択肢１</option>
    <option value="1">選択肢２</option>
    <option value="1">選択肢３</option>
</select>`
}
const renderDate = () => {
    return `
<select ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
</select>
年
<select ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}>
    <option value="1">1</option>
    <option value="...">...</option>
    <option value="12">12</option>
</select>
月
<select ${when(disabled, 'disabled')} ${when(readonly, 'readonly')} ${when(invalid, 'class="input-validation-error"')}>
    <option value="1">1</option>
    <option value="...">..</option>
    <option value="31">31</option>
</select>
日
`
}
export const render = ({
    wrap,
    required,
    date, disabled, readonly, invalid
}) => {
    const select = date ? renderDate({disabled, readonly, invalid}) : renderSelect({ disabled, readonly, invalid})

    if (!wrap)
        return select

    return `<dl class="field ${required||''}">
    <dt class="field-title">Control</dt>
    <dd class="field-body">
${select}
        <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>
    </dd>
</dl>`
}