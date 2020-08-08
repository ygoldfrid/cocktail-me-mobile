import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MarketScreen from "../screens/MarketScreen";

const Tab = createMaterialTopTabNavigator();

const MarketTabNavigator = () => (
  <Tab.Navigator tabBarPosition="top">
    <Tab.Screen name="Spirits" component={MarketScreen} />
    <Tab.Screen
      name="Liqueurs&Wines&Beers"
      component={MarketScreen}
      options={{ title: "Liquors" }}
    />
    <Tab.Screen
      name="Mixers&Syrups"
      component={MarketScreen}
      options={{ title: "Mixers" }}
    />
    <Tab.Screen name="Others" component={MarketScreen} />
  </Tab.Navigator>
);

export default MarketTabNavigator;
