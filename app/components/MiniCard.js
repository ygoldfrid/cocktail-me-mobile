import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subtitle, imageUrl, thumbnailUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.details}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          {subtitle !== "" && (
            <Text numberOfLines={1} style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 125,
    marginRight: 10,
    overflow: "hidden",
    width: 70,
  },
  details: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 3,
  },
  image: {
    height: 70,
    width: "100%",
  },
  subtitle: {
    color: colors.medium,
    fontSize: 14,
  },
  title: {
    color: colors.primary,
    fontSize: 14,
    textAlign: "center",
  },
});

export default Card;
