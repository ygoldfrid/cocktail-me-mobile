import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import api from "../api/apiService";
import CocktailCard from "../components/Cards/CocktailCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import TextInput from "../components/TextInput";
import Screen from "./../components/Screen";
import ServerErrorMessage from "../components/ServerErrorMessage";
import Switch from "../components/Switch";
import useBar from "../hooks/useBar";

function CocktailsScreen({ navigation }) {
  const { bar, getMissingCount, setUseMyBar, useMyBar } = useBar();

  const [cocktails, setCocktails] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [serverError, setServerError] = useState(false);

  const refreshCocktails = async () => {
    setLoading(true);
    let response = await api.getCocktails();
    setLoading(false);
    if (!response.ok) return setServerError(true);

    let loadedCocktails = response.data;
    if (bar.length < 3) setUseMyBar(false);
    else if (useMyBar) {
      const barIds = bar.map((ing) => ing._id);

      loadedCocktails = loadedCocktails.filter((cocktail) => {
        cocktail.missing = getMissingCount(cocktail.components, barIds);
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
      <ActivityIndicator visible={loading} />
      <ServerErrorMessage
        error={serverError}
        onPress={refreshCocktails}
        setError={setServerError}
      />
      {!serverError && (
        <View style={styles.list}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            borderColor={colors.light}
            maxLength={100}
            onChangeText={handleSearch}
            placeholder="Search cocktails..."
            value={searchQuery}
          />
          <Switch label="Use ingredients from My Bar" hide={bar.length < 3} />
          <FlatList
            data={searchQuery ? filtered : cocktails}
            keyExtractor={(cocktail) => cocktail._id.toString()}
            renderItem={({ item }) => (
              <CocktailCard
                useMyBar={useMyBar}
                cocktail={item}
                onPress={() =>
                  navigation.navigate(routes.COCKTAIL_DETAILS, item)
                }
              />
            )}
          />
        </View>
      )}
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
