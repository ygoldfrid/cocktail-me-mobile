import client from "./client";

const cocktailsEndpoint = "/cocktails";
const ingredientsEndpoint = "/ingredients";

const getCocktails = () => client.get(cocktailsEndpoint);

const getIngredientCocktails = (ingredientId) =>
  client.get(`${ingredientsEndpoint}/${ingredientId}${cocktailsEndpoint}`);

export default {
  getCocktails,
  getIngredientCocktails,
};
