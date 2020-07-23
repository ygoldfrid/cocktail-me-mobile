import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BarScreen from "../screens/BarScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const BarNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={routes.BAR} component={BarScreen} />
  </Stack.Navigator>
);

export default BarNavigator;
