function when(condition, text){
    return condition ? text : '';
}
export const render = ({
    items,
    error,
    campaign
}) => {
    const lines = [...Array(items).keys()].map(i => ({
        name: 'サンプル商品 Sample Product',
        href: '#/product/sku',
        icon: 'https://httpstat.us/404',
        alt: 'product name',
        unitPrice: 1000,
        unitTax: 100,
        qty: 2,
        linePrice: campaign ? 1760 : 2200,
        tax: campaign ? 160 : 200,
        discountPrice: campaign ? 2200 - 1760 : 0,
        point: campaign ? 16 : 20,
        error: error && i == 1
    }))
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
        <nav class="gnav">
            <ul>
                <li><a href="javascript:void(0)">Home</a></li>
                <li>
                    <details>
                        <summary>Lady's</summary>
                        <ul>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Men's</summary>
                        <ul>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Unisex</summary>
                        <ul>
                        </ul>
                    </details>
                </li>
            </ul>
        </nav>
        <section class="section content">
            <h1 class="h-border">ショッピングカート</h1>
        ${items == 0 ? `
            <div class="message-box">
                <p class="message text-center lead">カートに商品が入っていません。</p>
                <div class="block">
                    <a class="btn btn-primary btn-prev">お買い物を続ける</a>
                </div>
            </div>
        ` : `
            ${when(error, `
            <div class="alert alert-error">
                <p>「明細２」の在庫がありません。</p>
                <p>「明細２」は販売期間外です。</p>
            </div>
            `)}
            <table class="table">
                <thead>
                    <tr>
                        <th colspan="2">商品</th>
                        <th>個数</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    ${lines.map(o => `
                        <tr>
                            <td data-title="">
                                <a href="${o.href}" class="product-icon">
                                    <div class="image image-square">
                                        <img src="${o.icon}" alt="${o.alt}">
                                    </div>
                                </a>
                            </td>
                            <td data-title="">
                                <dl>
                                    <dt><a href="${o.href}">${o.name}</a></dt>
                                    <dd>
                                        ${when(campaign,`
                                        <span class="price text-del"><span class="price-value">¥${(o.unitPrice+o.unitTax).toLocaleString('ja-JP')}</span> <span class="price-tax">（税込）</span></span><br>
                                        `)}
                                        <span class="price ${when(campaign,'price-attention')}"><span class="price-value">¥${(o.unitPrice+o.unitTax - o.discountPrice / o.qty).toLocaleString('ja-JP')}</span> <span class="price-tax">（税込）</span></span>
                                        <span class="price"><span class="price-value">${o.point / o.qty}</span> pt</span><br>
                                        <button class="btn ${o.error ? 'btn-danger' : 'btn-primary btn-text'} btn-small">カートから削除</button>
                                    </dd>
                                </dl>
                            </td>
                            <td data-title="個数">
                                ${o.error ? `
                                <span>在庫切れ</span>
                                ` : `
                                <select>
                                    <option value="1">1</option>
                                    <option value="2" selected>2</option>
                                    <option value="10">10</option>
                                </select>
                                `}
                            </td>
                            <td data-title="小計">
                                <span class="price ${when(campaign,'price-attention')}"><span class="price-value">¥${(o.linePrice).toLocaleString('ja-JP')}</span> <span class="price-tax">（税込）</span></span>
                                <span class="price"><span class="price-value">${(o.point).toLocaleString('ja-JP')}</span> pt</span>
                                ${when(campaign, `
                                <br><span class="price">（<span class="price-value">¥${(o.discountPrice).toLocaleString('ja-JP')}</span>値引き）</span>
                                `)}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
                <tfooter>
                    <tr>
                        <th colspan="3">合計</th>
                        <td align="center">
                            <span class="text-nowrap">
                            <span class="price price-strong ${when(campaign,'price-attention')} price-large"><span class="price-value">¥${lines.reduce((total, line) => total += line.linePrice, 0).toLocaleString('ja-JP')}</span> <span class="price-tax">（税込）</span></span> + 送料<br>
                            </span>
                            <span class="price"><span class="price-value">${lines.reduce((total, line) => total += line.point, 0).toLocaleString('ja-JP')}</span> ポイント付与</span>
                            ${when(campaign, `
                            <br><span class="price">（<span class="price-value">¥${lines.reduce((total, line) => total += line.discountPrice, 0).toLocaleString('ja-JP')}</span>値引き）</span>
                            `)}
                        </td>
                    </tr>
                    ${when(campaign, `
                    <tr>
                        <th colspan="3">適用キャンペーン</th>
                        <td align="center">
                            <ul>
                                <li>夏の大感謝祭全品2割引</li>
                                <li>夏の大感謝祭お買い物特典</li>
                            </ul>
                        </td>
                    </tr>
                    `)}
                </tfooter>
            </table>
            ${when(error, `
            <div class="alert alert-error">
                <p>エラーがあります。購入できない商品をカートから削除してください。</p>
            </div>
            `)}
            <div class="block block-vertical">
                <a class="btn btn-action btn-large btn-next" ${when(error, 'disabled')}>注文手続きへ進む</a>
                <button class="btn btn-primary btn-text btn-prev">お買い物を続ける</button>
            </div>
        `}
        </section>
        <footer class="gfooter">
            <ul>
                <li>
                    SERVICE
                    <ul>
                        <li><a href="javascript:void(0)">商品検索</a></li>
                        <li><a href="javascript:void(0)">ニュース</a></li>
                        <li><a href="javascript:void(0)">マイページ</a></li>
                    </ul>
                </li>
                <li>
                    INFO
                    <ul>
                        <li><a href="javascript:void(0)">ご利用規約</a></li>
                        <li><a href="javascript:void(0)">プライバシーポリシー</a></li>
                        <li><a href="javascript:void(0)">特定商取引に関する表記</a></li>
                    </ul>
                </li>
                <li>
                    SHOP
                    <ul>
                        <li><a href="javascript:void(0)">会社情報</a></li>
                        <li><a href="javascript:void(0)">採用情報</a></li>
                        <li><a href="javascript:void(0)">お問い合わせ</a></li>
                    </ul>
                </li>
            </ul>
            <hr>
            <p class="text-center text-small">© Commerble Inc. 2021</p>
        </footer>
    </body>
    </html>`
}