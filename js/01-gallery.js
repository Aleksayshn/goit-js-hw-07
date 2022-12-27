import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryItemsEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryImage(galleryItems);
galleryItemsEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryItemsEl.addEventListener('click', onImageClick)

function createGalleryImage(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join('');
}

function onImageClick(ev) {
  if (ev.target.nodeName !== 'IMG') {
    return
  }

  ev.preventDefault();

  const largeImage = ev.target.closest('.gallery__link').href;

  const instance = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">`);
  instance.show();

  window.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(ev) {
    if (ev.code === 'Escape') {
      window.removeEventListener('keydown', onEscKeyPress);
      instance.close();
    }
  }
}
