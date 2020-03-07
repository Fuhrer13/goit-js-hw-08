import gallery from './gallery-items.js';

const galleryUl = document.querySelector('.js-gallery');

const createGallery = function(array) {
  return array.reduce(
    (acc, item) =>
      acc +
      `<li class="gallery__item">
    <a
      class="gallery__link"
      href=${item.original}
    >
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </li>`,
    '',
  );
};

galleryUl.insertAdjacentHTML('beforeend', createGallery(gallery));

const modalWindow = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
const openModalWindow = e => {
  e.preventDefault();
  const targetImg = e.target;
  if (e.target === e.currentTarget) {
    return;
  }
  modalWindow.classList.add('is-open');
  modalImage.src = targetImg.dataset.source;
};

galleryUl.addEventListener('click', openModalWindow);

const closeBttn = modalWindow.querySelector('.lightbox__button');
const closeModalWindow = e => {
  e.preventDefault();
  modalWindow.classList.remove('is-open');
  modalImage.src = '';
};
closeBttn.addEventListener('click', closeModalWindow);
