// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryCard = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', galleryCard);

function createGalleryItems(galleryItems) {
    const galleryCard = galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}" 
                alt="${description}" 
                title="${description}"
            />
        </a>
    `}).join('');
    return galleryCard;
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('shown.simplelightbox', function () {
    gallery.defaultOptions.captionDelay = 250;
});