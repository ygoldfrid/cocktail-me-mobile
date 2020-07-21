import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import Text from "../components/Text";
import routes from "../navigation/routes";
import MiniCardList from "../components/MiniCardList";
import { imagePath } from "../utility/imagePath";

function CocktailDetailsScreen({ navigation, route }) {
  const cocktail = route.params;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: imagePath(cocktail.images[0].thumbnailUrl) }}
        uri={imagePath(cocktail.images[0].url)}
      />
      <View style={styles.details}>
        <Text style={styles.title}>Ingredients:</Text>
        <MiniCardList
          ingredient
          items={cocktail.components}
          onPress={(item) =>
            navigation.navigate(routes.INGREDIENT_DETAILS, item.ingredient)
          }
        />
        <Text style={styles.title}>Preparation:</Text>
        {cocktail.preparation.map((step, index) => (
          <Text key={index} style={styles.preparation}>{`${
            index + 1
          }. ${step}`}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  details: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 5,
  },
  preparation: {
    color: colors.dark,
  },
  title: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default CocktailDetailsScreen;