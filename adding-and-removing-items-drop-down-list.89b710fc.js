const e=document.querySelector("#colorSelect"),t=document.querySelector("#removeOption"),o=document.querySelector("#add"),n=document.querySelector("#addOption");t.addEventListener("click",(function(){console.dir(e),e.selectedOptions[0].remove()})),n.addEventListener("click",(function(){const t=o.value.trim();if(""===t)return;const n=`<option>${t}</option>`;e.insertAdjacentHTML("beforeend",n),o.value=""}));
//# sourceMappingURL=adding-and-removing-items-drop-down-list.89b710fc.js.map