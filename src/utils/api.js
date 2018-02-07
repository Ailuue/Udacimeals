import { REACT_APP_API_ID, REACT_APP_API_ID } from './keys';

const API_ID = REACT_APP_API_ID;
const APP_KEY = REACT_APP_APP_KEY;

export function fetchRecipes(food = '') {
  food = food.trim();
  console.log(API_ID);
  return fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`
  )
    .then(res => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe));
}
