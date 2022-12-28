import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

(() => {
    const galleryItemsEl = document.querySelector(".gallery");
    const galleryMarkup = galleryItems
      .reduce((acc, { original, preview, description }) => 
      acc += `<a class="gallery__item" href="${original}">
              <img 
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}" 
              />
          </a>`, "");

    galleryItemsEl.insertAdjacentHTML("beforeend", galleryMarkup);
  
    new SimpleLightbox(".gallery .gallery__item", {
      captionsData: "alt",
      captionDelay: 250,
    });
  })();


// const galleryItemsEl = document.querySelector('.gallery');

// const galleryMarkup = createGalleryMarkup(galleryItems);
// galleryItemsEl.insertAdjacentHTML('beforeend', galleryMarkup);

// function createGalleryMarkup(galleryItems) {
//     return galleryItems.reduce((acc, { original, preview, description }) => 
//     acc += `<a class="gallery__item" href="${original}">
//             <img 
//                 class="gallery__image"
//                 src="${preview}"
//                 alt="${description}" 
//             />
//         </a>`, "");
// }

// const lightbox = new SimpleLightbox (".gallery a", {
//     captionSelector: ".gallery__image", 
//     captionsData: "alt",
//     captionDelay: 250,
//   });


