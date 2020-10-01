import React, { useCallback } from "react";
import { AppLoading } from "expo";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Catamaran_500Medium } from "@expo-google-fonts/catamaran";

import colors from "../config/colors";
import Text from "./Text";

const OpenUrlLink = ({
  color = colors.primary,
  style,
  text,
  touchable,
  url,
}) => {
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

  let [fontsLoaded] = useFonts({ "Catamaran-Medium": Catamaran_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (touchable)
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.link, style, { color }]}>{text}</Text>
      </TouchableOpacity>
    );

  return (
    <Text style={[styles.link, style, { color }]} onPress={handlePress}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    fontFamily: "Catamaran-Medium",
    fontSize: 18,
  },
});

export default OpenUrlLink;
