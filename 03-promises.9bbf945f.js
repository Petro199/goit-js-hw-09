!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");function a(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){console.log(e),o?t({position:e,delayN:n}):i({position:e,delayN:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=n.target.elements,t=o.delay,i=o.step,u=o.amount,l=Number(t.value),c=Number(u.value),d=(Number(i.value),0);d<c;d+=1)a({position:d,delayN:l}).then((function(n){var o=n.position,t=n.delayN;e(r).Notify.success("Fulfilled promise ".concat(o+1," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delayN;e(r).Notify.failure("Rejected promise ".concat(o+1," in ").concat(t,"ms"))})),l+=i}))}();
//# sourceMappingURL=03-promises.9bbf945f.js.map
