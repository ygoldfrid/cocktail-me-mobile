import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import CocktailDetailsScreen from "../screens/CocktailDetailsScreen";
import IngredientDetailsScreen from "../screens/IngredientDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.FAVORITES} component={FavoritesScreen} />
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

export default AccountNavigator;
