import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Link({ color = colors.primary, onPress, text, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.link, style, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: { marginTop: 15, textAlign: "center" },
});

export default Link;
