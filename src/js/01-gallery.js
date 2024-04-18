import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryStart = document.querySelector('.gallery');

function imagesCreate() {
  for (const image of galleryItems) {
    const imageMade = document.createElement('li');
    imageMade.style.listStyleType = 'none';
    imageMade.innerHTML = `<a href="${image.original}">
      <img src="${image.preview}" alt="${image.description}" />
   </a>`;
    galleryStart.append(imageMade);
  }
  const lightBox = new SimpleLightbox(`.gallery a`, {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

imagesCreate();
