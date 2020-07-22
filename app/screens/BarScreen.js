import React from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import { imagePath } from "../utility/imagePath";

function BarScreen({ route }) {
  const bar = route.params.bar;
  return (
    <>
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
    </>
  );
}

export default BarScreen;
