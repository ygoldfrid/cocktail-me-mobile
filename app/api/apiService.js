import http from "./apiClient";

const cocktailsEndpoint = "/cocktails";
const ingredientsEndpoint = "/ingredients";
const barEndpoint = "/bar";
const favoritesEndpoint = "/favorites";

//Cocktails

const getIngredients = () => http.get(ingredientsEndpoint);

const getIngredientById = (ingredientId) =>
  http.get(`${ingredientsEndpoint}/${ingredientId}`);

const getIngredientsByCategory = (query) =>
  http.get(`${ingredientsEndpoint}?${query}`);

const getIngredientCocktails = (ingredientId) =>
  http.get(`${ingredientsEndpoint}/${ingredientId}${cocktailsEndpoint}`);

const getCocktails = () => http.get(cocktailsEndpoint);

//Bar

const getBar = () => http.get(barEndpoint);

const addToBar = (ingredientId) =>
  http.post(barEndpoint, { _id: ingredientId });

const removeFromBar = (ingredientId) =>
  http.delete(`${barEndpoint}/${ingredientId}`);

//Favorites

const getFavorites = () => http.get(favoritesEndpoint);

const addToFavorites = (cocktailId) =>
  http.post(favoritesEndpoint, { _id: cocktailId });

const removeFromFavorites = (cocktailId) =>
  http.delete(`${favoritesEndpoint}/${cocktailId}`);

export default {
  getIngredients,
  getIngredientById,
  getIngredientsByCategory,
  getIngredientCocktails,
  getCocktails,
  getBar,
  addToBar,
  removeFromBar,
  getFavorites,
  addToFavorites,
  removeFromFavorites,
};
