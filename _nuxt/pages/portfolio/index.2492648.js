(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{327:function(t,e,o){var content=o(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("1fe06448",content,!0,{sourceMap:!1})},328:function(t,e,o){var content=o(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("cacaddac",content,!0,{sourceMap:!1})},337:function(t,e,o){"use strict";o.r(e);var n={name:"portfolioCard",props:{id:{required:!0},name:{type:String,required:!0},nameEng:{type:String},tags:{type:Array},date:{type:String,required:!0},preview:{type:String}},data:function(){return{previewUrl:""}},mounted:function(){var t=this;try{this.$fireStorage.ref("/portfolio/".concat(this.id)).child(this.preview).getDownloadURL().then((function(e){t.previewUrl=e}))}catch(t){console.log(t)}}},r=(o(345),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-card"},[o("div",{staticClass:"portfolio-card__tags"},t._l(t.tags,(function(e,i){return o("span",{key:t.name+"-"+e+"-"+i,staticClass:"tag codetext"},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),o("nuxt-link",{attrs:{to:t.localePath("/portfolio/"+t.id)},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.navigate,r=e.href;return[o("a",{staticClass:"portfolio-card__header",attrs:{href:r,"no-prefetch":""},on:{click:n}},[o("h3",[t._v("\n        "+t._s("ru"!==t.$i18n.locale&&t.nameEng?t.nameEng:t.name)+"\n      ")])])]}}])}),t._v(" "),o("span",{staticClass:"portfolio-card__data subtext"},[t._v("\n    "+t._s(t.date)+"\n  ")]),t._v(" "),o("div",{staticClass:"portfolio-card__preview",style:{backgroundImage:"url('"+t.previewUrl+"')"}})],1)}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,o){"use strict";var n=o(327);o.n(n).a},346:function(t,e,o){(e=o(9)(!1)).push([t.i,'body{font-family:"Open Sans",sans-serif;font-weight:400;font-style:normal;font-size:16px;line-height:24px;letter-spacing:.08em;color:#f2f2f2;background-color:#565b60}h1,h2,h3,h4{font-family:"Nunito",sans-serif;margin:0;padding:0}h1{font-weight:200;font-size:64px;line-height:110%;letter-spacing:.1em;text-transform:uppercase}h2{font-weight:300;font-size:48px;line-height:120%;letter-spacing:.05em}h3{font-weight:600;font-size:28px;line-height:100%}h3,h4{letter-spacing:0}h4{font-weight:200;font-size:14px;line-height:130%}p{margin:0}.subtext{font-weight:300;font-size:14px;line-height:20px;letter-spacing:0}.codetext,code{font-family:"Source Code Pro",monospace;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:#f2f2f2;opacity:.7}.buttontext{font-weight:700;font-size:16px;line-height:100%;text-transform:uppercase;letter-spacing:.12em}.myPage-enter{opacity:0;transform:translateY(30px)}.myPage-leave-to{opacity:0;transform:translateY(-30px)}.myPage-enter-active,.myPage-leave-active{transition:opacity .3s ease-out,transform .3s ease-out}.portfolio-card{width:360px;height:320px;position:relative}.portfolio-card>*{position:absolute}.portfolio-card__data,.portfolio-card__header,.portfolio-card__tags{z-index:13}.portfolio-card__tags{top:21px;left:22px}.portfolio-card__header{left:22px;right:22px;bottom:56px}.portfolio-card__data{left:22px;bottom:6px}.portfolio-card__preview{top:0;right:0;bottom:0;left:150px;z-index:12;background-color:#eb0085;background-position:50%;background-size:auto 100%;background-repeat:no-repeat}',""]),t.exports=e},347:function(t,e,o){"use strict";var n=o(328);o.n(n).a},348:function(t,e,o){(e=o(9)(!1)).push([t.i,'body{font-family:"Open Sans",sans-serif;font-weight:400;font-style:normal;font-size:16px;line-height:24px;letter-spacing:.08em;color:#f2f2f2;background-color:#565b60}h1,h2,h3,h4{font-family:"Nunito",sans-serif;margin:0;padding:0}h1{font-weight:200;font-size:64px;line-height:110%;letter-spacing:.1em;text-transform:uppercase}h2{font-weight:300;font-size:48px;line-height:120%;letter-spacing:.05em}h3{font-weight:600;font-size:28px;line-height:100%}h3,h4{letter-spacing:0}h4{font-weight:200;font-size:14px;line-height:130%}p{margin:0}.subtext{font-weight:300;font-size:14px;line-height:20px;letter-spacing:0}.codetext,code{font-family:"Source Code Pro",monospace;font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:#f2f2f2;opacity:.7}.buttontext{font-weight:700;font-size:16px;line-height:100%;text-transform:uppercase;letter-spacing:.12em}.myPage-enter{opacity:0;transform:translateY(30px)}.myPage-leave-to{opacity:0;transform:translateY(-30px)}.myPage-enter-active,.myPage-leave-active{transition:opacity .3s ease-out,transform .3s ease-out}.portfolio{display:flex;flex-direction:row;flex-wrap:wrap}.portfolio>.portfolio-card{margin-bottom:72px}.portfolio>.portfolio-card:not(:nth-child(4n)){margin-right:calc((100% - 1440px)/3)}',""]),t.exports=e},371:function(t,e,o){"use strict";o.r(e);o(24),o(46),o(25),o(65),o(66),o(55),o(26);var n=o(35);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={head:function(){return{title:"Mashiachy | ".concat("ru"===this.$i18n.locale?"Портфолио":"Portfolio")}},layout:"portfolio",name:"portfolioPage",components:{portfolioCard:o(337).default},fetch:function(t){var e=t.$fireDb,o=t.store;e.ref("/portfolio/").on("value",(function(t){o.dispatch("firebase-managing/clearWorks"),Object.keys(t.val()).forEach((function(e){o.dispatch("firebase-managing/pushWork",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({id:e},t.val()[e]))}))}))},data:function(){return{}},computed:{cards:function(){return this.$store.getters["firebase-managing/works"]}}},c=(o(347),o(3)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"default-container"},[o("default-header",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      "+t._s(t.$t("portfolio.header"))+"\n    ")]},proxy:!0}])}),t._v(" "),o("client-only",[o("main",{staticClass:"default-container__content portfolio"},t._l(t.cards,(function(e){return o("portfolio-card",t._b({key:e.id},"portfolio-card",e,!1))})),1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DefaultHeader:o(162).default,PortfolioCard:o(337).default})}}]);