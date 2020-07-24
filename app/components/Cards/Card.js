import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "../Text";
import colors from "../../config/colors";
import { imagePath } from "../../utility/imagePath";

function Card({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: imagePath(item.images[0].thumbnailUrl) }}
          uri={imagePath(item.images[0].url)}
        />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {item.components.length + " ingredients"}
          </Text>
          <Text numberOfLines={2} style={styles.body}>
            {item.preparation[0]}
          </Text>
        </View>
        <View style={styles.missingContainer}>
          {item.missing === 0 ? (
            <Text style={styles.missingText}>You can make this!</Text>
          ) : (
            <Text style={styles.missingText}>{`Missing ${item.missing} ${
              item.missing === 1 ? "ingredient" : "ingredients"
            }`}</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  body: {
    color: colors.dark,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 230,
  },
  missingContainer: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    position: "absolute",
    right: 10,
    top: 10,
  },
  missingText: {
    color: colors.primary,
  },
  subtitle: {
    color: colors.medium,
    marginBottom: 7,
  },
  title: {
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default Card;
