import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import api from "./app/api/apiService";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/authContext";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import BarContext from "./app/hooks/barContext";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const [bar, setBar] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [useMyBar, setUseMyBar] = useState(false);
  const [user, setUser] = useState();

  const loadBar = async () => {
    const { data: bar } = await api.getBar();
    setBar(bar);
  };

  const loadUser = async () => {
    return await authStorage.getUser();
  };

  const restoreData = async () => {
    const user = await loadUser();
    if (user) {
      await loadBar();
      setUser(user);
    }
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreData} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BarContext.Provider
        value={{ bar, loadBar, setBar, setUseMyBar, useMyBar }}
      >
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </BarContext.Provider>
    </AuthContext.Provider>
  );
}
