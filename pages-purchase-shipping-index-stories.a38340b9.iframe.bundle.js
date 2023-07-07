"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1078],{"./stories/pages/purchase/shipping/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Member:()=>Member,MemberFirst:()=>MemberFirst,OtherDest:()=>OtherDest,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var components=__webpack_require__("./stories/pages/components.js");function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{customer,delivery}=locals;return __line=6,__append('\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>STEP 1</title>\r\n</head>\r\n<body>\r\n    '),__line=16,__append(include("gheader")),__append('\r\n    <section class="section content">\r\n        <h1 class="h-underline">購入</h1>\r\n        <form>\r\n            <h2 class="h-title">お客様情報</h2>\r\n            '),__line=21,"guest"===customer?(__append('\r\n                <dl class="field required">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="山田"><input type="text"  placeholder="太郎">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="ヤマダ"><input type="text"  placeholder="タロウ">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">郵便番号</dt>\r\n                    <dd class="field-body">\r\n                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">都道府県</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" size="7" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">市区町村</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">通り・丁番地</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field optional">\r\n                    <dt class="field-title">建物名・部屋番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="tel" maxlength="11">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">メールアドレス</dt>\r\n                    <dd class="field-body">\r\n                        <input type="email">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n            '),__line=87):"member(no address)"==customer?(__append('\r\n                <dl class="field">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">山田 太郎</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">ヤマダ タロウ</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">郵便番号</dt>\r\n                    <dd class="field-body">\r\n                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">都道府県</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" size="7" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">市区町村</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">通り・丁番地</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field optional">\r\n                    <dt class="field-title">建物名・部屋番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="tel" maxlength="11">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">メールアドレス</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">info@commerble.com</p>\r\n                    </dd>\r\n                </dl>\r\n            '),__line=149):(__append('\r\n                <dl class="field">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">山田 太郎</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">ヤマダ タロウ</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">住所</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">〒1000000 東京都中央区日本橋蛎殻町</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">00000000000</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">メールアドレス</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">info@commerble.com</p>\r\n                    </dd>\r\n                </dl>\r\n            '),__line=180),__append("\r\n            "),__line=181,delivery?(__append(' \r\n                <h2 class="h-title">お届け先</h2>\r\n                <dl class="field required">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="山田"><input type="text"  placeholder="太郎">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="ヤマダ"><input type="text"  placeholder="タロウ">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">郵便番号</dt>\r\n                    <dd class="field-body">\r\n                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">都道府県</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" size="7" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">市区町村</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">通り・丁番地</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field optional">\r\n                    <dt class="field-title">建物名・部屋番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="tel" maxlength="11">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <div class="block block-vertical">\r\n                    <button class="btn btn-action btn-large">お支払方法の指定に進む</button>\r\n                    <button class="btn btn-primary btn-text btn-large">お客様住所に届ける</button>\r\n                </div>\r\n            '),__line=245):(__append('\r\n                <div class="block block-vertical">\r\n                    <button class="btn btn-action btn-large">お客様住所に届ける</button>\r\n                    <button class="btn btn-primary btn-text btn-large">別のお届け先を指定する</button>\r\n                </div>\r\n            '),__line=250),__append("\r\n        </form>\r\n    </section>\r\n    "),__line=253,__append(include("gfooter")),__append("\r\n</body>\r\n</html>"),__line=255,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        customer,\r\n        delivery,\r\n    } = locals;\r\n%>\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>STEP 1</title>\r\n</head>\r\n<body>\r\n    <%- include(\'gheader\') %>\r\n    <section class="section content">\r\n        <h1 class="h-underline">購入</h1>\r\n        <form>\r\n            <h2 class="h-title">お客様情報</h2>\r\n            <% if (customer === \'guest\') { %>\r\n                <dl class="field required">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="山田"><input type="text"  placeholder="太郎">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="ヤマダ"><input type="text"  placeholder="タロウ">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">郵便番号</dt>\r\n                    <dd class="field-body">\r\n                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">都道府県</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" size="7" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">市区町村</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">通り・丁番地</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field optional">\r\n                    <dt class="field-title">建物名・部屋番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="tel" maxlength="11">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">メールアドレス</dt>\r\n                    <dd class="field-body">\r\n                        <input type="email">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n            <% } else if (customer == \'member(no address)\') { %>\r\n                <dl class="field">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">山田 太郎</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">ヤマダ タロウ</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">郵便番号</dt>\r\n                    <dd class="field-body">\r\n                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">都道府県</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" size="7" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">市区町村</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">通り・丁番地</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field optional">\r\n                    <dt class="field-title">建物名・部屋番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="tel" maxlength="11">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">メールアドレス</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">info@commerble.com</p>\r\n                    </dd>\r\n                </dl>\r\n            <% } else { %>\r\n                <dl class="field">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">山田 太郎</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">ヤマダ タロウ</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">住所</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">〒1000000 東京都中央区日本橋蛎殻町</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">00000000000</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field">\r\n                    <dt class="field-title">メールアドレス</dt>\r\n                    <dd class="field-body">\r\n                        <p class="field-text">info@commerble.com</p>\r\n                    </dd>\r\n                </dl>\r\n            <% } %>\r\n            <% if (delivery) { %> \r\n                <h2 class="h-title">お届け先</h2>\r\n                <dl class="field required">\r\n                    <dt class="field-title">氏名</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="山田"><input type="text"  placeholder="太郎">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">フリガナ</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" placeholder="ヤマダ"><input type="text"  placeholder="タロウ">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">郵便番号</dt>\r\n                    <dd class="field-body">\r\n                        <div class="field-group"><input type="tel" size="7" placeholder="1000013" maxlength="7"><button class="btn">検索</button></div>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">都道府県</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" size="7" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">市区町村</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text" readonly>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                        <p class="field-note">郵便番号検索から自動入力されます。</p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">通り・丁番地</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field optional">\r\n                    <dt class="field-title">建物名・部屋番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="text">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <dl class="field required">\r\n                    <dt class="field-title">電話番号</dt>\r\n                    <dd class="field-body">\r\n                        <input type="tel" maxlength="11">\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    </dd>\r\n                </dl>\r\n                <div class="block block-vertical">\r\n                    <button class="btn btn-action btn-large">お支払方法の指定に進む</button>\r\n                    <button class="btn btn-primary btn-text btn-large">お客様住所に届ける</button>\r\n                </div>\r\n            <% } else { %>\r\n                <div class="block block-vertical">\r\n                    <button class="btn btn-action btn-large">お客様住所に届ける</button>\r\n                    <button class="btn btn-primary btn-text btn-large">別のお届け先を指定する</button>\r\n                </div>\r\n            <% } %>\r\n        </form>\r\n    </section>\r\n    <%- include(\'gfooter\') %>\r\n</body>\r\n</html>',undefined,__line,escapeFn)}}const index_stories={title:"Pages/Purchase/Shipping",argTypes:{customer:{control:{type:"select"},options:["guest","member(no address)","member"]},delivery:{control:"boolean"}}},Default={name:"/purchase/n/shipping - guest",render:args=>anonymous(args,null,components.Z),args:{customer:"guest",delivery:!1}},OtherDest={name:"/purchase/n/shipping - other destination",render:args=>anonymous(args,null,components.Z),args:{customer:"guest",delivery:!0}},MemberFirst={name:"/purchase/n/shipping - member first buy",render:args=>anonymous(args,null,components.Z),args:{customer:"member(no address)",delivery:!1}},Member={name:"/purchase/n/shipping - member",render:args=>anonymous(args,null,components.Z),args:{customer:"member",delivery:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: '/purchase/n/shipping - guest',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    customer: 'guest',\n    delivery: false\n  }\n}",...Default.parameters?.docs?.source}}},OtherDest.parameters={...OtherDest.parameters,docs:{...OtherDest.parameters?.docs,source:{originalSource:"{\n  name: '/purchase/n/shipping - other destination',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    customer: 'guest',\n    delivery: true\n  }\n}",...OtherDest.parameters?.docs?.source}}},MemberFirst.parameters={...MemberFirst.parameters,docs:{...MemberFirst.parameters?.docs,source:{originalSource:"{\n  name: '/purchase/n/shipping - member first buy',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    customer: 'member(no address)',\n    delivery: false\n  }\n}",...MemberFirst.parameters?.docs?.source}}},Member.parameters={...Member.parameters,docs:{...Member.parameters?.docs,source:{originalSource:"{\n  name: '/purchase/n/shipping - member',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    customer: 'member',\n    delivery: false\n  }\n}",...Member.parameters?.docs?.source}}};const __namedExportsOrder=["Default","OtherDest","MemberFirst","Member"]}}]);