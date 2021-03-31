function when(condition, text){
    return condition ? text : '';
}
export const render = ({
    customer,
    delivery,
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
            <a href="javascript:void(0)" class="gheader-link"><i class="icon-heart"></i><span class="sp-hide">お気に入り</span></a>
            <a href="javascript:void(0)" class="gheader-link"><i class="icon-user"></i><span class="sp-hide">マイページ</span></a>
            <a href="javascript:void(0)" class="gheader-link"><i class="icon-cart"></i><span class="sp-hide">カート</span></a>
            </header>
        <section class="section content">
            <h1 class="h-underline">購入</h1>
            <form>
                <h2 class="h-title">お客様情報</h2>
                ${customer=='guest'?`
                <dl class="field required">
                    <dt class="field-title">氏名</dt>
                    <dd class="field-body">
                        <input type="text" placeholder="山田"><input type="text"  placeholder="太郎">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">フリガナ</dt>
                    <dd class="field-body">
                        <input type="text" placeholder="ヤマダ"><input type="text"  placeholder="タロウ">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">郵便番号</dt>
                    <dd class="field-body">
                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">都道府県</dt>
                    <dd class="field-body">
                        <input type="text" size="7" readonly>
                        <p class="field-error" style="display:none;"></p>
                        <p class="field-note">郵便番号検索から自動入力されます。</p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">市区町村</dt>
                    <dd class="field-body">
                        <input type="text" readonly>
                        <p class="field-error" style="display:none;"></p>
                        <p class="field-note">郵便番号検索から自動入力されます。</p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">通り・丁番地</dt>
                    <dd class="field-body">
                        <input type="text">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field optional">
                    <dt class="field-title">建物名・部屋番号</dt>
                    <dd class="field-body">
                        <input type="text">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">電話番号</dt>
                    <dd class="field-body">
                        <input type="tel" maxlength="11">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">メールアドレス</dt>
                    <dd class="field-body">
                        <input type="email">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                `:customer=='member(no address)'?`
                <dl class="field">
                    <dt class="field-title">氏名</dt>
                    <dd class="field-body">
                        <p class="field-text">山田 太郎</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">フリガナ</dt>
                    <dd class="field-body">
                        <p class="field-text">ヤマダ タロウ</p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">郵便番号</dt>
                    <dd class="field-body">
                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">都道府県</dt>
                    <dd class="field-body">
                        <input type="text" size="7" readonly>
                        <p class="field-error" style="display:none;"></p>
                        <p class="field-note">郵便番号検索から自動入力されます。</p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">市区町村</dt>
                    <dd class="field-body">
                        <input type="text" readonly>
                        <p class="field-error" style="display:none;"></p>
                        <p class="field-note">郵便番号検索から自動入力されます。</p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">通り・丁番地</dt>
                    <dd class="field-body">
                        <input type="text">
                    </dd>
                </dl>
                <dl class="field optional">
                    <dt class="field-title">建物名・部屋番号</dt>
                    <dd class="field-body">
                        <input type="text">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">電話番号</dt>
                    <dd class="field-body">
                        <input type="tel" maxlength="11">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">メールアドレス</dt>
                    <dd class="field-body">
                        <p class="field-text">info@commerble.com</p>
                    </dd>
                </dl>
                `:`
                <dl class="field">
                    <dt class="field-title">氏名</dt>
                    <dd class="field-body">
                        <p class="field-text">山田 太郎</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">フリガナ</dt>
                    <dd class="field-body">
                        <p class="field-text">ヤマダ タロウ</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">住所</dt>
                    <dd class="field-body">
                        <p class="field-text">〒1000000 東京都中央区日本橋蛎殻町</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">電話番号</dt>
                    <dd class="field-body">
                        <p class="field-text">00000000000</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">メールアドレス</dt>
                    <dd class="field-body">
                        <p class="field-text">info@commerble.com</p>
                    </dd>
                </dl>
                `}
                ${delivery?`
                <h2 class="h-title">お届け先</h2>
                <dl class="field required">
                    <dt class="field-title">氏名</dt>
                    <dd class="field-body">
                        <input type="text" placeholder="山田"><input type="text"  placeholder="太郎">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">フリガナ</dt>
                    <dd class="field-body">
                        <input type="text" placeholder="ヤマダ"><input type="text"  placeholder="タロウ">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">郵便番号</dt>
                    <dd class="field-body">
                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">都道府県</dt>
                    <dd class="field-body">
                        <input type="text" size="7" readonly>
                        <p class="field-error" style="display:none;"></p>
                        <p class="field-note">郵便番号検索から自動入力されます。</p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">市区町村</dt>
                    <dd class="field-body">
                        <input type="text" readonly>
                        <p class="field-error" style="display:none;"></p>
                        <p class="field-note">郵便番号検索から自動入力されます。</p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">通り・丁番地</dt>
                    <dd class="field-body">
                        <input type="text">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field optional">
                    <dt class="field-title">建物名・部屋番号</dt>
                    <dd class="field-body">
                        <input type="text">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <dl class="field required">
                    <dt class="field-title">電話番号</dt>
                    <dd class="field-body">
                        <input type="tel" maxlength="11">
                        <p class="field-error" style="display:none;"></p>
                    </dd>
                </dl>
                <div class="block block-vertical">
                    <button class="btn btn-action btn-large">お支払方法の指定に進む</button>
                    <button class="btn btn-primary btn-text btn-large">お客様住所に届ける</button>
                </div>
                `:`
                <div class="block block-vertical">
                    <button class="btn btn-action btn-large">お客様住所に届ける</button>
                    <button class="btn btn-primary btn-text btn-large">別のお届け先を指定する</button>
                </div>
                `}
            </form>
        </section>
        <footer class="gfooter">
            <p class="text-center text-small">© Commerble Inc. 2021</p>
        </footer>
    </body>
</html>`
}
