import http from "./apiClient";

const cocktailsEndpoint = "/cocktails";
const ingredientsEndpoint = "/ingredients";
const barEndpoint = "/bar";

const getIngredients = () => http.get(ingredientsEndpoint);

const getIngredientsByCategory = (query) =>
  http.get(`${ingredientsEndpoint}?${query}`);

const getIngredientCocktails = (ingredientId) =>
  http.get(`${ingredientsEndpoint}/${ingredientId}${cocktailsEndpoint}`);

const getCocktails = () => http.get(cocktailsEndpoint);

const getBar = () => http.get(barEndpoint);

export default {
  getIngredients,
  getIngredientsByCategory,
  getIngredientCocktails,
  getCocktails,
  getBar,
};
