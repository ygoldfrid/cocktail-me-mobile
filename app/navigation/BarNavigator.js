import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BarScreen from "../screens/BarScreen";
import CocktailDetailsScreen from "../screens/CocktailDetailsScreen";
import IngredientDetailsScreen from "../screens/IngredientDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const BarNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={routes.BAR} component={BarScreen} />
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

export default BarNavigator;
