"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9643],{"./stories/pages/layout.fn.ejs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{title,body}=locals;return __line=6,__append('\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>'),__line=13,__append(escapeFn(title)),__append("</title>\r\n</head>\r\n\r\n<body>\r\n    "),__line=17,__append(include("gheader")),__append("\r\n    "),__line=18,__append(body),__append("\r\n    "),__line=19,__append(include("gfooter")),__append('\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js" integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validation-unobtrusive/3.2.11/jquery.validate.unobtrusive.min.js" integrity="sha512-EanukVTZc4W9tUCLnDl069Izidg49PcNRKO1upLzKt9ajq66i+bXOtlzXcIbRhb6vVEGF6BCc8wQi5T1ztCpTQ==" crossorigin="anonymous"><\/script>\r\n    <script src="/public/main.js"><\/script>\r\n</body>\r\n</html>'),__line=25,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        title,\r\n        body\r\n    } = locals;\r\n%>\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title><%= title %></title>\r\n</head>\r\n\r\n<body>\r\n    <%- include(\'gheader\') %>\r\n    <%- body %>\r\n    <%- include(\'gfooter\') %>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js" integrity="sha512-UdIMMlVx0HEynClOIFSyOrPggomfhBKJE28LKl8yR3ghkgugPnG6iLfRfHwushZl1MOPSY6TsuBDGPK2X4zYKg==" crossorigin="anonymous"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validation-unobtrusive/3.2.11/jquery.validate.unobtrusive.min.js" integrity="sha512-EanukVTZc4W9tUCLnDl069Izidg49PcNRKO1upLzKt9ajq66i+bXOtlzXcIbRhb6vVEGF6BCc8wQi5T1ztCpTQ==" crossorigin="anonymous"><\/script>\r\n    <script src="/public/main.js"><\/script>\r\n</body>\r\n</html>',undefined,__line,escapeFn)}}__webpack_require__.d(__webpack_exports__,{Z:()=>anonymous})},"./stories/pages/site/account/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Complete:()=>Complete,Confirm:()=>Confirm,Form:()=>Form,NeedActivation:()=>NeedActivation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var components=__webpack_require__("./stories/pages/components.js"),layout_fn=__webpack_require__("./stories/pages/layout.fn.ejs");function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{serverError}=locals;return __line=6,__append("\r\n"),__line=7,__append(include("gnav")),__append('\r\n<main class="section content">\r\n    <h1 class="h-underline">新規会員登録</h1>\r\n    '),__line=10,serverError&&(__append("\r\n        "),__line=11,__append(include("alert",{color:"error"})),__append("\r\n    "),__line=12),__append('\r\n    <form action="" method="post">\r\n        <dl class="field">\r\n            <dt class="field-title">氏名</dt>\r\n            <dd class="field-body">\r\n                <input type="text"\r\n                    name="LastName"\r\n                    placeholder = "例）山田",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger-on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "氏名（姓）は必須項目です。",\r\n                    data-val-length = "氏名（姓）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "氏名（姓）はひらがな、カタカタ、漢字、全角英数字、－―ー‐ヽヾゝゞ〃仝々〆〇 のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u3040-\\u30FF|\\u4E00-\\u9FFF|０-９Ａ-Ｚａ-ｚ|－|―|ー|‐|ヽ|ヾ|ゝ|ゞ|〃|仝|々|〆|〇]+$"\r\n                >\r\n                <input type="text"\r\n                    name="FirstName"\r\n                    placeholder = "例）太郎",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger_on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "氏名（名）は必須項目です。",\r\n                    data-val-length = "氏名（名）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "氏名（名）はひらがな、カタカタ、漢字、全角英数字、－―ー‐ヽヾゝゞ〃仝々〆〇 のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u3040-\\u30FF|\\u4E00-\\u9FFF|０-９Ａ-Ｚａ-ｚ|－|―|ー|‐|ヽ|ヾ|ゝ|ゞ|〃|仝|々|〆|〇]+$"\r\n                >\r\n                <p class="field-error" data-valmsg-for="LastName" data-valmsg-replace="true"></p>\r\n                <p class="field-error" data-valmsg-for="FirstName" data-valmsg-replace="true"></p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">フリガナ</dt>\r\n            <dd class="field-body">\r\n                <input type="text"\r\n                    name="LastNameKana"\r\n                    placeholder = "例）ヤマダ",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger-on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "フリガナ（セイ）は必須項目です。",\r\n                    data-val-length = "フリガナ（セイ）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "フリガナ（セイ）はカタカタ、゠・ーヽヾヿ のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u30A0-\\u30FF]+$"\r\n                >\r\n                <input type="text"\r\n                    name="FirstNameKana"\r\n                    placeholder = "例）タロウ",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger_on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "フリガナ（メイ）は必須項目です。",\r\n                    data-val-length = "フリガナ（メイ）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "フリガナ（メイ）はカタカタ、゠・ーヽヾヿ のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u30A0-\\u30FF]+$"\r\n                >\r\n                <p class="field-error" data-valmsg-for="LastNameKana" data-valmsg-replace="true"></p>\r\n                <p class="field-error" data-valmsg-for="FirstNameKana" data-valmsg-replace="true"></p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field required">\r\n            <dt class="field-title">メールアドレス</dt>\r\n            <dd class="field-body">\r\n                <input type="text"\r\n                    name="UserName"\r\n                    placeholder = "例）xxxxxx@commerble.com"\r\n                    data-val = "true"\r\n                    data-val-required="メールアドレスは必須項目です。"\r\n                    data-val-email="メールアドレスをご入力ください。"\r\n                >\r\n                <p class="field-error" data-valmsg-for="UserName" data-valmsg-replace="true"></p>\r\n                <p class="field-note">ドメイン受信拒否機能を設定されている方は&nbsp;commerble.com&nbsp;からの受信許可を設定してください。 </p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field required">\r\n            <dt class="field-title">パスワード</dt>\r\n            <dd class="field-body">\r\n                <div class="field-group">\r\n                    <input type="password"\r\n                        name="Password"\r\n                        autocomplete = "off"\r\n                        data-val = "true"\r\n                        data-val-required = "パスワードは必須項目です。"\r\n                        data-val-regex = "パスワードには英数字8文字以上必要です。"\r\n                        data-val-regex-pattern="^(?=.*?[a-zA-Z!&quot;#$%&\'\\(\\)\\-=^~\\\\\\|@`\\[\\{;\\+:\\*\\]\\},&lt;\\.&gt;/\\?_])(?=.*?\\d)[a-zA-Z\\d!&quot;#$%&\'\\(\\)\\-=^~\\\\\\|@`\\[\\{;\\+:\\*\\]\\},&lt;\\.&gt;/\\?_]{8,64}$"\r\n                    >\r\n                    <button type="button" class="btn" ic-action="togglePasswordMask" data-show="🙊 SHOW" data-hide="🙈 HIDE">🙊 SHOW</button>\r\n                </div>\r\n                <p class="field-error" data-valmsg-for="Password" data-valmsg-replace="true"></p>\r\n                <p class="field-note">半角英数字8～64文字で設定してください。記号もご使用いただけます。</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field required">\r\n            <dt class="field-title">パスワード再入力</dt>\r\n            <dd class="field-body">\r\n                <div class="field-group">\r\n                    <input type="password"\r\n                        name="ConfirmPassword"\r\n                        autocomplete="off"\r\n                        data-val="true"\r\n                        data-val-required="パスワード再入力は必須項目です。"\r\n                        data-val-equalto="再入力された値がパスワードと異なります。"\r\n                        data-val-equalto-other="Password"\r\n                    >\r\n                    <button type="button" class="btn" ic-action="togglePasswordMask" data-show="🙊 SHOW" data-hide="🙈 HIDE">🙊 SHOW</button>\r\n                </div>\r\n                <p class="field-error" data-valmsg-for="ConfirmPassword" data-valmsg-replace="true"></p>\r\n            </dd>\r\n        </dl>\r\n        '),__line=125,__append(include("dateField",{wrap:!0,title:"生年月日",required:"required"})),__append("\r\n        "),__line=126,__append(include("radioField",{wrap:!0,title:"性別",required:"optional",name:"Sex",options:[{text:"未選択",value:""},{text:"男性",value:"Male"},{text:"女性",value:"Female"}]})),__line=130,__append("\r\n        "),__line=131,__append(include("radioField",{wrap:!0,title:"メルマガ配信",required:"optional",name:"Subscribe",options:[{text:"希望しない",value:"false"},{text:"希望する",value:"true"}]})),__line=134,__append('\r\n        <p class="text-center"><a href="@Href("~/page/privacy")" target="_blank">プライバシーポリシー</a>、<a href="@Href("~/page/terms")" target="_blank">ご利用規約</a>をお読みください。</p>\r\n        <div class="block">\r\n            <button type="submit" name="confirm" value="confirm" class="btn btn-primary btn-next">同意して登録内容を確認する</button>\r\n        </div>\r\n    </form>\r\n</main>'),__line=140,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        serverError,\r\n    } = locals;\r\n    const when = (condition, str) => condition ? str : \'\'\r\n%>\r\n<%- include(\'gnav\') %>\r\n<main class="section content">\r\n    <h1 class="h-underline">新規会員登録</h1>\r\n    <% if (serverError) { %>\r\n        <%- include(\'alert\', { color: \'error\' }) %>\r\n    <% } %>\r\n    <form action="" method="post">\r\n        <dl class="field">\r\n            <dt class="field-title">氏名</dt>\r\n            <dd class="field-body">\r\n                <input type="text"\r\n                    name="LastName"\r\n                    placeholder = "例）山田",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger-on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "氏名（姓）は必須項目です。",\r\n                    data-val-length = "氏名（姓）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "氏名（姓）はひらがな、カタカタ、漢字、全角英数字、－―ー‐ヽヾゝゞ〃仝々〆〇 のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u3040-\\u30FF|\\u4E00-\\u9FFF|０-９Ａ-Ｚａ-ｚ|－|―|ー|‐|ヽ|ヾ|ゝ|ゞ|〃|仝|々|〆|〇]+$"\r\n                >\r\n                <input type="text"\r\n                    name="FirstName"\r\n                    placeholder = "例）太郎",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger_on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "氏名（名）は必須項目です。",\r\n                    data-val-length = "氏名（名）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "氏名（名）はひらがな、カタカタ、漢字、全角英数字、－―ー‐ヽヾゝゞ〃仝々〆〇 のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u3040-\\u30FF|\\u4E00-\\u9FFF|０-９Ａ-Ｚａ-ｚ|－|―|ー|‐|ヽ|ヾ|ゝ|ゞ|〃|仝|々|〆|〇]+$"\r\n                >\r\n                <p class="field-error" data-valmsg-for="LastName" data-valmsg-replace="true"></p>\r\n                <p class="field-error" data-valmsg-for="FirstName" data-valmsg-replace="true"></p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">フリガナ</dt>\r\n            <dd class="field-body">\r\n                <input type="text"\r\n                    name="LastNameKana"\r\n                    placeholder = "例）ヤマダ",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger-on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "フリガナ（セイ）は必須項目です。",\r\n                    data-val-length = "フリガナ（セイ）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "フリガナ（セイ）はカタカタ、゠・ーヽヾヿ のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u30A0-\\u30FF]+$"\r\n                >\r\n                <input type="text"\r\n                    name="FirstNameKana"\r\n                    placeholder = "例）タロウ",\r\n                    ic-action = "removeSpace;toZenkaku;validateForce",\r\n                    ic-trigger_on = "focusout",\r\n                    data-val = "true",\r\n                    data-val-required = "フリガナ（メイ）は必須項目です。",\r\n                    data-val-length = "フリガナ（メイ）は64文字以内でご入力ください。",\r\n                    data-val-length-max = "64",\r\n                    data-val-regex = "フリガナ（メイ）はカタカタ、゠・ーヽヾヿ のみ使用可能です。",\r\n                    data-val-regex-pattern = "^[\\u30A0-\\u30FF]+$"\r\n                >\r\n                <p class="field-error" data-valmsg-for="LastNameKana" data-valmsg-replace="true"></p>\r\n                <p class="field-error" data-valmsg-for="FirstNameKana" data-valmsg-replace="true"></p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field required">\r\n            <dt class="field-title">メールアドレス</dt>\r\n            <dd class="field-body">\r\n                <input type="text"\r\n                    name="UserName"\r\n                    placeholder = "例）xxxxxx@commerble.com"\r\n                    data-val = "true"\r\n                    data-val-required="メールアドレスは必須項目です。"\r\n                    data-val-email="メールアドレスをご入力ください。"\r\n                >\r\n                <p class="field-error" data-valmsg-for="UserName" data-valmsg-replace="true"></p>\r\n                <p class="field-note">ドメイン受信拒否機能を設定されている方は&nbsp;commerble.com&nbsp;からの受信許可を設定してください。 </p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field required">\r\n            <dt class="field-title">パスワード</dt>\r\n            <dd class="field-body">\r\n                <div class="field-group">\r\n                    <input type="password"\r\n                        name="Password"\r\n                        autocomplete = "off"\r\n                        data-val = "true"\r\n                        data-val-required = "パスワードは必須項目です。"\r\n                        data-val-regex = "パスワードには英数字8文字以上必要です。"\r\n                        data-val-regex-pattern="^(?=.*?[a-zA-Z!&quot;#$%&\'\\(\\)\\-=^~\\\\\\|@`\\[\\{;\\+:\\*\\]\\},&lt;\\.&gt;/\\?_])(?=.*?\\d)[a-zA-Z\\d!&quot;#$%&\'\\(\\)\\-=^~\\\\\\|@`\\[\\{;\\+:\\*\\]\\},&lt;\\.&gt;/\\?_]{8,64}$"\r\n                    >\r\n                    <button type="button" class="btn" ic-action="togglePasswordMask" data-show="🙊 SHOW" data-hide="🙈 HIDE">🙊 SHOW</button>\r\n                </div>\r\n                <p class="field-error" data-valmsg-for="Password" data-valmsg-replace="true"></p>\r\n                <p class="field-note">半角英数字8～64文字で設定してください。記号もご使用いただけます。</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field required">\r\n            <dt class="field-title">パスワード再入力</dt>\r\n            <dd class="field-body">\r\n                <div class="field-group">\r\n                    <input type="password"\r\n                        name="ConfirmPassword"\r\n                        autocomplete="off"\r\n                        data-val="true"\r\n                        data-val-required="パスワード再入力は必須項目です。"\r\n                        data-val-equalto="再入力された値がパスワードと異なります。"\r\n                        data-val-equalto-other="Password"\r\n                    >\r\n                    <button type="button" class="btn" ic-action="togglePasswordMask" data-show="🙊 SHOW" data-hide="🙈 HIDE">🙊 SHOW</button>\r\n                </div>\r\n                <p class="field-error" data-valmsg-for="ConfirmPassword" data-valmsg-replace="true"></p>\r\n            </dd>\r\n        </dl>\r\n        <%- include(\'dateField\', { wrap: true, title: \'生年月日\', required: \'required\' }) %>\r\n        <%- include(\'radioField\', { wrap: true, title: \'性別\', required: \'optional\', name:\'Sex\', options: [\r\n            { text: \'未選択\', value: \'\' },\r\n            { text: \'男性\', value: \'Male\' },\r\n            { text: \'女性\', value: \'Female\' },\r\n        ] }) %>\r\n        <%- include(\'radioField\', { wrap: true, title: \'メルマガ配信\', required: \'optional\', name:\'Subscribe\', options: [\r\n            { text: \'希望しない\', value: \'false\' },\r\n            { text: \'希望する\', value: \'true\' },\r\n        ] }) %>\r\n        <p class="text-center"><a href="@Href("~/page/privacy")" target="_blank">プライバシーポリシー</a>、<a href="@Href("~/page/terms")" target="_blank">ご利用規約</a>をお読みください。</p>\r\n        <div class="block">\r\n            <button type="submit" name="confirm" value="confirm" class="btn btn-primary btn-next">同意して登録内容を確認する</button>\r\n        </div>\r\n    </form>\r\n</main>',undefined,__line,escapeFn)}}function confirm_fn_anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{serverError}=locals;return __line=5,__append("\r\n"),__line=6,__append(include("gnav")),__append('\r\n<main class="section content">\r\n    <h1 class="h-underline">新規会員登録</h1>\r\n    '),__line=9,serverError&&(__append("\r\n        "),__line=10,__append(include("alert",{color:"error"})),__append("\r\n    "),__line=11),__append('\r\n    <form action="" method="post">\r\n        <dl class="field">\r\n            <dt class="field-title">氏名</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">山田太郎</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">フリガナ</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">ヤマダタロウ</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">メールアドレス</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">info@commerble.com</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">パスワード</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">セキュリティのため表示しておりません</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">生年月日</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">yyyy年MM月dd日</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">性別</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">未設定</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">メルマガ配信</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">希望しない</p>\r\n            </dd>\r\n        </dl>\r\n        <div class="block block-vertical">\r\n            <button type="submit" class="btn btn-action btn-large" name="create" value="create">この内容で登録する</button>\r\n            <button type="submit" class="btn btn-primary btn-text btn-prev">登録内容を変更する</button>\r\n        </div>\r\n    </form>\r\n</main>'),__line=60,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        serverError,\r\n    } = locals;\r\n%>\r\n<%- include(\'gnav\') %>\r\n<main class="section content">\r\n    <h1 class="h-underline">新規会員登録</h1>\r\n    <% if (serverError) { %>\r\n        <%- include(\'alert\', { color: \'error\' }) %>\r\n    <% } %>\r\n    <form action="" method="post">\r\n        <dl class="field">\r\n            <dt class="field-title">氏名</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">山田太郎</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">フリガナ</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">ヤマダタロウ</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">メールアドレス</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">info@commerble.com</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">パスワード</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">セキュリティのため表示しておりません</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">生年月日</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">yyyy年MM月dd日</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">性別</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">未設定</p>\r\n            </dd>\r\n        </dl>\r\n        <dl class="field">\r\n            <dt class="field-title">メルマガ配信</dt>\r\n            <dd class="field-body">\r\n                <p class="field-text">希望しない</p>\r\n            </dd>\r\n        </dl>\r\n        <div class="block block-vertical">\r\n            <button type="submit" class="btn btn-action btn-large" name="create" value="create">この内容で登録する</button>\r\n            <button type="submit" class="btn btn-primary btn-text btn-prev">登録内容を変更する</button>\r\n        </div>\r\n    </form>\r\n</main>',undefined,__line,escapeFn)}}function complete1_fn_anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{}=locals;return __line=4,__append("\r\n"),__line=5,__append(include("gnav")),__append('\r\n<main class="section content">\r\n    <h1 class="h-underline">ご登録ありがとうございました</h1>\r\n    <div class="message-box">\r\n        <p class="message lead text-center">\r\n            引き続きお買い物をお楽しみください。\r\n        </p>\r\n    </div>\r\n    <div class="block">\r\n        <a href="" class="btn btn-primary btn-next">カート</a>\r\n    </div>\r\n</main>\r\n'),__line=17,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n    } = locals;\r\n%>\r\n<%- include(\'gnav\') %>\r\n<main class="section content">\r\n    <h1 class="h-underline">ご登録ありがとうございました</h1>\r\n    <div class="message-box">\r\n        <p class="message lead text-center">\r\n            引き続きお買い物をお楽しみください。\r\n        </p>\r\n    </div>\r\n    <div class="block">\r\n        <a href="" class="btn btn-primary btn-next">カート</a>\r\n    </div>\r\n</main>\r\n',undefined,__line,escapeFn)}}function complete2_fn_anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{}=locals;return __line=4,__append("\r\n"),__line=5,__append(include("gnav")),__append('\r\n<main class="section content">\r\n    <h1 class="h-underline">メールアドレスの確認が必要です</h1>\r\n    <div class="message-box">\r\n        <p class="message lead text-center">\r\n            ご入力いただいたメールアドレスにメールを送信しました。<br>\r\n            メールに記載のURLリンクをクリックし確認作業を完了してください。\r\n        </p>\r\n    </div>\r\n    <div class="block">\r\n        <a href="" class="btn btn-primary btn-text btn-next">再送信する</a>\r\n    </div>\r\n</main>\r\n'),__line=18,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n    } = locals;\r\n%>\r\n<%- include(\'gnav\') %>\r\n<main class="section content">\r\n    <h1 class="h-underline">メールアドレスの確認が必要です</h1>\r\n    <div class="message-box">\r\n        <p class="message lead text-center">\r\n            ご入力いただいたメールアドレスにメールを送信しました。<br>\r\n            メールに記載のURLリンクをクリックし確認作業を完了してください。\r\n        </p>\r\n    </div>\r\n    <div class="block">\r\n        <a href="" class="btn btn-primary btn-text btn-next">再送信する</a>\r\n    </div>\r\n</main>\r\n',undefined,__line,escapeFn)}}const index_stories={title:"Pages/Site/Account",argTypes:{serverError:{control:"boolean"},invalid:{control:"boolean"}}},Form={name:"/site/account --- form",render:args=>(0,layout_fn.Z)({title:"新規会員登録",body:anonymous(args,null,components.Z)},null,components.Z),args:{}},Confirm={name:"/site/account --- confirm",render:args=>(0,layout_fn.Z)({title:"新規会員登録 - 確認",body:confirm_fn_anonymous(args,null,components.Z)},null,components.Z),args:{}},Complete={name:"/site/accountcomplete  - complete",render:args=>(0,layout_fn.Z)({title:"新規会員登録 - 登録完了",body:complete1_fn_anonymous(args,null,components.Z)},null,components.Z),args:{}},NeedActivation={name:"/site/accountcomplete  - activation needed",render:args=>(0,layout_fn.Z)({title:"新規会員登録 - 本人確認",body:complete2_fn_anonymous(args,null,components.Z)},null,components.Z),args:{}};Form.parameters={...Form.parameters,docs:{...Form.parameters?.docs,source:{originalSource:"{\n  name: '/site/account --- form',\n  render(args) {\n    return layout({\n      title: '新規会員登録',\n      body: renderForm(args, null, components)\n    }, null, components);\n  },\n  args: {}\n}",...Form.parameters?.docs?.source}}},Confirm.parameters={...Confirm.parameters,docs:{...Confirm.parameters?.docs,source:{originalSource:"{\n  name: '/site/account --- confirm',\n  render(args) {\n    return layout({\n      title: '新規会員登録 - 確認',\n      body: renderConfirm(args, null, components)\n    }, null, components);\n  },\n  args: {}\n}",...Confirm.parameters?.docs?.source}}},Complete.parameters={...Complete.parameters,docs:{...Complete.parameters?.docs,source:{originalSource:"{\n  name: '/site/accountcomplete  - complete',\n  render(args) {\n    return layout({\n      title: '新規会員登録 - 登録完了',\n      body: renderComplete1(args, null, components)\n    }, null, components);\n  },\n  args: {}\n}",...Complete.parameters?.docs?.source}}},NeedActivation.parameters={...NeedActivation.parameters,docs:{...NeedActivation.parameters?.docs,source:{originalSource:"{\n  name: '/site/accountcomplete  - activation needed',\n  render(args) {\n    return layout({\n      title: '新規会員登録 - 本人確認',\n      body: renderComplete2(args, null, components)\n    }, null, components);\n  },\n  args: {}\n}",...NeedActivation.parameters?.docs?.source}}};const __namedExportsOrder=["Form","Confirm","Complete","NeedActivation"]}}]);