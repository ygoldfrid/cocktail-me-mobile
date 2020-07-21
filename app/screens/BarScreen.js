import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { imagePath } from "../utility/imagePath";
import ListItemSeparator from "../components/ListItemSeparator";
import Text from "../components/Text";
import colors from "../config/colors";

function BarScreen({ route }) {
  const bar = route.params.bar;
  return (
    <Screen>
      <Text style={styles.title}>My Bar</Text>
      <FlatList
        data={bar}
        keyExtractor={(ing) => ing._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            imageUrl={imagePath(item.images[0].url)}
            thumbnailUrl={imagePath(item.images[0].thumbnailUrl)}
            onPress
            onDelete
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: colors.light,
    textTransform: "uppercase",
  },
});

export default BarScreen;
