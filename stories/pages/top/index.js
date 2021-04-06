import { render as renderGHeader } from '../../components/Gheader/index'
import { render as renderGFooter } from '../../components/Gfooter/index'
import { render as renderGNav } from '../../components/Gnav/index'
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
    <section class="section hero">
        <div class="hero-bgimage" style="background-image:url('https://httpstat.us/404')">
            <div class="hero-text">
                <p class="title">タイトルタイトルタイトル</p>
                <p class="lead">リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文</p>
                <div class="block">
                    <a href="javascript:void(0)" class="btn btn-ghost btn-primary btn-large">アクション</a>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="tiles tiles-x4">
                <article class="tile">
                    <a href="javascript:void(0)" rel="bookmark">
                        <h1>Title of the sub banner 1</h1>
                        <figure class="image image-square">
                            <img src="https://httpstat.us/404" alt="Tile Image 3">
                        </figure>
                    </a>
                </article>
                <article class="tile">
                    <a href="javascript:void(0)" rel="bookmark">
                        <h1>Title of the sub banner 2</h1>
                        <figure class="image image-square">
                            <img src="https://httpstat.us/404" alt="Tile Image 4">
                        </figure>
                    </a>
                </article>
                <article class="tile">
                    <a href="javascript:void(0)" rel="bookmark">
                        <h1>Title of the sub banner 3</h1>
                        <figure class="image image-square">
                            <img src="https://httpstat.us/404" alt="Tile Image 5">
                        </figure>
                    </a>
                </article>
                <article class="tile">
                    <a href="javascript:void(0)" rel="bookmark">
                        <h1>Title of the sub banner 4</h1>
                        <figure class="image image-square">
                            <img src="https://httpstat.us/404" alt="Tile Image 5">
                        </figure>
                    </a>
                </article>
            </div>
        </div>
    </section>
    <section class="section content">
        <h1 class="h-border text-center">NEWS</h1>
        ${renderArticle({columns:3, items:3})}
        <div class="block">
            <button class="btn btn-text btn-primary btn-next">すべてのお知らせを見る</button>
        </div>
    </section>
    <section class="section content">
        <h1 class="h-border text-center">
            季節の商品<br>春のオシャレコーデ
        </h1>
        ${renderProduct({columns: 4, items: 8})}
        <div class="block">
            <button class="btn btn-ghost btn-primary btn-next">もっと見る</button>
        </div>
    </section>
    ${renderGFooter({})}
</body>
</html>`
}