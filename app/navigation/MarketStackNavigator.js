import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MarketTabNavigator from "./MarketTabNavigator";
import routes from "./routes";

const Stack = createStackNavigator();

const MarketStackNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={routes.MARKET} component={MarketTabNavigator} />
  </Stack.Navigator>
);

export default MarketStackNavigator;
