import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryItemEl = ({ preview, original, description } = {}) => {
    return `
    <li class="gallery__item">
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
</li>`
};

const getGalleryItemEl = galleryItems.map(el => {
    return createGalleryItemEl(el);
});

galleryEl.insertAdjacentHTML('afterBegin', getGalleryItemEl.join(''));

let lightbox = new SimpleLightbox('.gallery a', { captionDelay:250, captionType: 'attr', captions: true, captionPosition: 'bottom', captionSelector: 'img', captionsData: 'alt' });

galleryEl.addEventListener('click', event => {
   event.preventDefault();
   
    if (event.target.nodeName !== 'IMG') {
    return;
    };
});