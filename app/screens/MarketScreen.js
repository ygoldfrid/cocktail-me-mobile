import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import BarCard from "../components/BarCard";
import colors from "../config/colors";
import ingredientsApi from "../api/ingredients";
import routes from "../navigation/routes";
import Screen from "./../components/Screen";
import useApi from "./../hooks/useApi";
import { imagePath } from "../utility/imagePath";

function MarketScreen({ route, navigation }) {
  const { request: loadIngredient, data: ingredients, loading } = useApi(
    ingredientsApi.getIngredientsByCategory
  );

  useEffect(() => {
    loadIngredient(route.name);
  }, []);

  return (
    <Screen>
      <ActivityIndicator
        visible={loading}
        loader="cocktail"
        opacity={1}
        backgroundColor={colors.primary}
      />
      <View style={styles.container}>
        <FlatList
          data={ingredients}
          numColumns={3}
          keyExtractor={(ing) => ing._id.toString()}
          renderItem={({ item }) => (
            <BarCard
              title={item.name}
              imageUrl={imagePath(item.images[0].url)}
              thumbnailUrl={imagePath(item.images[0].thumbnailUrl)}
              onPress={() =>
                navigation.navigate(routes.INGREDIENT_DETAILS, item)
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 10,
  },
});

export default MarketScreen;
