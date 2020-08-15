import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import api from "./app/api/apiService";
import AuthContext from "./app/auth/authContext";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import BarContext from "./app/hooks/barContext";
import IntroNavigator from "./app/navigation/IntroNavigator";
import logger from "./app/utility/logger";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import { navigationRef } from "./app/navigation/rootNavigation";
import storage from "./app/auth/storage";

logger.start();

export default function App() {
  const [bar, setBar] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [seenIntro, setSeenIntro] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [useMyBar, setUseMyBar] = useState(false);
  const [user, setUser] = useState();

  const loadBar = async () => {
    const result = await api.getBar();
    if (result.ok) setBar(result.data);
  };

  const loadFavorites = async () => {
    const result = await api.getFavorites();
    if (result.ok) setFavorites(result.data);
  };

  const loadUser = async () => {
    return await authStorage.getUser();
  };

  const restoreData = async () => {
    setSeenIntro(await storage.getToken("introToken"));

    const user = await loadUser();
    if (user) {
      await loadBar();
      await loadFavorites();
      setUser(user);
    }
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreData} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider
      value={{
        favorites,
        loadFavorites,
        setFavorites,
        setSeenIntro,
        setUser,
        user,
      }}
    >
      <BarContext.Provider
        value={{ bar, loadBar, setBar, setUseMyBar, useMyBar }}
      >
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <IntroNavigator seenIntro={seenIntro} /> : <AuthNavigator />}
        </NavigationContainer>
      </BarContext.Provider>
    </AuthContext.Provider>
  );
}
