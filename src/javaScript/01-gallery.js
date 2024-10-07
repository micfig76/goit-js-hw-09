import SimpleLightbox from "simplelightbox";

import { images } from "./images.js";


const createImage = ({ preview, original, description }) => {
    const li = document.createElement("li");
    li.classList.add("gallery-item");

    li.innerHTML = 
        `<a class="gallery-link" href="${original}">
            <img
                class="gallery-image"
                src="${preview}"
                alt="${description}"
            />
        </a>`;
    return li;
};

const initImages = (images) => {
    const imgs = images.map(createImage);

    const fragment = document.createDocumentFragment();
    fragment.append(...imgs);
    return fragment;
};

const main = (root, images) => {
    document.querySelector(root).appendChild(initImages(images));
};

main(".gallery", images);

const lightbox = new SimpleLightbox("ul.gallery li", {
    captionType: "alt",
    sourceAttr: "href"
});