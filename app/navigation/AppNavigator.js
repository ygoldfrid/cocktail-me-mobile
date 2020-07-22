import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import BarNavigator from "./BarNavigator";
import FeedNavigator from "./FeedNavigator";
import MarketStackNavigator from "./MarketStackNavigator";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = ({ bar }) => {
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
        component={BarNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bottle-wine"
              size={size + 3}
              color={color}
            />
          ),
        }}
        initialParams={{ bar }}
      />
      <Tab.Screen
        name={routes.MARKET}
        component={MarketStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="store" size={size - 3} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
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
