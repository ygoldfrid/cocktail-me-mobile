import React from "react";
import Toast from "react-native-simple-toast";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import BarNavigator from "./BarNavigator";
import CocktailMeButton from "./CocktailMeButton";
import FeedNavigator from "./FeedNavigator";
import HomeIconWithBadge from "../components/HomeIconWithBadge";
import MarketStackNavigator from "./MarketStackNavigator";
import routes from "./routes";
import useBar from "../hooks/useBar";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { bar, setUseMyBar } = useBar();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.COCKTAILS_NAVIGATOR}
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
            <HomeIconWithBadge
              name="bottle-wine"
              size={size + 3}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.COCKTAIL_ME}
        component={FeedNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <CocktailMeButton
              onPress={() => {
                if (bar.length < 3)
                  return Toast.show("Add at least 3 items to My Bar");
                setUseMyBar(true);
                return navigation.navigate(routes.COCKTAILS_SCREEN);
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.MARKET}
        component={MarketStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-basket" size={size - 3} color={color} />
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
