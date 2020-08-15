import React, { useCallback } from "react";
import { Linking, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "./Text";

const OpenUrlLink = ({ text, url, style }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Text style={[styles.link, style]} onPress={handlePress}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default OpenUrlLink;
