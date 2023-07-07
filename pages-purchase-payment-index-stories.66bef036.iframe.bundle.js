"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8932],{"./stories/pages/purchase/payment/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MailDelivery:()=>MailDelivery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var components=__webpack_require__("./stories/pages/components.js");function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{canDeliveryDate,canDeliveryHourRange}=locals;return __line=6,__append('\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>STEP 2</title>\r\n</head>\r\n<body>\r\n    '),__line=16,__append(include("gheader")),__append('\r\n    <section class="section content">\r\n        <h1 class="h-underline">購入</h1>\r\n        <form>\r\n            <h2 class="h-title">お届け日時</h2>\r\n            <dl class="field optional">\r\n                <dt class="field-title">お届け日</dt>\r\n                <dd class="field-body">\r\n                    '),__line=24,canDeliveryDate?(__append('\r\n                        <select>\r\n                            <option value="">最短でお届け</option>\r\n                            <option value="2021-04-01">2021年4月1日（木）</option>\r\n                            <option value="2021-04-02">2021年4月2日（土）</option>\r\n                            <option value="2021-04-03">2021年4月3日（日）</option>\r\n                        </select>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    '),__line=32):(__append('\r\n                        <p class="field-text">お届け日の指定はご利用いただけません。</p>\r\n                    '),__line=34),__append('\r\n                </dd>\r\n            </dl>\r\n            <dl class="field optional">\r\n                <dt class="field-title">お届け時間</dt>\r\n                <dd class="field-body">\r\n                    '),__line=40,canDeliveryHourRange?(__append('\r\n                        <select>\r\n                            <option value="0000">指定なし</option>\r\n                            <option value="0812">午前中</option>\r\n                            <option value="1214">12:00-14:00</option>\r\n                            <option value="1416">14:00-16:00</option>\r\n                            <option value="1618">16:00-18:00</option>\r\n                            <option value="1821">18:00-21:00</option>\r\n                        </select>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    '),__line=50):(__append('\r\n                        <p class="field-text">お届け時間の指定はご利用いただけません。</p>\r\n                    '),__line=52),__append('\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">お支払方法</h2>\r\n            <dl class="field required">\r\n                <dt class="field-title">決済方法</dt>\r\n                <dd class="field-body">\r\n                    <select>\r\n                        <option value="">-- 選択してください --</option>\r\n                        <option value="CashOnDelivery">代引き</option>\r\n                        <option value="Offsite">銀行振込</option>\r\n                        <option value="External">外部決済（カード、コンビニ決済、キャリア決済）</option>\r\n                    </select>\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">ポイント</h2>\r\n            <p class="field-desc">現在の所持ポイントは100ptです。今回のご購入金額は1,920 円です。</p>\r\n            <dl class="field optional">\r\n                <dt class="field-title">ご利用ポイント</dt>\r\n                <dd class="field-body">\r\n                    <input type="number" value="0" size="5">\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">クーポンのご利用</h2>\r\n            <p class="field-desc">クーポンをお持ちの方は、コードをご入力ください。</p>\r\n            <dl class="field optional">\r\n                <dt class="field-title">クーポンコード</dt>\r\n                <dd class="field-body">\r\n                    <input type="text">\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">備考</h2>\r\n            <p class="field-desc">ご注文内容に関する補足がありましたら、ご記入ください</p>\r\n            <dl class="field optional">\r\n                <dt class="field-title">備考内容</dt>\r\n                <dd class="field-body">\r\n                    <textarea></textarea>\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <div class="block block-vertical">\r\n                <a class="btn btn-action btn-large">内容の確認に進む</a>\r\n                <a class="btn btn-primary btn-text btn-prev">配送情報を変更する</a>\r\n            </div>\r\n        </form>\r\n    </section>\r\n    '),__line=101,__append(include("gfooter")),__append("\r\n</body>\r\n</html>"),__line=103,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        canDeliveryDate,\r\n        canDeliveryHourRange,\r\n    } = locals;\r\n%>\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>STEP 2</title>\r\n</head>\r\n<body>\r\n    <%- include(\'gheader\') %>\r\n    <section class="section content">\r\n        <h1 class="h-underline">購入</h1>\r\n        <form>\r\n            <h2 class="h-title">お届け日時</h2>\r\n            <dl class="field optional">\r\n                <dt class="field-title">お届け日</dt>\r\n                <dd class="field-body">\r\n                    <% if (canDeliveryDate) { %>\r\n                        <select>\r\n                            <option value="">最短でお届け</option>\r\n                            <option value="2021-04-01">2021年4月1日（木）</option>\r\n                            <option value="2021-04-02">2021年4月2日（土）</option>\r\n                            <option value="2021-04-03">2021年4月3日（日）</option>\r\n                        </select>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    <% } else { %>\r\n                        <p class="field-text">お届け日の指定はご利用いただけません。</p>\r\n                    <% } %>\r\n                </dd>\r\n            </dl>\r\n            <dl class="field optional">\r\n                <dt class="field-title">お届け時間</dt>\r\n                <dd class="field-body">\r\n                    <% if (canDeliveryHourRange) { %>\r\n                        <select>\r\n                            <option value="0000">指定なし</option>\r\n                            <option value="0812">午前中</option>\r\n                            <option value="1214">12:00-14:00</option>\r\n                            <option value="1416">14:00-16:00</option>\r\n                            <option value="1618">16:00-18:00</option>\r\n                            <option value="1821">18:00-21:00</option>\r\n                        </select>\r\n                        <p class="field-error" style="display:none;"></p>\r\n                    <% } else { %>\r\n                        <p class="field-text">お届け時間の指定はご利用いただけません。</p>\r\n                    <% } %>\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">お支払方法</h2>\r\n            <dl class="field required">\r\n                <dt class="field-title">決済方法</dt>\r\n                <dd class="field-body">\r\n                    <select>\r\n                        <option value="">-- 選択してください --</option>\r\n                        <option value="CashOnDelivery">代引き</option>\r\n                        <option value="Offsite">銀行振込</option>\r\n                        <option value="External">外部決済（カード、コンビニ決済、キャリア決済）</option>\r\n                    </select>\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">ポイント</h2>\r\n            <p class="field-desc">現在の所持ポイントは100ptです。今回のご購入金額は1,920 円です。</p>\r\n            <dl class="field optional">\r\n                <dt class="field-title">ご利用ポイント</dt>\r\n                <dd class="field-body">\r\n                    <input type="number" value="0" size="5">\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">クーポンのご利用</h2>\r\n            <p class="field-desc">クーポンをお持ちの方は、コードをご入力ください。</p>\r\n            <dl class="field optional">\r\n                <dt class="field-title">クーポンコード</dt>\r\n                <dd class="field-body">\r\n                    <input type="text">\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <h2 class="h-title">備考</h2>\r\n            <p class="field-desc">ご注文内容に関する補足がありましたら、ご記入ください</p>\r\n            <dl class="field optional">\r\n                <dt class="field-title">備考内容</dt>\r\n                <dd class="field-body">\r\n                    <textarea></textarea>\r\n                    <p class="field-error" style="display:none;"></p>\r\n                </dd>\r\n            </dl>\r\n            <div class="block block-vertical">\r\n                <a class="btn btn-action btn-large">内容の確認に進む</a>\r\n                <a class="btn btn-primary btn-text btn-prev">配送情報を変更する</a>\r\n            </div>\r\n        </form>\r\n    </section>\r\n    <%- include(\'gfooter\') %>\r\n</body>\r\n</html>',undefined,__line,escapeFn)}}const index_stories={title:"Pages/Purchase/Payment",argTypes:{canDeliveryDate:{control:"boolean"},canDeliveryHourRange:{control:"boolean"}}},Default={name:"/purchase/n/payment",render:args=>anonymous(args,null,components.Z),args:{canDeliveryDate:!0,canDeliveryHourRange:!0}},MailDelivery={name:"/purchase/n/payment - mail delivery",render:args=>anonymous(args,null,components.Z),args:{canDeliveryDate:!1,canDeliveryHourRange:!1}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: '/purchase/n/payment',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    canDeliveryDate: true,\n    canDeliveryHourRange: true\n  }\n}",...Default.parameters?.docs?.source}}},MailDelivery.parameters={...MailDelivery.parameters,docs:{...MailDelivery.parameters?.docs,source:{originalSource:"{\n  name: '/purchase/n/payment - mail delivery',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    canDeliveryDate: false,\n    canDeliveryHourRange: false\n  }\n}",...MailDelivery.parameters?.docs?.source}}};const __namedExportsOrder=["Default","MailDelivery"]}}]);