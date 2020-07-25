import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CocktailDetailsScreen from "../screens/CocktailDetailsScreen";
import CocktailsScreen from "../screens/CocktailsScreen";
import IngredientDetailsScreen from "../screens/IngredientDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.COCKTAILS_SCREEN}
      component={CocktailsScreen}
      options={{ headerShown: false }}
    />
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

export default FeedNavigator;
