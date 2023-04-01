import "modern-normalize";
import "./sass/index.scss";

import axios from "axios";
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

fetchPhotos("dog", currentPage);
