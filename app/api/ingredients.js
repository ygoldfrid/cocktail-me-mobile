import client from "./client";

const endpoint = "/ingredients";

const getIngredients = () => client.get(endpoint);

const getIngredientsByCategory = (query) => client.get(`${endpoint}?${query}`);

export default {
  getIngredients,
  getIngredientsByCategory,
};
