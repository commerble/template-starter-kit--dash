"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3915],{"./stories/components/Hero/hero.fn.ejs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function anonymous(locals,escapeFn,include,rethrow){rethrow=rethrow||function rethrow(err,str,flnm,lineno,esc){var lines=str.split("\n"),start=Math.max(lineno-3,0),end=Math.min(lines.length,lineno+3),filename=esc(flnm),context=lines.slice(start,end).map((function(line,i){var curr=i+start+1;return(curr==lineno?" >> ":"    ")+curr+"| "+line})).join("\n");throw err.path=filename,err.message=(filename||"ejs")+":"+lineno+"\n"+context+"\n\n"+err.message,err},escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __line=1;try{var __output="";function __append(s){null!=s&&(__output+=s)}let{title,lead,action,src,notfound}=locals;return notfound&&(src="https://httpstat.us/404"),__line=12,__append('\r\n<div class="hero-bgimage" style="background-image:url(\''),__line=13,__append(escapeFn(src)),__append('\')">\r\n    <div class="hero-text">\r\n        <p class="title">'),__line=15,__append(escapeFn(title)),__append('</p>\r\n        <p class="lead">'),__line=16,__append(escapeFn(lead)),__append('</p>\r\n        <div class="block">\r\n            <a href="javascript:void(0)" class="btn btn-ghost btn-primary btn-large">'),__line=18,__append(escapeFn(action)),__append("</a>\r\n        </div>\r\n    </div>\r\n</div>"),__line=21,__output}catch(e){rethrow(e,'<%\r\n    let {\r\n        title,\r\n        lead,\r\n        action,\r\n        src,\r\n        notfound\r\n    } = locals;\r\n\r\n    if (notfound)\r\n        src = \'https://httpstat.us/404\';\r\n%>\r\n<div class="hero-bgimage" style="background-image:url(\'<%= src %>\')">\r\n    <div class="hero-text">\r\n        <p class="title"><%= title %></p>\r\n        <p class="lead"><%= lead %></p>\r\n        <div class="block">\r\n            <a href="javascript:void(0)" class="btn btn-ghost btn-primary btn-large"><%= action %></a>\r\n        </div>\r\n    </div>\r\n</div>',undefined,__line,escapeFn)}}__webpack_require__.d(__webpack_exports__,{Z:()=>anonymous})},"./stories/components/Hero/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _hero_fn_ejs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/components/Hero/hero.fn.ejs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Hero",argTypes:{src:{control:"text"},title:{control:"text"},lead:{control:"text"},action:{control:"text"},notfound:{control:"boolean"}},tags:["autodocs"]},Default=(({...args})=>(0,_hero_fn_ejs__WEBPACK_IMPORTED_MODULE_0__.Z)({...args})).bind({});Default.args={src:"https://commerble.blob.core.windows.net/corporate/images/AdobeStock_244795496.webp",title:"タイトルタイトルタイトル",lead:"リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文リード文",action:"アクション"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  return render({\n    ...args\n  });\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);