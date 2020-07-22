import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BarScreen from "../screens/BarScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const BarNavigator = ({ route }) => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.BAR}
      component={BarScreen}
      initialParams={{ bar: route.params.bar }}
    />
  </Stack.Navigator>
);

export default BarNavigator;
