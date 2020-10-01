import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Catamaran_500Medium } from "@expo-google-fonts/catamaran";

import Text from "./Text";
import colors from "../config/colors";

function Link({ color = colors.primary, onPress, text, style }) {
  let [fontsLoaded] = useFonts({ "Catamaran-Medium": Catamaran_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.link, style, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    fontFamily: "Catamaran-Medium",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Link;
