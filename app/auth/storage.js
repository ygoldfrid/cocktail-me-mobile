import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from "jwt-decode";
import logger from "../utility/logger";

const authKey = "authToken";
const introKey = "introToken";

const storeToken = async (value, key = authKey) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    logger.log("Error storing the value", error);
  }
};

const getToken = async (key = authKey) => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log("Error getting the value", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeTokens = async () => {
  try {
    await SecureStore.deleteItemAsync(authKey);
    await SecureStore.deleteItemAsync(introKey);

    const cache_keys = ["cache/bar", "cache/favorites"];
    await AsyncStorage.multiRemove(cache_keys);
  } catch (error) {
    logger.log("Error removing the value", error);
  }
};

export default {
  getToken,
  getUser,
  removeTokens,
  storeToken,
};
