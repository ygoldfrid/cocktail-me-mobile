import React from "react";
import { FlatList } from "react-native";

import MiniCard from "./MiniCard";
import { imagePath } from "../../utility/imagePath";

function MiniCardList({ items, onPress }) {
  return (
    <FlatList
      data={items}
      horizontal
      keyExtractor={(item) =>
        item.ingredient ? item.ingredient._id.toString() : item._id.toString()
      }
      renderItem={({ item }) => (
        <MiniCard
          imageUrl={imagePath(
            item.ingredient ? item.ingredient.images[0].url : item.images[0].url
          )}
          missing={item.missing}
          onPress={() => onPress(item)}
          subtitle={item.ingredient ? item.measure : ""}
          thumbnailUrl={imagePath(
            item.ingredient
              ? item.ingredient.images[0].thumbnailUrl
              : item.images[0].thumbnailUrl
          )}
          title={item.ingredient ? item.ingredient.name : item.name}
        />
      )}
    />
  );
}

export default MiniCardList;
