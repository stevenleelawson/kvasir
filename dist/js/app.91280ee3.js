(function(t){function e(e){for(var a,n,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=r[0]))}return t}var a={},n={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7721aadd"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"c8709e9f"}[t]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],d.parentNode.removeChild(d),r(s)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(r,a,function(e){return t[e]}.bind(null,a));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1d8a":function(t,e,r){},"38c9":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"main-app"},[r("v-app-bar",{staticClass:"mb-12",attrs:{app:"",color:"primary",dark:""}},[r("v-row",[r("v-col",{staticClass:"d-flex justify-start",attrs:{cols:"3"}},[r("router-link",{staticClass:"link",attrs:{to:"/"}},[r("h1",[t._v("STEVEN LEE LAWSON")])])],1),r("v-col",{attrs:{cols:"2"}},[r("router-link",{staticClass:"link",attrs:{to:"/music-videos"}},[r("h1",{attrs:{color:"white"}},[t._v("Music Videos")])])],1),r("v-col",{staticClass:"d-flex justify-start",attrs:{cols:"3"}},[r("v-btn",{attrs:{href:"http://snappylittlenumbers.limitedrun.com/products/698824-steven-lee-lawson-s-t-lp-digital",target:"_blank",text:""}},[r("span",{staticClass:"mr-2 back"},[t._v("Buy album on vinyl")]),r("v-icon",[t._v("mdi-arrow-right-bold-outline")])],1)],1)],1)],1),r("v-main",[r("v-spacer"),r("router-view")],1)],1)])},o=[],s={name:"App",components:{},data:function(){return{}}},i=s,u=(r("69b1"),r("2877")),c=r("6544"),l=r.n(c),f=r("7496"),d=r("40dc"),h=r("8336"),p=r("62ad"),m=r("132d"),v=r("f6c4"),y=r("0fd9"),b=r("2fa4"),g=Object(u["a"])(i,n,o,!1,null,"c76010d6",null),w=g.exports;l()(g,{VApp:f["a"],VAppBar:d["a"],VBtn:h["a"],VCol:p["a"],VIcon:m["a"],VMain:v["a"],VRow:y["a"],VSpacer:b["a"]});var x=r("f309"),k=r("fcf4");a["a"].use(x["a"]);var j=new x["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:k["a"].teal.darken2,secondary:k["a"].green.darken3}}}}),C=(r("dc44"),r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[t.rock?r("h1",[t._v("Oh he rocks all right")]):t._e(),r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"my-6"},[r("v-card",{attrs:{color:"primary"}},[r("h1",[t._v("ABOUT")]),r("v-card-text",{staticClass:"subheading px-6 bio"},[t._v(' "Steven wears his heart on his sleeve and keeps his soul in a bottle of ink. His mind is a quill at the ready. As a longtime writer and performer while a major part of Oblio Duo and its various offshoots throughout the 00’s (Oblio Duo + The Archers, Oblio’s Arrow), Steven has always understood the craft of songwriting. His instrumental talents are as varied as the genres he’s been able to express himself in. He’s just as likely to remind you of Harry Nilsson as he is Joe Strummer, both in sound and ethos. Steven admittedly aspires to be a less-successful version of John Lurie, with a dog army in the middle of nowhere. That should give the reader more insight into the ramblin’ troubadour that comprises the makeup of Mr. Lawson. When you listen to the songs on Steven’s self-titled debut solo outing, there’s no hiding the fact that life can be hard and that Steven has done some hard living. The constant reminder in between the beautiful interplay of pain and joy is that rarely does one find satisfaction or strength of character in an easy life. Luckily for us, Steven is strong enough to know that, endure it successfully and set it to music." ')]),r("p",{staticClass:"font-italic"},[t._v("-Snappy Little Numbers founder Chuck Coffey")]),r("v-icon",[t._v("mdi-arrow-right-bold-outline")])],1)],1)],1),r("v-row",{staticClass:"d-flex justify-center"},[r("v-col",{attrs:{lg:"6",sm:"12"}},[r("iframe",{attrs:{src:"https://open.spotify.com/embed/album/3Hj1E8QUwppAwTiMqTkY30?utm_source=generator",width:"100%",height:"380",frameBorder:"2",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}})])],1)],1)},S=[],O={data:function(){return{rock:!1,ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},V=O,A=(r("b45c"),r("b0af")),E=r("99d9"),T=r("a523"),L=Object(u["a"])(V,_,S,!1,null,"189ab2bc",null),P=L.exports;l()(L,{VCard:A["a"],VCardText:E["a"],VCol:p["a"],VContainer:T["a"],VIcon:m["a"],VRow:y["a"]}),a["a"].use(C["a"]);var M=[{path:"/",name:"Home",component:P},{path:"/music-videos",name:"Music Videos",component:function(){return r.e("about").then(r.bind(null,"0534"))}}],N=new C["a"]({mode:"history",base:"/",routes:M}),B=N;a["a"].config.productionTip=!1,new a["a"]({vuetify:j,router:B,render:function(t){return t(w)}}).$mount("#app")},"69b1":function(t,e,r){"use strict";r("1d8a")},b45c:function(t,e,r){"use strict";r("38c9")},dc44:function(t,e,r){}});
//# sourceMappingURL=app.91280ee3.js.map