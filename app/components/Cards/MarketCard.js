import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "../Text";
import colors from "../../config/colors";

function MarketCard({ title, imageUrl, thumbnailUrl, onPress }) {
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
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add to My Bar</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    justifyContent: "center",
    margin: 5,
    padding: 2,
    width: "95%",
  },
  buttonText: {
    color: colors.primary,
    fontSize: 12,
  },
  card: {
    borderColor: colors.medium,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 190,
    margin: 5,
    overflow: "hidden",
    width: 100,
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
