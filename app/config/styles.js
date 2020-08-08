import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: Platform.OS === "android" ? 17 : 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
