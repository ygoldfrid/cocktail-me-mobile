import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import api from "../api/apiService";
import colors from "../config/colors";
import MiniCardList from "../components/Cards/MiniCardList";
import routes from "../navigation/routes";
import Text from "../components/Text";
import useApi from "./../hooks/useApi";
import { imagePath } from "../utility/imagePath";

function IngredientDetailsScreen({ navigation, route }) {
  const ingredient = route.params;

  const { request: loadCocktails, data: cocktails } = useApi(
    api.getIngredientCocktails
  );

  useEffect(() => {
    loadCocktails(ingredient._id);
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: imagePath(ingredient.images[0].thumbnailUrl) }}
        uri={imagePath(ingredient.images[0].url)}
      />
      <View style={styles.details}>
        {ingredient.alternatives.length > 0 && (
          <Text style={styles.title}>You can replace it with:</Text>
        )}
        <MiniCardList
          items={ingredient.alternatives}
          onPress={(item) =>
            navigation.navigate(routes.INGREDIENT_DETAILS, item)
          }
        />
        <Text style={styles.title}>Cocktails you can make with it:</Text>
        <MiniCardList
          items={cocktails}
          onPress={(item) => navigation.navigate(routes.COCKTAIL_DETAILS, item)}
        />
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
  },
  title: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default IngredientDetailsScreen;
