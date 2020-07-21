import React from "react";
import { FlatList } from "react-native";

import MiniCard from "./MiniCard";
import { imagePath } from "../../utility/imagePath";

function MiniCardList({ items, ingredient, onPress }) {
  return (
    <FlatList
      data={items}
      horizontal
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <MiniCard
          title={ingredient ? item.ingredient.name : item.name}
          subtitle={ingredient ? item.measure : ""}
          imageUrl={imagePath(
            ingredient ? item.ingredient.images[0].url : item.images[0].url
          )}
          thumbnailUrl={imagePath(
            ingredient
              ? item.ingredient.images[0].thumbnailUrl
              : item.images[0].thumbnailUrl
          )}
          onPress={() => onPress(item)}
        />
      )}
    />
  );
}

export default MiniCardList;
