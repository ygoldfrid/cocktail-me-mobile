import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import api from "../api/apiService";
import colors from "../config/colors";
import MarketCard from "../components/Cards/MarketCard";
import routes from "../navigation/routes";
import ServerErrorMessage from "../components/ServerErrorMessage";
import useApi from "./../hooks/useApi";

function MarketScreen({ route, navigation }) {
  const { loadBar } = useBar();
  const [refreshing] = useState(false);

  const {
    request: loadIngredient,
    data: ingredients,
    error,
    setError,
    loading,
  } = useApi(api.getIngredientsByCategory);

  useEffect(() => {
    loadIngredient(route.name);
  }, []);

  return (
    <>
      <ActivityIndicator
        visible={loading}
        loader="cocktail"
        opacity={1}
        backgroundColor={colors.primary}
      />
      <View style={styles.container}>
        <ServerErrorMessage
          error={error}
          setError={setError}
          onPress={() => loadIngredient(route.name)}
        />
        <FlatList
          data={ingredients}
          numColumns={3}
          keyExtractor={(ing) => ing._id.toString()}
          renderItem={({ item }) => (
            <MarketCard
              ingredient={item}
              onPress={() =>
                navigation.navigate(routes.INGREDIENT_DETAILS, item)
              }
            />
          )}
          refreshing={refreshing}
          onRefresh={loadBar}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 12,
  },
});

export default MarketScreen;
