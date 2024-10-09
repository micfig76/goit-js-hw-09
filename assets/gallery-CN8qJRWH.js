const l=({preview:t,original:a,description:e})=>{const n=document.createElement("li");return n.classList.add("gallery-item"),n.innerHTML=`<a class="gallery-link" href="${a}">
            <img
                class="gallery-image"
                src="${t}"
                alt="${e}"
                title="${e}"
            />
        </a>`,n},r=t=>{const a=t.map(l),e=document.createDocumentFragment();return e.append(...a),e};export{r as i};
//# sourceMappingURL=gallery-CN8qJRWH.js.map
