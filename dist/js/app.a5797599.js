(function(e){function t(t){for(var r,a,s=t[0],c=t[1],i=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&d.push(u[a][0]),u[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==u[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},u={app:0},o=[];function s(e){return c.p+"js/"+({game:"game",home:"home",mapManager:"mapManager",userHamburgerMenu:"userHamburgerMenu"}[e]||e)+"."+{game:"728c4bf4",home:"60f38e61",mapManager:"a833e91e",userHamburgerMenu:"593fc095"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={game:1,home:1,mapManager:1,userHamburgerMenu:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({game:"game",home:"home",mapManager:"mapManager",userHamburgerMenu:"userHamburgerMenu"}[e]||e)+"."+{game:"b547efb9",home:"1e11f08c",mapManager:"a6d2bd71",userHamburgerMenu:"1516ef20"}[e]+".css",u=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],p=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(p===r||p===u))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],p=i.getAttribute("data-href");if(p===r||p===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=u;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=o);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(e);var d=new Error;i=function(t){p.onerror=p.onload=null,clearTimeout(f);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:p})}),12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/unseen/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=p;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1813:function(e,t,n){},"326a":function(e,t,n){"use strict";n("1813")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["A"])("router-view");return Object(r["s"])(),Object(r["e"])(n)}n("326a");const u={};u.render=a;var o=u,s=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),c=n("6c02"),i=n("bc3a"),p=n.n(i),d=n("e6fd"),f=n("5502"),m=Object(f["a"])({state:{username:"",logged:-1},mutations:{SET_USERNAME:function(e,t){e.username=t},SET_LOGGED:function(e,t){e.logged=t}},actions:{setUsername:function(e,t){var n=e.commit;n("SET_USERNAME",t)},setLogged:function(e,t){var n=e.commit;n("SET_LOGGED",t)}}}),l=function(){return n.e("home").then(n.bind(null,"bb51"))},g=function(){return n.e("game").then(n.bind(null,"7d36"))},h=[{path:"/unseen",name:"Home",component:l},{path:"/unseen/:gameId",name:"Game",component:g}],b=Object(c["a"])({history:Object(c["b"])(),base:"unseen",routes:h});b.beforeEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:""===m.state.username&&-1===m.state.logged?p.a.get(d["g"]).then((function(e){e.data?(m.dispatch("setLogged",e.data.google_signed_in),m.dispatch("setUsername",decodeURIComponent(e.data.username)),r()):(m.dispatch("setUsername",null),m.dispatch("setLogged",!1),"Game"===t.name?p.a.get(d["c"]).then((function(e){m.dispatch("setUsername",e.data.username),m.dispatch("setLogged",!1),r()})):r())})):null===m.state.username&&"Game"===t.name?p.a.get(d["c"]).then((function(e){m.dispatch("setUsername",e.data.username),m.dispatch("setLogged",!1),r()})):r();case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var v=b,y=n("c479"),_=n.n(y),O=n("af56");Object(r["d"])(o).use(v).use(m).use(_.a).use(O["a"]).mount("#app")},e6fd:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"j",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return p})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f}));var r=5,a=["red","blue","green","pink","gray"],u={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},o="https://papero.tk",s="https://papero.tk/user/get_info",c="https://papero.tk/server/unseen/games/all",i="https://papero.tk/server/unseen/games/status_by_id",p="https://papero.tk/auth/local",d="https://papero.tk/auth/logout",f="https://papero.tk/server/unseen/games/quit"}});
//# sourceMappingURL=app.a5797599.js.map