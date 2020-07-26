import React, { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import api from "../api/apiService";
import Button from "../components/Button";
import Card from "../components/Cards/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import Screen from "./../components/Screen";
import useBar from "../hooks/useBar";
import Switch from "../components/Switch";

function CocktailsScreen({ navigation }) {
  const { bar, getMissingLength, setUseMyBar, useMyBar } = useBar();

  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const refreshCocktails = async () => {
    setLoading(true);
    let response = await api.getCocktails();
    setLoading(false);
    if (!response.ok) return setError(true);

    let loadedCocktails = response.data;
    if (bar.length < 3) setUseMyBar(false);
    else if (useMyBar) {
      const barIds = bar.map((ing) => ing._id);

      loadedCocktails = loadedCocktails.filter((cocktail) => {
        cocktail.missing = getMissingLength(cocktail.components, barIds);
        if (cocktail.missing < 4) return true;
        return false;
      });

      loadedCocktails.sort((x, y) => x.missing - y.missing);
    }

    setCocktails(loadedCocktails);
    setSearchQuery("");
  };

  useEffect(() => {
    refreshCocktails();
  }, [bar, useMyBar]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setFiltered(
      cocktails.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <Screen>
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
          value={searchQuery}
        />
        <Switch label="Use ingredients from My Bar" />
        <FlatList
          data={searchQuery ? filtered : cocktails}
          keyExtractor={(cocktail) => cocktail._id.toString()}
          renderItem={({ item }) => (
            <Card
              useMyBar={useMyBar}
              item={item}
              onPress={() => navigation.navigate(routes.COCKTAIL_DETAILS, item)}
            />
          )}
        />
      </View>
    </Screen>
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
