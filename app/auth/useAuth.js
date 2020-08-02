import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./authContext";
import authStorage from "./storage";
import api from "../api/apiService";
import useBar from "./../hooks/useBar";

export default useAuth = () => {
  const { user, setUser, favorites, setFavorites, loadFavorites } = useContext(
    AuthContext
  );
  const { setBar, loadBar } = useBar();

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);

    loadBar();
    loadFavorites();
  };

  const logOut = () => {
    setUser(null);
    setBar([]);
    setFavorites([]);
    authStorage.removeToken();
  };

  const addOrRemoveFavorites = async (cocktailId, isFavorite = true) => {
    let { data: favorites } = isFavorite
      ? await api.removeFromFavorites(cocktailId)
      : await api.addToFavorites(cocktailId);

    setFavorites(favorites);
  };

  return {
    addOrRemoveFavorites,
    favorites,
    loadFavorites,
    user,
    logIn,
    logOut,
  };
};
