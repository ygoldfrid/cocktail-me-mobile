import http from "./apiClient";

const cocktailsEndpoint = "cocktails";
const ingredientsEndpoint = "ingredients";
const barEndpoint = "bar";

const getIngredients = () => http.get(ingredientsEndpoint);

const getIngredientById = (ingredientId) =>
  http.get(`${ingredientsEndpoint}/${ingredientId}`);

const getIngredientsByCategory = (query) =>
  http.get(`${ingredientsEndpoint}?${query}`);

const getIngredientCocktails = (ingredientId) =>
  http.get(`${ingredientsEndpoint}/${ingredientId}/${cocktailsEndpoint}`);

const getCocktails = () => http.get(cocktailsEndpoint);

const getBar = () => http.get(barEndpoint);

const addToBar = (ingredientId) =>
  http.post(barEndpoint, { _id: ingredientId });

const removeFromBar = (ingredientId) =>
  http.delete(`${barEndpoint}/${ingredientId}`);

export default {
  getIngredients,
  getIngredientById,
  getIngredientsByCategory,
  getIngredientCocktails,
  getCocktails,
  getBar,
  addToBar,
  removeFromBar,
};
