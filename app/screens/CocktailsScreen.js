import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import cocktailsApi from "../api/cocktails";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "./../hooks/useApi";
import { imagePath } from "../utility/imagePath";

function CocktailsScreen({ navigation }) {
  const { request: loadCocktails, data: cocktails, error, loading } = useApi(
    cocktailsApi.getCocktails
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
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the cocktails</AppText>
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
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default CocktailsScreen;
