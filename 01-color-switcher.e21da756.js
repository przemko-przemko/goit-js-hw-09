parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TCaP":[function(require,module,exports) {
const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");let o=null;const l=()=>{o=setInterval(()=>{r.style.backgroundColor=`${d()}`,console.log(d())},1e3),e.disabled="true"},n=()=>{clearInterval(o),e.disabled=""};function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",l),t.addEventListener("click",n),e.style.marginLeft="50vw",e.style.marginTop="40vh",e.style.border="none",e.style.borderRadius="30px",e.style.backgroundColor="green",e.style.width="100px",e.style.height="100px",t.style.border="none",t.style.borderRadius="30px",t.style.backgroundColor="red",t.style.width="100px",t.style.height="100px";
},{}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-js-hw-08/src/01-color-switcher.e21da756.js.map