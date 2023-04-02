import "modern-normalize";
import "./sass/index.scss";

import { Notify } from "notiflix";

import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

// import {} from './js/scroll';
import { fetchPhotos } from "./js/fetch-images";

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});

const searchFormRef = document.querySelector("#search-form");
const galleryWrapperRef = document.querySelector(".gallery");

let currentPage = 1;
let currentQuerry = "";

searchFormRef.addEventListener("submit", onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  currentPage = 1;
  currentQuerry = e.currentTarget.searchQuery.value;

  if (!currentQuerry) {
    Notify.failure("You mast enter query!");
    return;
  }

  const photos = await fetchPhotos(currentQuerry, currentPage);

  if (!photos.hits.length) {
    Notify.failure("We not found matches!");
    return;
  }
  console.log(photos.hits[0]);
  Notify.success(`Hooray! We found ${photos.totalHits} images.`);

  galleryWrapperRef.innerHTML = makeGalleryElementsMarkup(photos.hits);
}

function makeGalleryElementsMarkup(imagesArray) {
  return imagesArray
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `

      <div class="photo-card">
        <img width='400' heigth='300' src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes</b> ${likes}</p>
          <p class="info-item"><b>Views</b> ${views}</p>
          <p class="info-item"><b>Comments</b> ${comments}</p>
          <p class="info-item"><b>Downloads</b> ${downloads}</p>
        </div>
      </div>

    `
    )
    .join("");
}
//<a href="${largeImageURL}">
//</a>
//<a href="${largeImageURL}" class="large-img-link photo-card">
//</a>
