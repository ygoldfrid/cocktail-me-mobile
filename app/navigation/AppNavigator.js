import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import routes from "./routes";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import BarScreen from "../screens/BarScreen";
import MarketScreen from "../screens/MarketScreen";
import MarketNavigator from "./MarketNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.COCKTAILS}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="glass-cocktail"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.BAR}
        component={BarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bottle-wine"
              size={size + 3}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MARKET}
        component={MarketNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="store" size={size - 3} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
