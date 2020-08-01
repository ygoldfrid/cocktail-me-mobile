import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";
import useAuth from "../auth/useAuth";

function Star({ cocktail }) {
  const { favorites, addOrRemoveFavorites } = useAuth();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    addOrRemoveFavorites(cocktail._id, isFavorite);
  };

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav._id === cocktail._id));
  }, [favorites]);

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <FontAwesome
        name={isFavorite ? "star" : "star-o"}
        size={26}
        color={isFavorite ? colors.mustard : colors.dark}
      />
    </TouchableWithoutFeedback>
  );
}

export default Star;
