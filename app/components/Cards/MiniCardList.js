import React from "react";
import { FlatList } from "react-native";

import MiniCard from "./MiniCard";
import { imagePath } from "../../utility/imagePath";

function MiniCardList({ ingredient, items, onPress }) {
  return (
    <FlatList
      data={items}
      horizontal
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <MiniCard
          imageUrl={imagePath(
            ingredient ? item.ingredient.images[0].url : item.images[0].url
          )}
          missing={item.missing}
          onPress={() => onPress(item)}
          subtitle={ingredient ? item.measure : ""}
          thumbnailUrl={imagePath(
            ingredient
              ? item.ingredient.images[0].thumbnailUrl
              : item.images[0].thumbnailUrl
          )}
          title={ingredient ? item.ingredient.name : item.name}
        />
      )}
    />
  );
}

export default MiniCardList;
