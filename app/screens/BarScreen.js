import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import useBar from "../hooks/useBar";
import { imagePath } from "../utility/imagePath";
import routes from "../navigation/routes";
import Text from "../components/Text";

function BarScreen({ navigation }) {
  const { bar, addOrRemoveItem, loadBar } = useBar();
  const [refreshing] = useState(false);

  return (
    <>
      {bar.length === 0 && (
        <View>
          <Text style={styles.emptyText}>Your Bar is empty!</Text>
          <Text style={styles.emptyText}>
            Go to the Market and start adding some items
          </Text>
        </View>
      )}
      <FlatList
        data={bar}
        keyExtractor={(ing) => ing._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            imageUrl={imagePath(item.images[0].url)}
            thumbnailUrl={imagePath(item.images[0].thumbnailUrl)}
            onPress={() => navigation.navigate(routes.INGREDIENT_DETAILS, item)}
            onDelete={() => addOrRemoveItem(item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={loadBar}
      />
    </>
  );
}

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default BarScreen;
