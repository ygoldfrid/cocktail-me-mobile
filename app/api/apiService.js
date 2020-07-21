import client from "./client";

const cocktailsEndpoint = "/cocktails";
const ingredientsEndpoint = "/ingredients";

const getIngredients = () => client.get(ingredientsEndpoint);

const getIngredientsByCategory = (query) =>
  client.get(`${ingredientsEndpoint}?${query}`);

const getIngredientCocktails = (ingredientId) =>
  client.get(`${ingredientsEndpoint}/${ingredientId}${cocktailsEndpoint}`);

const getCocktails = () => client.get(cocktailsEndpoint);

export default {
  getIngredients,
  getIngredientsByCategory,
  getIngredientCocktails,
  getCocktails,
};
