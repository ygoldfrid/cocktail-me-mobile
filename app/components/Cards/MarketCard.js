import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AddOrRemoveButton from "../AddOrRemoveButton";
import colors from "../../config/colors";
import Text from "../Text";
import { imagePath } from "../../utility/imagePath";

function MarketCard({ ingredient, onPress }) {
  const name = ingredient.name.split(" ").join("\n");
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: imagePath(ingredient.images[0].thumbnailUrl) }}
          uri={imagePath(ingredient.images[0].url)}
        />
        <View style={styles.details}>
          <Text numberOfLines={2} style={styles.title}>
            {name}
          </Text>
          <AddOrRemoveButton ingredient={ingredient} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: colors.medium,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 200,
    margin: 4,
    overflow: "hidden",
    width: 110,
  },
  details: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    padding: 5,
  },
  image: {
    height: 100,
    width: "100%",
  },
  title: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default MarketCard;
