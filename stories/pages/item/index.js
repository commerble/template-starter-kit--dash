import { render as renderGHeader } from '../../components/Gheader/index'
import { render as renderGFooter } from '../../components/Gfooter/index'
import { render as renderGNav } from '../../components/Gnav/index'
import { render as renderCaroucel } from '../../components/Carousel/index'
import { renderProduct, renderArticle } from '../../components/Tile/index'

export const render = ({

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
    ${renderGHeader({})}
    ${renderGNav({})}
    <article class="section product-detail content-wide">
        <div class="product-summary">
            <h1 class="title text-center">Product Name 商品名</h1>
            <p class="product-price text-center">
                <span class="price price-large"><span class="price-value">1,000</span> 円<span class="price-tax">（税込）</span></span>
                <span class="price"><span class="price-value">10</span> pt</span>
            </p>
            <div class="block block-horizontal">
                <div class="badge">
                    <i class="badge-icon icon-dash-heart"></i> カテゴリ
                </div>
                <div class="badge">タグA</div>
                <div class="badge">タグB</div>
                <div class="badge">タグC</div>
            </div>
            <hr>
            <table class="product-skus">
                <thead>
                    <tr>
                        <th></th>
                        <th>ホワイト</th>
                        <th>ブラック</th>
                        <th>グレー</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>S</th>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th>M</th>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th>L</th>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                        <td>
                            <span class="price"><span class="price-value">¥1,000</span> </span>
                            <br>
                            <label>
                                <input type="radio" name="item" value="1"><span></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="block block-vertical">
                <button class="btn btn-primary btn-large full">カートに入れる</button>
                <button class="btn btn-primary btn-text">お気に入りに追加する</button>
            </div>
        </div>
        <div class="product-description content">
            <h2 class="title text-center">商品説明</h2>
            <p>10年に1度の当たり年。品質は昨年より良い。出来は上々で申し分の無い仕上がり。ここ10年で最高。過去10年で最高と言われた01年を上回る出来栄え。</p>
            <p>1995年以来の出来。100年に1度の出来、近年にない良い出来。香りが強く中々の出来栄え。ここ数年で最高。昨年同様良い出来栄え。柔らかく果実味が豊かで上質な味わい。</p>
            <p>豊かな果実味と程よい酸味が調和した味。50年に１度の出来栄え。2009年と同等の出来。今年は天候が良かった為、昨年並みの仕上がり。爽やかでバランスが良い。</p>
            <p>2009年より果実味に富んだリッチなワイン。出来が良く、豊満で絹のように滑らかな味わい。ボジョレー史上最悪の不作。糖度と酸度のバランスが良く、軽やかでフルーティーな仕上がり。</p>
            <p>みずみずしさが感じられる素晴らしい品質。2009年の50年に一度のできを超える味わい。エレガントで味わい深く、とてもバランスがよい。今世紀で最高の出来。</p>
            <p>エレガントで酸味と果実味のバランスがとれた上品な味わい。豊満で朗らか、絹のようにしなやか。しかもフレッシュで輝かしい。2017年、2015年、2009年と並び、珠玉のヴィンテージとして歴史に刻まれるでしょう。</p>
            <p>理想的な条件の下、すばらしいヴィンテージへの期待高まる。天候などの条件は厳しかったが、有望で生産者のテクニックが重要な年。バランスのとれた味で、適度な量と高い品質のワイン。</p>
        </div>
        ${renderCaroucel({additionalClassName: 'product-image'})}
    </article>
    <aside class="section content">
        <h1 class="h-border text-center">関連商品</h1>
        ${renderProduct({columns:4, items:4, unwrap: true})}
    </aside>
    <aside class="section content">
        <h1 class="h-border text-center">関連ページ</h1>
        ${renderArticle({columns:2, items:2, unwrap: true})}
    </aside>
    ${renderGFooter({})}
</body>
</html>`
}