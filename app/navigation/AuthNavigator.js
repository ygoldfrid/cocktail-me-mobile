import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ForgotPassword from "../screens/auth/ForgotPassword";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ResetPassword from "../screens/auth/ResetPassword";
import SuccessReset from "../screens/auth/SuccessReset";
import ValidateToken from "../screens/auth/ValidateToken";
import WelcomeScreen from "../screens/WelcomeScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.WELCOME}
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    <Stack.Screen name={routes.FORGOT_PASSWORD} component={ForgotPassword} />
    <Stack.Screen name={routes.VALIDATE_TOKEN} component={ValidateToken} />
    <Stack.Screen name={routes.RESET_PASSWORD} component={ResetPassword} />
    <Stack.Screen name={routes.SUCCESS_RESET} component={SuccessReset} />
  </Stack.Navigator>
);

export default AuthNavigator;
