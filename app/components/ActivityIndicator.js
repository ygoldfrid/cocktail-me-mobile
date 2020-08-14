import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Text from "./Text";

function ActivityIndicator({
  visible = false,
  opacity = 0.7,
  backgroundColor = "white",
}) {
  if (!visible) return null;
  const source = require("../assets/animations/loader-dots.json");

  return (
    <View style={[styles.overlay, { backgroundColor, opacity }]}>
      <LottieView autoPlay loop source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    height: "100%",
    position: "absolute",
    width: "100%",
    zIndex: 1,
    justifyContent: "center",
  },
  text: {
    bottom: "25%",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
    position: "absolute",
    textTransform: "uppercase",
    zIndex: 1,
  },
});

export default ActivityIndicator;
