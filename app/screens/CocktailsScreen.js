import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import api from "../api/apiService";
import Button from "../components/Button";
import Card from "../components/Cards/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import useApi from "./../hooks/useApi";
import { imagePath } from "../utility/imagePath";

function CocktailsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const { request: loadCocktails, data: cocktails, error, loading } = useApi(
    api.getCocktails
  );

  useEffect(() => {
    loadCocktails();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setFiltered(
      cocktails.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

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
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor={colors.white}
          maxLength={100}
          onChangeText={handleSearch}
          placeholder="Search cocktails...         "
        />
        <FlatList
          data={searchQuery ? filtered : cocktails}
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
    backgroundColor: colors.light,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
});

export default CocktailsScreen;
