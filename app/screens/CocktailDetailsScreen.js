import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import MiniCardList from "../components/Cards/MiniCardList";
import routes from "../navigation/routes";
import Text from "../components/Text";
import Switch from "../components/Switch";
import useBar from "../hooks/useBar";
import { imagePath } from "../utility/imagePath";

function CocktailDetailsScreen({ navigation, route }) {
  const { bar, getMissingLength, replaceComponents, useMyBar } = useBar();

  const cocktail = route.params;
  const [missingCount, setMissingCount] = useState(0);
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    const barIds = bar.map((ing) => ing._id);

    const components = useMyBar
      ? replaceComponents(cocktail, barIds)
      : cocktail.components;

    setIngredients(components);
    setMissingCount(getMissingLength(components, barIds));
  }, [bar, useMyBar]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: imagePath(cocktail.images[0].thumbnailUrl) }}
        uri={imagePath(cocktail.images[0].url)}
      />
      <View style={styles.details}>
        <View style={styles.ingredientTitles}>
          <Text style={styles.title}>Ingredients</Text>
          <Text style={styles.missing}>
            {missingCount === 0
              ? "(you can make this!)"
              : `(missing ${missingCount} from My Bar)`}
          </Text>
        </View>
        <Switch label="Replace ingredients with My Bar" />
        <MiniCardList
          ingredient
          items={ingredients}
          onPress={(item) =>
            navigation.push(routes.INGREDIENT_DETAILS, item.ingredient)
          }
        />
        <Text style={styles.title}>Preparation:</Text>
        {cocktail.preparation.map((step, index) => (
          <Text key={index} style={styles.preparation}>{`${
            index + 1
          }. ${step}`}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  details: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 5,
  },
  ingredientTitles: {
    flexDirection: "row",
    alignItems: "center",
  },
  missing: {
    fontSize: 15,
  },
  preparation: {
    color: colors.dark,
  },
  title: {
    color: colors.primary,
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 10,
    marginRight: 5,
  },
});

export default CocktailDetailsScreen;
