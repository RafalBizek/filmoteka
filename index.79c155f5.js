function e(e,o,t,r){Object.defineProperty(e,o,{get:t,set:r,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=o.parcelRequired76b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){r[e]=o},o.parcelRequired76b=n),n.register("2HHqq",(function(o,t){e(o.exports,"localStorageSave",(()=>r)),e(o.exports,"localStorageLoad",(()=>n));const r=(e,o)=>{try{const t=JSON.stringify(o);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},n=e=>{try{const o=localStorage.getItem(e);return null===o?void 0:JSON.parse(o)}catch(e){console.error("Get state error: ",e.message)}}})),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("modal--hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();var a=n("2HHqq");const l="filmotekaconfig";l in localStorage==!1&&(0,a.localStorageSave)(l,{night:!1,mylibrary:!1,queue:!1});
//# sourceMappingURL=index.79c155f5.js.map
