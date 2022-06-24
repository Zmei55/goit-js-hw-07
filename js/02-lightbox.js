/**
 *   <a class="gallery__item" href="large-image.jpg">
 *     <img class="gallery__image" src="small-image.jpg" alt="Image description" />
 *   </a>
 */

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onOpenModal);

function onOpenModal() {
  const lightbox = new SimpleLightbox('.gallery a', {});
}

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join('');
}
