const e=document.querySelector(".board"),t=document.querySelector(".active"),o=["Red","Green","Blue","Yellow","Black"];e.addEventListener("click",(function(e){const t=(n=o.length,Math.floor(Math.random()*n));var n;if("TD"!==e.target.tagName)return;e.target.style.background=o[t]})),t.addEventListener("click",(function(e){e.stopPropagation(),console.log("TdClick"),e.target.style.background="red"}));
//# sourceMappingURL=color-table.b8b27a62.js.map