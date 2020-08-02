import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from "jwt-decode";
import logger from "../utility/logger";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    logger.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);

    const cache_keys = ["cache/bar", "cache/favorites"];
    await AsyncStorage.multiRemove(cache_keys);
  } catch (error) {
    logger.log("Error removing the auth token", error);
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
};
