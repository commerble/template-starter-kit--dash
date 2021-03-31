export const render = ({
}) => {
    let klass = "message-box";

    return `<div class="${klass}">
    <p class="message text-center lead">購入処理に失敗しました。</p>
    <div class="message block">
        <ul class=" text-list-dot">
            <li>決済プロバイダでエラーが発生しました。</li>
            <li>クレジットカードの与信残高をご確認ください。</li>
        </ul>
    </div>
    <div class="block">
        <a class="btn btn-primary btn-prev">カートへ戻る</a>
    </div>
</div>`
}