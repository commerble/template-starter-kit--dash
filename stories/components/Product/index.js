export const render = ({
}) => {
    return `<article class="product-detail content-wide">
    <div class="product-summary">
        <h1 class="title">Product Name 商品名</h1>
        <p class="product-price">
            <span class="price price-large"><span class="price-value">1,000</span> 円<span class="price-tax">（税込）</span></span>
            <span class="price"><span class="price-value">10</span> pt</span>
        </p>
        <hr>
        <table class="product-skus">
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <div class="image image-square">
                            <img src="https://via.placeholder.com/200x200?text=White" loading="lazy" decoding="async">
                        </div>
                        ホワイト
                    </th>
                    <th>
                        <div class="image image-square">
                            <img src="https://via.placeholder.com/200x200?text=Black" loading="lazy" decoding="async">
                        </div>
                        ブラック
                    </th>
                    <th>
                        <div class="image image-square">
                            <img src="https://via.placeholder.com/200x200?text=Gray" loading="lazy" decoding="async">
                        </div>
                        グレー
                    </th>
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
    <div class="product-image carousel">
        <ul class="carousel-images">
            <li id="carousel-frame-0" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image1" alt="Image 1" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-1" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image2" alt="Image 2" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-2" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image3" alt="Image 3" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-3" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image4" alt="Image 4" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-4" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image5" alt="Image 5" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-5" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image6" alt="Image 6" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-6" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image7" alt="Image 7" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-7" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image8" alt="Image 8" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-8" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image9" alt="Image 9" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-9" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image10" alt="Image 10" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-10" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image11" alt="Image 11" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-11" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image12" alt="Image 12" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-12" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image13" alt="Image 13" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-13" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image14" alt="Image 14" loading="lazy" decoding="async">
            </li>
            <li id="carousel-frame-14" class="carousel-frame image image-square">
                <img src="https://via.placeholder.com/600x600?text=Image15" alt="Image 15" loading="lazy" decoding="async">
            </li>
        </ul>
        <div class="carousel-thumbnails">
            <a href="#carousel-frame-0" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=1" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-1" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=2" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-2" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=3" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-3" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=4" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-4" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=5" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-5" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=6" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-6" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=7" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-7" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=8" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-8" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=9" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-9" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=10" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-10" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=11" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-11" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=12" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-12" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=13" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-13" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=14" width="64" height="64">
                </div>
            </a>
            <a href="#carousel-frame-14" target="_self">
                <div class="image image-square">
                    <img src="https://via.placeholder.com/64x64?text=15" width="64" height="64">
                </div>
            </a>
        </div>
    </div>
</article>`
}