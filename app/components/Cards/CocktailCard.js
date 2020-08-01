import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../../config/colors";
import Star from "../Star";
import Text from "../Text";
import { imagePath } from "../../utility/imagePath";

function CocktailCard({ cocktail, onPress, useMyBar }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: imagePath(cocktail.images[0].thumbnailUrl) }}
          uri={imagePath(cocktail.images[0].url)}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {cocktail.name}
            </Text>
            <Star cocktail={cocktail} />
          </View>
          <Text numberOfLines={1} style={styles.subtitle}>
            {cocktail.components.length + " ingredients"}
          </Text>
          <Text numberOfLines={2} style={styles.body}>
            {cocktail.preparation[0]}
          </Text>
        </View>
        {useMyBar && typeof cocktail.missing === "number" && (
          <View style={styles.missingContainer}>
            {cocktail.missing === 0 ? (
              <Text style={styles.missingText}>You can make this!</Text>
            ) : (
              <Text style={styles.missingText}>{`Missing ${cocktail.missing} ${
                cocktail.missing === 1 ? "ingredient" : "ingredients"
              }`}</Text>
            )}
          </View>
        )}
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CocktailCard;
