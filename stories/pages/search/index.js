import {render as renderFacet} from '../../components/Facet/index'
import {renderProduct} from '../../components/Tile/index'
function when(condition, text){
    return condition ? text : '';
}
export const render = ({
    empty,
    facetGroupActive
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
        <section class="section content-wide">
            <h1 class="h-border text-center">商品検索</h1>
            <div class="columns">
                <div class="col-1 sp-hide">
                    <form onsubmit="return false;">
                        <div class="block">
                            <button class="btn btn-default">🔍 絞り込み</button>
                        </div>
                        ${renderFacet({active:facetGroupActive})}
                        <div class="block">
                            <button class="btn btn-default">🔍 絞り込み</button>
                        </div>
                    </form>
                </div>
                <div class="col-3">
                    <div class="block block-wrap">
                        <div class="badge badge-removal">
                            <i class="badge-icon icon-heart"></i> カテゴリ
                        </div>
                        <div class="badge badge-removal">タグ1</div>
                        <div class="badge badge-removal">タグ4</div>
                        <div class="badge badge-removal">タグ7</div>
                    </div>
                    ${empty ? `
                        <div class="message-box">
                            <p class="message text-center lead">ご希望の条件に合致する商品が見つかりませんでした。条件を変更し再度お試しください。</p>
                        </div>
                    ` : `
                        ${renderProduct({})}
                        <div class="block block-vertical">
                            <a class="btn btn-primary btn-text btn-next">次のページ</a>
                            <button class="btn btn-primary btn-ghost pc-hide">🔍 絞り込み条件を変更する</button>
                        </div>
                    `}
                </div>
            </div>
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