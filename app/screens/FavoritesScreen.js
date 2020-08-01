import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import Text from "../components/Text";
import useAuth from "../auth/useAuth";
import { imagePath } from "../utility/imagePath";

function FavoritesScreen({ navigation }) {
  const { favorites, addOrRemoveFavorites, loadFavorites } = useAuth();
  const [refreshing] = useState(false);

  return (
    <>
      {favorites.length === 0 && (
        <View style={styles.emptyContainer}>
          <FontAwesome5 name="sad-cry" size={50} color={colors.dark} />
          <Text style={styles.emptyText}>
            You haven't added any cocktail to your Favorites!
          </Text>
        </View>
      )}
      <FlatList
        data={favorites}
        keyExtractor={(cocktail) => cocktail._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subtitle={item.components.length + " ingredients"}
            imageUrl={imagePath(item.images[0].url)}
            thumbnailUrl={imagePath(item.images[0].thumbnailUrl)}
            onPress={() => navigation.navigate(routes.COCKTAIL_DETAILS, item)}
            onDelete={() => addOrRemoveFavorites(item._id)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={loadFavorites}
      />
    </>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 30,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default FavoritesScreen;
