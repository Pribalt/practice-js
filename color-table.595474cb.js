!function(){var e=document.querySelector(".board"),t=document.querySelector(".active"),r=["Red","Green","Blue","Yellow","Black"];e.addEventListener("click",(function(e){var t=(a=r.length,Math.floor(Math.random()*a));var a;if("TD"!==e.target.tagName)return;e.target.style.background=r[t]})),t.addEventListener("click",(function(e){e.stopPropagation(),console.log("TdClick"),e.target.style.background="red"}))}();
//# sourceMappingURL=color-table.595474cb.js.map