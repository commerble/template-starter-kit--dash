const when = (condition, str) => condition ? str : ''
export const render = ({
    value,
    text,
    invalid
}) => {
    return `<dl class="field">
    <dt class="field-title">Control 1</dt>
    <dd class="field-body">
        ${text?
            `<p class="field-text">${value} ${value}</p>`:
            `<input type="text" value="${value}"><input type="text"  value="${value}">
            <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>`         
        }
    </dd>
</dl>
<dl class="field">
    <dt class="field-title">Control 2</dt>
    <dd class="field-body">
        ${text?
            `<p class="field-text">${value}</p>`:
            `<input type="text" value="${value}" size="100">
            <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>
            <p class="field-note">フィールドの補足説明</p>`         
        }
        
    </dd>
</dl>
<dl class="field">
    <dt class="field-title">Control</dt>
    <dd class="field-body">
        ${text?
            `<p class="field-text">${value}</p>`:
            `<div class="field-group"><input type="text" value="${value}" size="7"><button class="btn">検索</button></div>
            <p class="field-error" ${when(!invalid,'style="display:none;"')}>${when(invalid,'エラーメッセージ')}</p>`         
        }
    </dd>
</dl>`
}