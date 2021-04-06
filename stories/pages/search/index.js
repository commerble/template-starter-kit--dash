import { render as renderGHeader } from '../../components/Gheader/index'
import { render as renderGFooter } from '../../components/Gfooter/index'
import { render as renderGNav } from '../../components/Gnav/index'
import { render as renderFacet } from '../../components/Facet/index'
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
        ${renderGHeader({})}
        ${renderGNav({})}
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
                            <i class="badge-icon icon-dash-heart"></i> カテゴリ
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
                        ${renderProduct({columns:4, items:20, unwrap: true})}
                        <div class="block block-vertical">
                            <a class="btn btn-primary btn-text btn-next">次のページ</a>
                            <button class="btn btn-primary btn-ghost pc-hide">🔍 絞り込み条件を変更する</button>
                        </div>
                    `}
                </div>
            </div>
        </section>
        ${renderGFooter({})}
    </body>
    </html>`
}