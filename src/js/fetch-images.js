import axios from "axios";

const USER_KEY = "34948813-296850008c19dad8d09f83fef";
const BASE_URL = "https://pixabay.com/api/";
const IMAGE_TYPE = "photo";
const ORIENTATION = "horizontal";
const SAFE_SEARCH = "true";

const searchParams = new URLSearchParams({
  key: USER_KEY,
  image_type: IMAGE_TYPE,
  orientation: ORIENTATION,
  safesearch: true,
  per_page: 40,
});

export async function fetchPhotos(q) {
  try {
    const res = await fetch(`${BASE_URL}?${searchParams}&q=${q}`);
    console.log(await res.json());
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
