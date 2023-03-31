import axios from 'axios';
import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'modern-normalize';
import './sass/index.scss';
// import {} from './js/scroll';

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

const searchFormRef = document.querySelector('#search-form');
const galleryWrapperRef = document.querySelector('.gallery');
