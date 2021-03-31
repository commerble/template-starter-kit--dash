function when(condition, text){
    return condition ? text : '';
}
export const render = ({
    deliveryDate,
    deliveryHourRange,
}) => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>top</title>
    </head>
    <body>
        <header class="gheader content-wide">
            <h1 class="logo"><a href="javascript:void(0)" class="image"><img src="https://httpstat.us/404" alt="site title"></a></h1>
            <a href="javascript:void(0)" class="gheader-link"><i class="icon-heart"></i></a>
            <a href="javascript:void(0)" class="gheader-link"><i class="icon-user"></i></a>
            <a href="javascript:void(0)" class="gheader-link"><i class="icon-cart"></i></a>
        </header>
        <section class="section content">
            <h1 class="h-underline">購入</h1>
            <form>
                <h2 class="h-title">お届け日時</h2>
                <dl class="field optional">
                    <dt class="field-title">お届け日</dt>
                    <dd class="field-body">
                        ${deliveryDate ? `
                        <select>
                            <option value="">最短でお届け</option>
                            <option value="2021-04-01">2021年4月1日（木）</option>
                            <option value="2021-04-02">2021年4月2日（土）</option>
                            <option value="2021-04-03">2021年4月3日（日）</option>
                        </select>
                        <p class="field-error" style="display:none;"></p>
                        `:`
                        <p class="field-text">お届け日の指定はご利用いただけません。</p>
                        `}
                    </dd>
                </dl>
                <dl class="field optional">
                    <dt class="field-title">お届け時間</dt>
                    <dd class="field-body">
                        ${deliveryHourRange ? `
                        <select>
                            <option value="0000">指定なし</option>
                            <option value="0812">午前中</option>
                            <option value="1214">12:00-14:00</option>
                            <option value="1416">14:00-16:00</option>
                            <option value="1618">16:00-18:00</option>
                            <option value="1821">18:00-21:00</option>
                        </select>
                        <p class="field-error" style="display:none;"></p>
                        `:`
                        <p class="field-text">お届け時間の指定はご利用いただけません。</p>
                        `}
                    </dd>
                </dl>
                <h2 class="h-title">お支払方法</h2>
                <dl class="field required">
                    <dt class="field-title">決済方法</dt>
                    <dd class="field-body">
                        <select>
                            <option value="">-- 選択してください --</option>
                            <option value="CashOnDelivery">代引き</option>
                            <option value="Offsite">銀行振込</option>
                            <option value="External">外部決済（カード、コンビニ決済、キャリア決済）</option>
                        </select>
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <h2 class="h-title">ポイント</h2>
                <p class="field-desc">現在の所持ポイントは100ptです。今回のご購入金額は1,920 円です。</p>
                <dl class="field optional">
                    <dt class="field-title">ご利用ポイント</dt>
                    <dd class="field-body">
                        <input type="number" value="0" size="5">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <h2 class="h-title">クーポンのご利用</h2>
                <p class="field-desc">クーポンをお持ちの方は、コードをご入力ください。</p>
                <dl class="field optional">
                    <dt class="field-title">クーポンコード</dt>
                    <dd class="field-body">
                        <input type="text">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <h2 class="h-title">備考</h2>
                <p class="field-desc">ご注文内容に関する補足がありましたら、ご記入ください</p>
                <dl class="field optional">
                    <dt class="field-title">備考内容</dt>
                    <dd class="field-body">
                        <textarea></textarea>
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <div class="block block-vertical">
                    <a class="btn btn-action btn-large">内容の確認に進む</a>
                    <a class="btn btn-primary btn-text btn-prev">配送情報を変更する</a>
                </div>
            </form>
        </section>
        <footer class="gfooter">
            <p class="text-center text-small">© Commerble Inc. 2021</p>
        </footer>
    </body>
</html>`;
}