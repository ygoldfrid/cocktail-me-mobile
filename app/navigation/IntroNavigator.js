import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import IntroSliderScreen from "./../screens/IntroSliderScreen";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const IntroNavigator = ({ seenIntro }) => (
  <Stack.Navigator
    initialRouteName={seenIntro ? routes.COCKTAILS_NAVIGATOR : routes.INTRO}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={routes.INTRO} component={IntroSliderScreen} />
    <Stack.Screen name={routes.COCKTAILS_NAVIGATOR} component={AppNavigator} />
  </Stack.Navigator>
);

export default IntroNavigator;
