(function(e){function t(t){for(var r,u,l=t[0],a=t[1],i=t[2],b=0,f=[];b<l.length;b++)u=l[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);s&&s(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/SimpleKeyboard/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},c1c3:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("7864"),c=(n("7dd6"),{class:"wrapper",ref:"fullscreenElement"}),u=Object(r["o"])("span",{class:"logo"},"Simple Keyboard",-1);function l(e,t,n,o,l,a){var i=Object(r["M"])("el-button"),s=Object(r["M"])("TextInput"),b=Object(r["M"])("Keyboard");return Object(r["F"])(),Object(r["k"])("div",c,[Object(r["o"])("header",null,[u,e.isFullscreen?(Object(r["F"])(),Object(r["k"])(i,{key:0,ref:"fullscreenButton",icon:e.isHiddenKeyboard?"el-icon-arrow-up":"el-icon-arrow-down",circle:"",onClick:Object(r["eb"])(e.hideKeyboardHandler,["stop","prevent"])},null,8,["icon","onClick"])):Object(r["l"])("",!0),Object(r["o"])(i,{ref:"fullscreenButton",icon:e.isFullscreen?"el-icon-close":"el-icon-full-screen",circle:"",onClick:Object(r["eb"])(e.fullscreenHandler,["stop","prevent"])},null,8,["icon","onClick"])]),Object(r["o"])("main",null,[Object(r["o"])(s,{isFullscreen:e.isFullscreen},null,8,["isFullscreen"]),Object(r["o"])(b,{getKeyboard:e.getKeyboard,isHiddenKeyboard:e.isHiddenKeyboard},null,8,["getKeyboard","isHiddenKeyboard"])])],512)}var a={class:"text_input"};function i(e,t,n,o,c,u){return Object(r["F"])(),Object(r["k"])("section",a,[Object(r["cb"])(Object(r["o"])("textarea",{type:"textarea",placeholder:"Поле для ввода",rows:e.maxRows,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.input=t})},null,8,["rows"]),[[r["X"],e.input]])])}var s=n("5502");function b(){var e=function(e){null===e||void 0===e||e.scrollBy(0,e.scrollHeight)};return{scrollToBottom:e}}var f=Object(r["p"])({name:"TextInput",props:{isFullscreen:{type:Boolean,default:!1}},setup:function(e){var t=Object(s["b"])(),n=b(),o=n.scrollToBottom,c=Object(r["T"])(e),u=c.isFullscreen,l=Object(r["i"])((function(){return t.state.keyboardStore.input})),a=Object(r["i"])((function(){return u.value?4:3}));return Object(r["E"])((function(){var e=document.getElementsByTagName("textarea")[0];Object(r["w"])((function(){o(e)}))})),{input:l,maxRows:a}}});f.render=i;var d=f,p={ref:"keyboardRef",class:"keyboard"};function v(e,t,n,o,c,u){var l=Object(r["M"])("Button");return Object(r["cb"])((Object(r["F"])(),Object(r["k"])("section",p,[(Object(r["F"])(!0),Object(r["k"])(r["b"],null,Object(r["K"])(e.layout,(function(e,t){return Object(r["F"])(),Object(r["k"])("div",{key:t,class:"row"},[(Object(r["F"])(!0),Object(r["k"])(r["b"],null,Object(r["K"])(e,(function(e,t){return Object(r["F"])(),Object(r["k"])(l,{key:t,char:e},null,8,["char"])})),128))])})),128))],512)),[[r["Y"],!e.isHiddenKeyboard]])}n("99af");var m=[["?","_",".","!",",",":",";","-",""]],y=[["1","2","3","4","5","6","7","8","9","0",""]],j=[["мм","см","дм","м","км","м^2","м^3",""],["м/с","км/ч","мг","г","кг","т",""]],O=[["<back>","<backspace>","\n",""]],h=[["а","б","в","г","д","е","ё","ж",""],["з","и","к","л","м","н","о","п","р",""],["с","т","у","ф","х","ц","ч","ш","щ",""],["ы","э","ю","я","й","ъ","ь",""]].concat(y,m,[["<backspace>","[upper]","{eng}","{num}","{emoji}","{phrases}","\n",""]]),k=[["a","b","c","d","e","f","g","h","i",""],["j","k","l","m","n","o","p","q","r",""],["s","t","u","v","w","x","y","z",""]].concat(y,m,[["<backspace>","[upper]","{rus}","{num}","{emoji}","{phrases}","\n",""]]),g=[["0","1","2","3","4","5","6","7","8","9",""],["+","-","×",":","=","(",")",""],["%","<",">","'",",",".","/","~",""]].concat(j,m,O),F=[["☺","☹","😁","😂","😉","😋","😍","😎","😏","😔","😖","🤗",""],["😘","😛","😜","😟","😡","😠","😤","😬","😭","😢","😳","😴",""],["🙈","🙉","🙊","🙏","🚽","🛁","🚁","🚂","🚃","🚑","🚒","🚓",""],["🚕","🚗","🚙","🚚","🚛","🚜","🚢","🚣","🚴","🔥","☕","❤",""],["👋","👌","👍","👏","🥶","🌨","🎹","🌜","🌝","💐","🌷","🌸",""]].concat(m,O),w=[["Я_хочу_","пить","есть","спать",""],["писить","какать","гулять","в_магазин",""],["поговорить_","с_мамой","с_папой","с_бабушкой",""],["Я_люблю_","свою_мамочку","своего_папочку",""],["Да","Нет","Не_знаю",""]].concat(m,O),x={eng:k,rus:h,num:g,emoji:F,phrases:w},E={none:function(e){return e},upper:function(e){return e.toUpperCase()}},S=x;function B(e,t,n,o,c,u){return Object(r["F"])(),Object(r["k"])("button",{ref:"buttonRef",class:"button",onClick:t[1]||(t[1]=Object(r["eb"])((function(){return e.clickButton&&e.clickButton.apply(e,arguments)}),["stop","prevent"]))},Object(r["Q"])(e.checkButton),513)}n("fb6a"),n("ac1f"),n("841c"),n("caad");var K=Object(r["p"])({name:"Button",props:{char:{type:String,required:!0}},setup:function(e){var t=Object(s["b"])(),n=Object(r["I"])(null),o=Object(r["i"])((function(){return t.state.keyboardStore.currentLayout})),c=Object(r["i"])((function(){return t.state.keyboardStore.modifier})),u=Object(r["i"])((function(){return t.state.keyboardStore.beforeLayout})),l=Object(r["i"])((function(){var t,r="",o=e.char[0],u=e.char[e.char.length-1];if(null===(t=n.value)||void 0===t||t.classList.remove("button--symbol"),"{"===o&&"}"===u||"["===o&&"]"===u||"<"===o&&">"===u)r=e.char.slice(1,e.char.length-1),"upper"===r?r="none"===c.value?"⇧":"⇩":"backspace"===r?r="Шаг назад":"back"===r?r="⇦":"emoji"===r?r="😉":"phrases"===r&&(r="Фразы");else{switch(r=e.char,r){case"\n":r="↵";break;case"_":r="_";break;case"":r="^";break;default:r=E[c.value](r)}var l,a=/[A-Za-zА-ЯЁа-яё]/;if(-1!==r.search(a))null===(l=n.value)||void 0===l||l.classList.add("button--symbol")}return r})),a=function(n){var r=e.char,l=r[0],a=r[r.length-1],i=r.slice(1,r.length-1);if("{"===l&&"}"===a)t.dispatch("setBeforeLayout",o.value),t.dispatch("setCurrentLayout",i);else if("["===l&&"]"===a)"upper"===c.value&&"upper"===i?t.dispatch("setModifier","none"):t.dispatch("setModifier",i);else if("<"===l&&">"===a)"back"===i?(t.dispatch("setCurrentLayout",u.value),t.dispatch("setBeforeLayout","")):"backspace"===i&&t.commit("textBackspace");else{var s=n.target.textContent;["\n","_",""].includes(r)&&(s=r),"upper"!==t.state.keyboardStore.modifier&&t.dispatch("setModifier","upper"),t.dispatch("inputText",s)}};return{buttonRef:n,checkButton:l,clickButton:a}}});K.render=B;var L=K,I=Object(r["p"])({name:"Keyboard",components:{Button:L},props:{getKeyboard:{type:Function,required:!0},isHiddenKeyboard:{type:Boolean,default:!1}},setup:function(e){var t=Object(s["b"])(),n=Object(r["i"])((function(){return t.state.keyboardStore.currentLayout})),o=Object(r["i"])((function(){return S[n.value]})),c=Object(r["I"])("");return Object(r["C"])((function(){e.getKeyboard(c.value)})),Object(r["E"])((function(){e.getKeyboard(c.value)})),{layout:o,keyboardRef:c}}});I.render=v;var _=I;n("159b");function C(){var e=1500,t=Object(r["I"])(null),n=Object(r["I"])(""),o=Object(r["I"])(null),c=Object(r["I"])(null),u=Object(r["I"])(0),l=Object(r["I"])(null),a=Object(r["I"])(null),i=function(e){var t=e.querySelectorAll("button");t.forEach((function(e){e.classList.remove("button--selected")}))},s=function(){var n=0;return setTimeout((function r(){i(c.value[0===n?u.value-1:n-1]);var o=c.value[n].querySelectorAll("button");l.value=n,o.forEach((function(e){e.classList.add("button--selected")})),n=n<u.value-1?++n:0,t.value=setTimeout(r,e)}),0)},b=function(){var n=0,r=c.value[l.value].querySelectorAll("button"),o=r.length-1;return setTimeout((function c(){r[0===n?o:n-1].classList.remove("button--selected"),r[n].classList.add("button--selected"),a.value=r[n],n=n<o?++n:0,t.value=setTimeout(c,e)}),0)},f=function(e){var t;o.value=e,c.value=e.querySelectorAll(".row"),u.value=(null===(t=c.value)||void 0===t?void 0:t.length)||0};return{timerId:t,running:n,keyboard:o,button:a,removeClassFromElements:i,rowsIterator:s,colsIterator:b,getKeyboard:f}}var T=function(){var e=Object(r["I"])(null),t=Object(r["I"])(null),n=Object(r["I"])(!1),o=function(){var e,t=document,n=t.fullscreenElement||t.webkitFullscreenElement||t.msFullscreenElement||t.mozFullScreenElement;n&&(t.exitFullscreen?e=t.exitFullscreen():t.webkitCancelFullScreen?e=t.webkitCancelFullScreen():t.msExitFullscreen?e=t.msExitFullscreen():t.mozCancelFullScreen?e=t.mozCancelFullScreen():alert("Выход из полноэкранного режима не работает, для выхода нажмите Esc."),e&&e.then((function(){console.info("Document Exited from Full screen mode")})).catch((function(e){console.warn(e)})))},c=function(){n.value?o():e.value.requestFullscreen?e.value.requestFullscreen():e.value.webkitRequestFullScreen?e.value.webkitRequestFullScreen():e.value.msRequestFullscreen?e.value.msRequestFullscreen():e.value.mozRequestFullScreen&&e.value.mozRequestFullScreen()},u=function(){var e,t=document;void 0!==t.fullscreenElement?e=t.fullscreenElement:void 0!==t.webkitFullscreenElement&&(e=t.webkitFullscreenElement),n.value=null!==e};return{fullscreenElement:e,fullscreenButton:t,isFullscreen:n,fullscreenHandler:c,fullscreenEventHandler:u}},q=Object(r["p"])({name:"App",components:{TextInput:d,Keyboard:_},setup:function(){var e=C(),t=e.timerId,n=e.running,o=e.keyboard,c=e.button,u=e.removeClassFromElements,l=e.rowsIterator,a=e.colsIterator,i=e.getKeyboard,s=b(),f=s.scrollToBottom,d=T(),p=d.fullscreenElement,v=d.fullscreenButton,m=d.isFullscreen,y=d.fullscreenHandler,j=d.fullscreenEventHandler,O=Object(r["I"])(!1),h=function(){O.value=!O.value;var e=p.value.getElementsByTagName("textarea")[0];O.value?e.style.height="calc(100vh - 60px - 32px)":(e.style.height="auto",f(e))};return Object(r["C"])((function(){document.addEventListener("fullscreenchange",j),document.addEventListener("webkitfullscreenchange",j),document.addEventListener("click",(function(){""===n.value?(t.value=l(),n.value="row"):"row"===n.value?(clearInterval(t.value),u(o.value),t.value=a(),n.value="col"):(clearInterval(t.value),u(o.value),c.value.click(),t.value=l(),n.value="row")}))})),{fullscreenElement:p,fullscreenButton:v,isFullscreen:m,fullscreenHandler:y,getKeyboard:i,isHiddenKeyboard:O,hideKeyboardHandler:h}}});q.render=l;var H=q,M=n("9483");Object(M["a"])("".concat("/SimpleKeyboard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var R=function(){return{input:"",currentLayout:"rus",modifier:"upper",beforeLayout:""}},A={inputText:function(e,t){e.input=e.input+t},textBackspace:function(e){e.input=e.input.slice(0,e.input.length-1)},setCurrentLayout:function(e,t){e.currentLayout=t},setModifier:function(e,t){e.modifier=t},setBeforeLayout:function(e,t){e.beforeLayout=t}},z={inputText:function(e,t){var n=e.commit;n("inputText",t)},setCurrentLayout:function(e,t){var n=e.commit;n("setCurrentLayout",t)},setModifier:function(e,t){var n=e.commit;n("setModifier",t)},setBeforeLayout:function(e,t){var n=e.commit;n("setBeforeLayout",t)}},P={},N={namespaced:!1,state:R,getters:P,actions:z,mutations:A},J=!1,U=Object(s["a"])({modules:{keyboardStore:N},strict:J});n("c1c3");Object(r["j"])(H).provide("store",U).use(o["a"]).mount("#app")}});
//# sourceMappingURL=app.67227161.js.map