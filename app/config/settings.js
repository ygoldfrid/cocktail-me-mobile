import Constants from "expo-constants";

const settings = {
  dev: {
    baseUrl: "http://192.168.0.9:3900",
  },
  prod: {
    baseUrl: "http://192.168.0.9:3900",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
