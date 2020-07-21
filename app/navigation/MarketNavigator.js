import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Screen from "./../components/Screen";
import MarketScreen from "../screens/MarketScreen";

const Tab = createMaterialTopTabNavigator();

const MarketNavigator = () => (
  <Screen>
    <Tab.Navigator>
      <Tab.Screen name="Spirits" component={MarketScreen} />
      <Tab.Screen name="Liqueurs&Wines" component={MarketScreen} />
      <Tab.Screen name="Mixers" component={MarketScreen} />
      <Tab.Screen name="Others" component={MarketScreen} />
    </Tab.Navigator>
  </Screen>
);

export default MarketNavigator;
