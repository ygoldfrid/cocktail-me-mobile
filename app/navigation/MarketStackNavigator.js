import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CocktailDetailsScreen from "../screens/CocktailDetailsScreen";
import IngredientDetailsScreen from "../screens/IngredientDetailsScreen";
import MarketTabNavigator from "./MarketTabNavigator";
import routes from "./routes";

const Stack = createStackNavigator();

const MarketStackNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={routes.MARKET} component={MarketTabNavigator} />
    <Stack.Screen
      name={routes.COCKTAIL_DETAILS}
      component={CocktailDetailsScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen
      name={routes.INGREDIENT_DETAILS}
      component={IngredientDetailsScreen}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </Stack.Navigator>
);

export default MarketStackNavigator;
