"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8242],{"./stories/pages/layout.fn.ejs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{title,body}=locals;return __line=6,__append('\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>'),__line=13,__append(escapeFn(title)),__append("</title>\r\n</head>\r\n\r\n<body>\r\n    "),__line=17,__append(include("gheader")),__append("\r\n    "),__line=18,__append(body),__append("\r\n    "),__line=19,__append(include("gfooter")),__append('\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js" integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validation-unobtrusive/3.2.11/jquery.validate.unobtrusive.min.js" integrity="sha512-EanukVTZc4W9tUCLnDl069Izidg49PcNRKO1upLzKt9ajq66i+bXOtlzXcIbRhb6vVEGF6BCc8wQi5T1ztCpTQ==" crossorigin="anonymous"><\/script>\r\n    <script src="/public/main.js"><\/script>\r\n</body>\r\n</html>'),__line=25,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        title,\r\n        body\r\n    } = locals;\r\n%>\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title><%= title %></title>\r\n</head>\r\n\r\n<body>\r\n    <%- include(\'gheader\') %>\r\n    <%- body %>\r\n    <%- include(\'gfooter\') %>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js" integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validation-unobtrusive/3.2.11/jquery.validate.unobtrusive.min.js" integrity="sha512-EanukVTZc4W9tUCLnDl069Izidg49PcNRKO1upLzKt9ajq66i+bXOtlzXcIbRhb6vVEGF6BCc8wQi5T1ztCpTQ==" crossorigin="anonymous"><\/script>\r\n    <script src="/public/main.js"><\/script>\r\n</body>\r\n</html>',undefined,__line,escapeFn)}}__webpack_require__.d(__webpack_exports__,{Z:()=>anonymous})},"./stories/pages/order/archives/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Item:()=>Item,LastPage:()=>LastPage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var components=__webpack_require__("./stories/pages/components.js"),layout_fn=__webpack_require__("./stories/pages/layout.fn.ejs");function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{empty,lastPage}=locals;return __line=7,__append("\r\n"),__line=8,__append(include("gnav")),__append('\r\n<main class="content-wide columns">\r\n    <div class="col-3 col-order-2 col-order-1-sp">\r\n        <h1 class="h-underline">購入履歴</h1>\r\n        '),__line=12,empty?(__append(' \r\n            <div class="message-box">\r\n                <p class="message text-center lead">アーカイブされたご注文はまだありません。</p>\r\n            </div>\r\n        '),__line=16):(__append('\r\n            <table class="table">\r\n                <caption>これまでにお客様がオンラインストアで購入された履歴の一覧です。</caption>\r\n                <thead>\r\n                    <tr>\r\n                        <th>ご注文日時</th>\r\n                        <th>ご注文番号</th>\r\n                        <th>ご注文状況</th>\r\n                        <th>お支払方法</th>\r\n                        <th>合計金額</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    \r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n                    \r\n                </tbody>\r\n            </table>\r\n            '),__line=69,lastPage||(__append('\r\n                <dvi class="block block-vertical">\r\n                    <a href="./?path=/story/pages-order-archives--last-page" class="btn btn-primary btn-text btn-next">次のページ</a>\r\n                </dvi>\r\n            '),__line=73),__append('\r\n            <hr>\r\n            <dvi class="block block-horizontal block-wrap">\r\n                <a href="#2018" class="btn btn-primary btn-text">2018年</a>\r\n                <a href="#2017" class="btn btn-primary btn-text">2017年</a>\r\n                <a href="#2016" class="btn btn-primary btn-text">2016年</a>\r\n            </dvi>\r\n        '),__line=80),__append('\r\n    </div>    \r\n    <div class="col-1 col-order-1 col-order-2-sp">\r\n        '),__line=83,__append(include("memberMenu",{active:"history"})),__append("\r\n    </div>\r\n</main>"),__line=85,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        empty,\r\n        lastPage\r\n    } = locals;\r\n    const when = (condition, text) => condition ? text : \'\';\r\n%>\r\n<%- include(\'gnav\') %>\r\n<main class="content-wide columns">\r\n    <div class="col-3 col-order-2 col-order-1-sp">\r\n        <h1 class="h-underline">購入履歴</h1>\r\n        <% if (empty) { %> \r\n            <div class="message-box">\r\n                <p class="message text-center lead">アーカイブされたご注文はまだありません。</p>\r\n            </div>\r\n        <% } else { %>\r\n            <table class="table">\r\n                <caption>これまでにお客様がオンラインストアで購入された履歴の一覧です。</caption>\r\n                <thead>\r\n                    <tr>\r\n                        <th>ご注文日時</th>\r\n                        <th>ご注文番号</th>\r\n                        <th>ご注文状況</th>\r\n                        <th>お支払方法</th>\r\n                        <th>合計金額</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    \r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td data-title="ご注文日時">2021/03/05 18:03</td>\r\n                        <td data-title="ご注文番号">55</td>\r\n                        <td data-title="ご注文状況">注文完了</td>\r\n                        <td data-title="お支払方法">外部決済（カード・コンビニ・キャリア）</td>\r\n                        <td data-title="合計金額"><span class="price"><span class="price-value">¥1,000</span> </span></td>\r\n                        <td align="center"><button class="btn btn-primary btn-text">詳細を見る</button></td>\r\n                    </tr>\r\n                    \r\n                </tbody>\r\n            </table>\r\n            <% if (!lastPage) { %>\r\n                <dvi class="block block-vertical">\r\n                    <a href="./?path=/story/pages-order-archives--last-page" class="btn btn-primary btn-text btn-next">次のページ</a>\r\n                </dvi>\r\n            <% } %>\r\n            <hr>\r\n            <dvi class="block block-horizontal block-wrap">\r\n                <a href="#2018" class="btn btn-primary btn-text">2018年</a>\r\n                <a href="#2017" class="btn btn-primary btn-text">2017年</a>\r\n                <a href="#2016" class="btn btn-primary btn-text">2016年</a>\r\n            </dvi>\r\n        <% } %>\r\n    </div>    \r\n    <div class="col-1 col-order-1 col-order-2-sp">\r\n        <%- include(\'memberMenu\', { active: \'history\' }) %>\r\n    </div>\r\n</main>',undefined,__line,escapeFn)}}function item_fn_anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{campaign}=locals;return __line=6,__append('\r\n<main class="section content">\r\n    <h1 class="h-underline">購入履歴</h1>\r\n    '),__line=9,__append(include("cartLines",{items:3,campaign,action:!1})),__append('\r\n    <h2 class="h-title">お客様情報</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">氏名（フリガナ）</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">山田太郎 / ヤマダタロウ</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">住所</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">〒1030014 都道府県市区町村町丁番号 建物名・部屋番号</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">電話番号</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">00000000000</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">メールアドレス</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">info@commerble.com</p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">お届け先</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">氏名 / フリガナ</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">山田太郎 / ヤマダタロウ</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">住所</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">〒1030014 都道府県市区町村町丁番号 建物名・部屋番号</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">電話番号</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">00000000000</p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">お届け日時</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">お届け日</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">\r\n                2023年8月1日(火) <br>\r\n                -- or -- <br>\r\n                発売日が異なる商品を同時（同一ご注文番号の場合）にご予約いただいた場合、<br/>\r\n                発売日が最も遅い商品に合わせて全ての商品をお届けいたします。<br/>\r\n                -- or -- <br>\r\n                最短でお届け\r\n            </p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">お届け時間</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">\r\n                指定なし\r\n            </p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">お支払方法</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">決済方法</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">外部決済（カード・コンビニ・キャリア）</p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">備考</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">備考内容</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">なし</p>\r\n        </dd>\r\n    </dl>\r\n    <div class="block block-vertical">\r\n        <a href="./?path=/story/pages-order-history--default" class="btn btn-primary btn-text btn-prev">購入履歴一覧へもどる</a>\r\n    </div>\r\n</main>\r\n'),__line=94,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        campaign,\r\n    } = locals;\r\n    const when = (condition, text) => condition ? text : \'\';    \r\n%>\r\n<main class="section content">\r\n    <h1 class="h-underline">購入履歴</h1>\r\n    <%- include(\'cartLines\', { items: 3, campaign, action: false }) %>\r\n    <h2 class="h-title">お客様情報</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">氏名（フリガナ）</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">山田太郎 / ヤマダタロウ</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">住所</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">〒1030014 都道府県市区町村町丁番号 建物名・部屋番号</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">電話番号</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">00000000000</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">メールアドレス</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">info@commerble.com</p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">お届け先</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">氏名 / フリガナ</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">山田太郎 / ヤマダタロウ</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">住所</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">〒1030014 都道府県市区町村町丁番号 建物名・部屋番号</p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">電話番号</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">00000000000</p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">お届け日時</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">お届け日</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">\r\n                2023年8月1日(火) <br>\r\n                -- or -- <br>\r\n                発売日が異なる商品を同時（同一ご注文番号の場合）にご予約いただいた場合、<br/>\r\n                発売日が最も遅い商品に合わせて全ての商品をお届けいたします。<br/>\r\n                -- or -- <br>\r\n                最短でお届け\r\n            </p>\r\n        </dd>\r\n    </dl>\r\n    <dl class="field">\r\n        <dt class="field-title">お届け時間</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">\r\n                指定なし\r\n            </p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">お支払方法</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">決済方法</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">外部決済（カード・コンビニ・キャリア）</p>\r\n        </dd>\r\n    </dl>\r\n    <h2 class="h-title">備考</h3>\r\n    <dl class="field">\r\n        <dt class="field-title">備考内容</dt>\r\n        <dd class="field-body">\r\n            <p class="field-text">なし</p>\r\n        </dd>\r\n    </dl>\r\n    <div class="block block-vertical">\r\n        <a href="./?path=/story/pages-order-history--default" class="btn btn-primary btn-text btn-prev">購入履歴一覧へもどる</a>\r\n    </div>\r\n</main>\r\n',undefined,__line,escapeFn)}}const index_stories={title:"Pages/Order/Archives",argTypes:{}},Default={name:"/order/archives - any items",render:args=>(0,layout_fn.Z)({title:"購入履歴",body:anonymous(args,null,components.Z)},null,components.Z),args:{}},LastPage={name:"/order/archives - last page",render:args=>(0,layout_fn.Z)({title:"購入履歴",body:anonymous(args,null,components.Z)},null,components.Z),args:{lastPage:!0}},Empty={name:"/order/archives - empty",render:args=>(0,layout_fn.Z)({title:"購入履歴",body:anonymous(args,null,components.Z)},null,components.Z),args:{empty:!0}},Item={name:"/order/archives/{orderId}",render:args=>(0,layout_fn.Z)({title:"購入履歴",body:item_fn_anonymous(args,null,components.Z)},null,components.Z),args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: '/order/archives - any items',\n  render(args) {\n    return layout({\n      title: '購入履歴',\n      body: renderList(args, null, components)\n    }, null, components);\n  },\n  args: {}\n}",...Default.parameters?.docs?.source}}},LastPage.parameters={...LastPage.parameters,docs:{...LastPage.parameters?.docs,source:{originalSource:"{\n  name: '/order/archives - last page',\n  render(args) {\n    return layout({\n      title: '購入履歴',\n      body: renderList(args, null, components)\n    }, null, components);\n  },\n  args: {\n    lastPage: true\n  }\n}",...LastPage.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  name: '/order/archives - empty',\n  render(args) {\n    return layout({\n      title: '購入履歴',\n      body: renderList(args, null, components)\n    }, null, components);\n  },\n  args: {\n    empty: true\n  }\n}",...Empty.parameters?.docs?.source}}},Item.parameters={...Item.parameters,docs:{...Item.parameters?.docs,source:{originalSource:"{\n  name: '/order/archives/{orderId}',\n  render(args) {\n    return layout({\n      title: '購入履歴',\n      body: renderItem(args, null, components)\n    }, null, components);\n  },\n  args: {}\n}",...Item.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LastPage","Empty","Item"]}}]);