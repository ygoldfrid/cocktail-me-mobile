import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import api from "../api/apiService";
import Button from "../components/Button";
import Card from "../components/Cards/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Text from "../components/Text";
import useApi from "./../hooks/useApi";
import { imagePath } from "../utility/imagePath";

function CocktailsScreen({ navigation }) {
  const { request: loadCocktails, data: cocktails, error, loading } = useApi(
    api.getCocktails
  );

  useEffect(() => {
    loadCocktails();
  }, []);

  return (
    <>
      <ActivityIndicator
        visible={loading}
        loader="cocktail"
        opacity={1}
        backgroundColor={colors.primary}
      />
      <View style={styles.list}>
        {error && (
          <>
            <Text>Couldn't retrieve the cocktails</Text>
            <Button title="Retry" onPress={loadCocktails} />
          </>
        )}
        <FlatList
          data={cocktails}
          keyExtractor={(cocktail) => cocktail._id.toString()}
          renderItem={({ item }) => (
            <Card
              body={item.preparation[0]}
              title={item.name}
              subtitle={item.components.length + " ingredients"}
              imageUrl={imagePath(item.images[0].url)}
              thumbnailUrl={imagePath(item.images[0].thumbnailUrl)}
              onPress={() => navigation.navigate(routes.COCKTAIL_DETAILS, item)}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
});

export default CocktailsScreen;
