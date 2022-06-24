/**
 *   <div class="gallery__item">
 *     <a class="gallery__link" href="large-image.jpg">
 *       <img
 *         class="gallery__image"
 *         src="small-image.jpg"
 *         data-source="large-image.jpg"
 *         alt="Image description" />
 *     </a>
 *   </div>
 */

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onOpenModal);

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}" />
          </a>
        </div>
      `;
    })
    .join('');
}

function onOpenModal(event) {
  const cardEl = event.target;
  const isImageEl = cardEl.classList.contains('gallery__image');

  if (!isImageEl) {
    return;
  }

  event.preventDefault();

  window.addEventListener('keydown', onEscKeyDown);
  basicLightbox.create(`<img src="${cardEl.dataset.source}">`).show();
}

function onEscKeyDown(event) {
  const modalEl = document.querySelector('.basicLightbox--img');

  if (event.code === 'Escape') {
    window.removeEventListener('keydown', onEscKeyDown);
    modalEl.remove('.basicLightbox');
  }
}
