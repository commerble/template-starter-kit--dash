"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1698],{"./stories/pages/order/cart/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Campaign:()=>Campaign,Default:()=>Default,Empty:()=>Empty,HasError:()=>HasError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var components=__webpack_require__("./stories/pages/components.js");function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}const{items,error,campaign}=locals,when=(condition,text)=>condition?text:"";[...Array(items).keys()].map((i=>({name:"サンプル商品 Sample Product",href:"#/product/sku",icon:"https://httpstat.us/404",alt:"product name",unitPrice:1e3,unitTax:100,qty:2,linePrice:campaign?1760:2200,tax:campaign?160:200,discountPrice:campaign?440:0,point:campaign?16:20,error:error&&1==i})));return __line=22,__append('\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>カート</title>\r\n</head>\r\n<body>\r\n    '),__line=32,__append(include("gheader")),__append("\r\n    "),__line=33,__append(include("gnav")),__append('\r\n    <section class="section content">\r\n        <h1 class="h-border">ショッピングカート</h1>\r\n        '),__line=36,0===items?(__append('\r\n            <div class="message-box">\r\n                <p class="message text-center lead">カートに商品が入っていません。</p>\r\n                <div class="block">\r\n                    <a class="btn btn-primary btn-prev">お買い物を続ける</a>\r\n                </div>\r\n            </div>\r\n        '),__line=43):(__append("\r\n            "),__line=44,error&&(__append('\r\n                <div class="alert alert-error">\r\n                    <p>「明細２」の在庫がありません。</p>\r\n                    <p>「明細２」は販売期間外です。</p>\r\n                </div>\r\n            '),__line=49),__append("\r\n            "),__line=50,__append(include("cartLines",{items,error,campaign,action:!0})),__append("\r\n            "),__line=51,error&&(__append('\r\n                <div class="alert alert-error">\r\n                    <p>「明細２」の在庫がありません。</p>\r\n                    <p>「明細２」は販売期間外です。</p>\r\n                </div>\r\n            '),__line=56),__append('\r\n            <div class="block block-vertical">\r\n                <a class="btn btn-action btn-large btn-next" '),__line=58,__append(escapeFn(when(error,"disabled"))),__append('>注文手続きへ進む</a>\r\n                <button class="btn btn-primary btn-text btn-prev">お買い物を続ける</button>\r\n            </div>\r\n        '),__line=61),__append("\r\n    </section>\r\n    "),__line=63,__append(include("gfooter")),__append("\r\n</body>\r\n</html>"),__line=65,__output}catch(e){rethrow(e,'<%\r\n    const {\r\n        items,\r\n        error,\r\n        campaign\r\n    } = locals;\r\n    const when = (condition, text) => condition ? text : \'\';\r\n    const lines = [...Array(items).keys()].map(i => ({\r\n        name: \'サンプル商品 Sample Product\',\r\n        href: \'#/product/sku\',\r\n        icon: \'https://httpstat.us/404\',\r\n        alt: \'product name\',\r\n        unitPrice: 1000,\r\n        unitTax: 100,\r\n        qty: 2,\r\n        linePrice: campaign ? 1760 : 2200,\r\n        tax: campaign ? 160 : 200,\r\n        discountPrice: campaign ? 2200 - 1760 : 0,\r\n        point: campaign ? 16 : 20,\r\n        error: error && i == 1\r\n    }))\r\n%>\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>カート</title>\r\n</head>\r\n<body>\r\n    <%- include(\'gheader\') %>\r\n    <%- include(\'gnav\') %>\r\n    <section class="section content">\r\n        <h1 class="h-border">ショッピングカート</h1>\r\n        <% if (items === 0) { %>\r\n            <div class="message-box">\r\n                <p class="message text-center lead">カートに商品が入っていません。</p>\r\n                <div class="block">\r\n                    <a class="btn btn-primary btn-prev">お買い物を続ける</a>\r\n                </div>\r\n            </div>\r\n        <% } else { %>\r\n            <% if (error) { %>\r\n                <div class="alert alert-error">\r\n                    <p>「明細２」の在庫がありません。</p>\r\n                    <p>「明細２」は販売期間外です。</p>\r\n                </div>\r\n            <% } %>\r\n            <%- include(\'cartLines\', { items, error, campaign, action: true }) %>\r\n            <% if (error) { %>\r\n                <div class="alert alert-error">\r\n                    <p>「明細２」の在庫がありません。</p>\r\n                    <p>「明細２」は販売期間外です。</p>\r\n                </div>\r\n            <% } %>\r\n            <div class="block block-vertical">\r\n                <a class="btn btn-action btn-large btn-next" <%= when(error, \'disabled\') %>>注文手続きへ進む</a>\r\n                <button class="btn btn-primary btn-text btn-prev">お買い物を続ける</button>\r\n            </div>\r\n        <% } %>\r\n    </section>\r\n    <%- include(\'gfooter\') %>\r\n</body>\r\n</html>',undefined,__line,escapeFn)}}const index_stories={title:"Pages/Order/Cart",argTypes:{items:{control:"number"},error:{control:"boolean"},campaign:{control:"boolean"}}},Default={name:"/order/cart - any items",render:args=>anonymous(args,null,components.Z),args:{items:2}},HasError={name:"/order/cart - error",render:args=>anonymous(args,null,components.Z),args:{items:2,error:!0}},Campaign={name:"/order/cart - campaign",render:args=>anonymous(args,null,components.Z),args:{items:2,campaign:!0}},Empty={name:"/order/cart - empty",render:args=>anonymous(args,null,components.Z),args:{items:0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: '/order/cart - any items',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    items: 2\n  }\n}",...Default.parameters?.docs?.source}}},HasError.parameters={...HasError.parameters,docs:{...HasError.parameters?.docs,source:{originalSource:"{\n  name: '/order/cart - error',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    items: 2,\n    error: true\n  }\n}",...HasError.parameters?.docs?.source}}},Campaign.parameters={...Campaign.parameters,docs:{...Campaign.parameters?.docs,source:{originalSource:"{\n  name: '/order/cart - campaign',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    items: 2,\n    campaign: true\n  }\n}",...Campaign.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  name: '/order/cart - empty',\n  render(args) {\n    return render(args, null, components);\n  },\n  args: {\n    items: 0\n  }\n}",...Empty.parameters?.docs?.source}}};const __namedExportsOrder=["Default","HasError","Campaign","Empty"]}}]);