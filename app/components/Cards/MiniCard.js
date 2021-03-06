import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "../Text";
import colors from "../../config/colors";

function Card({ imageUrl, missing, onPress, subtitle, thumbnailUrl, title }) {
  const splitted = title.split(" ");
  const titleLength = splitted.length;
  let titleLines;

  if (titleLength > 1) {
    titleLines = 2;
    splitted[0] += "\n";
  } else titleLines = 1;

  title = splitted.join(" ");

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={[styles.image, { opacity: missing ? 0.1 : 1 }]}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />

        <View style={styles.details}>
          <Text numberOfLines={titleLines} style={styles.title}>
            {title}
          </Text>
          {subtitle !== "" && (
            <Text numberOfLines={1} style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 0.5,
    marginRight: 10,
    height: 140,
    overflow: "hidden",
    width: 78,
  },
  details: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    height: 70,
    width: "100%",
  },
  subtitle: {
    color: colors.medium,
    fontSize: 13,
  },
  title: {
    color: colors.primary,
    fontSize: 13,
    textAlign: "center",
  },
});

export default Card;
