!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON");i("h6c0i"),i("fivgP"),i("3xhau"),i("7rQOT"),i("gqlUR"),e(r).Notify.init({width:"280px",position:"right-top",distance:"10px",opacity:1}),document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(u.value),o=Number(c.value),i=Number(a.value),d=1;d<=t;d+=1)l(d,i+o*(d-1)).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))}))}));var u=document.querySelector('input[name="amount"]'),a=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]');function l(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.095c89ef.js.map