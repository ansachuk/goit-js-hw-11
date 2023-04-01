import axios from "axios";

const USER_KEY = "34948813-296850008c19dad8d09f83fef";
const BASE_URL = "https://pixabay.com/api/";
const IMAGE_TYPE = "photo";
const ORIENTATION = "horizontal";
const SAFE_SEARCH = "true";

const searchParams = new URLSearchParams({
  q: "cat",
});

export function fetchPhotos(q) {
  return fetch(`${BASE_URL}?key=${USER_KEY}&q=${q}`);
}
