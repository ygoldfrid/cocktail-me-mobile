import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts, Catamaran_500Medium } from "@expo-google-fonts/catamaran";

import colors from "../config/colors";

function Button({ onPress, title, style, textStyle }) {
  let [fontsLoaded] = useFonts({ "Catamaran-Thin": Catamaran_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontFamily: "Catamaran-Medium",
    fontSize: 19,
  },
});

export default Button;
