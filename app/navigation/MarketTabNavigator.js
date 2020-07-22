import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MarketScreen from "../screens/MarketScreen";

const Tab = createMaterialTopTabNavigator();

const MarketTabNavigator = () => (
  <Tab.Navigator tabBarPosition="top">
    <Tab.Screen name="Spirits" component={MarketScreen} />
    <Tab.Screen
      name="Liqueurs&Wines"
      component={MarketScreen}
      options={{ title: "Liqueurs & Wines" }}
    />
    <Tab.Screen name="Mixers" component={MarketScreen} />
    <Tab.Screen name="Others" component={MarketScreen} />
  </Tab.Navigator>
);

export default MarketTabNavigator;
