import React, { useCallback } from "react";
import { Linking, Text } from "react-native";

import Link from "./Link";

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
    <Text style={style} onPress={handlePress}>
      {text}
    </Text>
  );
};

export default OpenUrlLink;
