import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import colors from "../config/colors";

function CocktailMeButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Fontisto name="cocktail" color={colors.white} size={28} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 30,
    borderWidth: 5,
    bottom: 20,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
});

export default CocktailMeButton;
