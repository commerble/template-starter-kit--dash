function when(condition, text){
    return condition ? text : '';
}
export const render = ({
    external
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
                <table class="table">
                    <thead>
                        <tr>
                            <th colspan="2">商品</th>
                            <th>個数</th>
                            <th>小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td data-title="">
                                    <a href="#/product/sku" class="product-icon">
                                        <div class="image image-square">
                                            <img src="https://httpstat.us/404" alt="product name">
                                        </div>
                                    </a>
                                </td>
                                <td data-title="">
                                    <dl>
                                        <dt><a href="#/product/sku">サンプル商品 Sample Product</a></dt>
                                        <dd>
                                            
                                            <span class="price text-del"><span class="price-value">¥1,100</span> <span class="price-tax">（税込）</span></span><br>
                                            <span class="price price-attention"><span class="price-value">¥855</span> <span class="price-tax">（税込）</span></span>
                                            <span class="price"><span class="price-value">8</span> pt</span><br>
                                            <button class="btn btn-primary btn-text btn-small">カートから削除</button>
                                        </dd>
                                    </dl>
                                </td>
                                <td data-title="個数">
                                    2
                                </td>
                                <td data-title="小計">
                                    <span class="price price-attention"><span class="price-value">¥1,710</span> <span class="price-tax">（税込）</span></span>
                                    <span class="price"><span class="price-value">16</span> pt</span>
                                    
                                    <br><span class="price">（<span class="price-value">¥440</span>値引き）</span>
                                    <span class="price">（<span class="price-value">50</span>pt利用）</span>
                                    
                                </td>
                            </tr>
                        
                            <tr>
                                <td data-title="">
                                    <a href="#/product/sku" class="product-icon">
                                        <div class="image image-square">
                                            <img src="https://httpstat.us/404" alt="product name">
                                        </div>
                                    </a>
                                </td>
                                <td data-title="">
                                    <dl>
                                        <dt><a href="#/product/sku">サンプル商品 Sample Product</a></dt>
                                        <dd>
                                            
                                            <span class="price text-del"><span class="price-value">¥1,100</span> <span class="price-tax">（税込）</span></span><br>
                                            
                                            <span class="price price-attention"><span class="price-value">¥855</span> <span class="price-tax">（税込）</span></span>
                                            <span class="price"><span class="price-value">8</span> pt</span><br>
                                            <button class="btn btn-primary btn-text btn-small">カートから削除</button>
                                        </dd>
                                    </dl>
                                </td>
                                <td data-title="個数">
                                    2
                                </td>
                                <td data-title="小計">
                                    <span class="price price-attention"><span class="price-value">¥1,710</span> <span class="price-tax">（税込）</span></span>
                                    <span class="price"><span class="price-value">16</span> pt</span>
                                    
                                    <br><span class="price">（<span class="price-value">¥440</span>値引き）</span>
                                    <span class="price">（<span class="price-value">50</span>pt利用）</span>
                                </td>
                            </tr>
                    </tbody>
                    <tfooter>
                        <tr>
                            <th colspan="3">合計</th>
                            <td align="center">
                                <span class="text-nowrap">
                                <span class="price price-strong price-attention price-large"><span class="price-value">¥3,420</span> <span class="price-tax">（税込）</span></span> + 送料<br>
                                </span>
                                <span class="price"><span class="price-value">32</span> ポイント付与</span>
                                <br><span class="price">（<span class="price-value">¥880</span>値引き）</span>
                                <span class="price">（<span class="price-value">100</span>pt利用）</span>
                            </td>
                        </tr>
                        
                        <tr>
                            <th colspan="3">適用キャンペーン</th>
                            <td align="center">
                                <ul>
                                    <li>2割引クーポン</li>
                                </ul>
                            </td>
                        </tr>
                        
                    </tfooter>
                </table>
                <h2 class="h-centerline mt"><span>ご注文詳細情報</span></h2>
                <h3 class="h-title">お客様情報</h3>
                <dl class="field">
                    <dt class="field-title">氏名（フリガナ）</dt>
                    <dd class="field-body">
                        <p class="field-text">山田 太郎（ヤマダ タロウ）</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">住所</dt>
                    <dd class="field-body">
                        <p class="field-text">〒1000013 東京都中央区日本橋蛎殻町</p>
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
                <h3 class="h-title">お届け先</h3>
                <dl class="field">
                    <dt class="field-title">氏名（フリガナ）</dt>
                    <dd class="field-body">
                        <p class="field-text">山田 太郎（ヤマダ タロウ）</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">住所</dt>
                    <dd class="field-body">
                        <p class="field-text">〒1000013 東京都中央区日本橋蛎殻町</p>
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
                <h3 class="h-title">お届け日時</h3>
                <dl class="field">
                    <dt class="field-title">お届け日</dt>
                    <dd class="field-body">
                        <p class="field-text">最短でお届け</p>
                    </dd>
                </dl>
                <dl class="field">
                    <dt class="field-title">お届け時間</dt>
                    <dd class="field-body">
                        <p class="field-text">18:00-21:00</p>
                    </dd>
                </dl>
                <h3 class="h-title">お支払方法</h3>
                <dl class="field">
                    <dt class="field-title">決済方法</dt>
                    <dd class="field-body">
                        <p class="field-text">外部決済（カード、コンビニ決済、キャリア決済）</p>
                    </dd>
                </dl>
                <h3 class="h-title">備考</h3>
                <dl class="field">
                    <dt class="field-title">備考内容</dt>
                    <dd class="field-body">
                        <p class="field-text">家の前の道が悪路なので梱包材多めにお願いいたします。</p>
                    </dd>
                </dl>
                <div class="block block-vertical">
                    <a class="btn btn-action btn-large">${external?'注文を確定して決済へ進む':'注文を完了する'}</a>
                </div>
            </form>
        </section>
        <footer class="gfooter">
            <p class="text-center text-small">© Commerble Inc. 2021</p>
        </footer>
    </body>
</html>`;
}