const e=document.querySelector("body"),o=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let l;console.log(o),console.log(t),t.disabled=!0;const d=()=>{const o=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=o};o.addEventListener("click",(()=>{l=setInterval(d,1e3),o.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(l),o.disabled=!1,t.disabled=!0,e.style.backgroundColor="white"})),console.log(o);
//# sourceMappingURL=01-color-switcher.2818fc4d.js.map