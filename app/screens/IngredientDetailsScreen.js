import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import ActivityIndicator from "../components/ActivityIndicator";
import api from "../api/apiService";
import colors from "../config/colors";
import MiniCardList from "../components/Cards/MiniCardList";
import routes from "../navigation/routes";
import Text from "../components/Text";
import useApi from "../hooks/useApi";
import { imagePath } from "../utility/imagePath";

function IngredientDetailsScreen({ navigation, route }) {
  let initialIngredient = route.params;

  const {
    request: loadCocktails,
    data: cocktails,
    loading: loadingCocktails,
  } = useApi(api.getIngredientCocktails);

  const {
    request: loadIngredient,
    data: ingredient,
    loading: loadingIngredient,
  } = useApi(api.getIngredientById);

  useEffect(() => {
    loadCocktails(initialIngredient._id);
    loadIngredient(initialIngredient._id);
  }, [initialIngredient]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        tint="light"
        preview={{
          uri: imagePath(initialIngredient.images[0].thumbnailUrl),
        }}
        uri={imagePath(initialIngredient.images[0].url)}
      />
      <View style={styles.details}>
        <ActivityIndicator visible={loadingCocktails || loadingIngredient} />
        <Text style={styles.title}>What can you make?</Text>
        <MiniCardList
          items={cocktails}
          onPress={(item) => navigation.navigate(routes.COCKTAIL_DETAILS, item)}
        />
        {ingredient.alternatives && ingredient.alternatives.length > 0 && (
          <>
            <Text style={styles.title}>You can replace it with:</Text>
            <MiniCardList
              items={ingredient.alternatives}
              onPress={(item) =>
                navigation.navigate(routes.INGREDIENT_DETAILS, item)
              }
            />
          </>
        )}
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
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default IngredientDetailsScreen;
