import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import MiniCardList from "../components/Cards/MiniCardList";
import routes from "../navigation/routes";
import Text from "../components/Text";
import Star from "../components/Star";
import Switch from "../components/Switch";
import useAuth from "../auth/useAuth";
import useBar from "../hooks/useBar";
import { imagePath } from "../utility/imagePath";

function CocktailDetailsScreen({ navigation, route }) {
  const { bar, getMissingCount, replaceComponents, useMyBar } = useBar();
  const { favorites } = useAuth();

  const cocktail = route.params;

  const [areThereAlternatives, setAreThereAlternatives] = useState(false);
  const [components, setComponents] = useState();
  const [missingCount, setMissingCount] = useState(0);

  useEffect(() => {
    const barIds = bar.map((ing) => ing._id);

    const replaced = replaceComponents(cocktail, barIds);

    const loadedComponents = useMyBar
      ? replaced.replacedComponents
      : cocktail.components;

    setAreThereAlternatives(replaced.areThereAlternatives);
    setComponents(loadedComponents);
    setMissingCount(getMissingCount(loadedComponents, barIds));
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
        <View style={styles.titleContainer}>
          <View style={styles.titleText}>
            <Text style={styles.title}>Ingredients</Text>
            <Text style={styles.missing}>
              {missingCount === 0
                ? "(you can make this!)"
                : `(missing ${missingCount} from My Bar)`}
            </Text>
          </View>
          <Star cocktail={cocktail} />
        </View>
        <Switch
          label="Replace ingredients with My Bar"
          hide={!areThereAlternatives}
        />
        <MiniCardList
          items={components}
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
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 5,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    alignItems: "center",
    flexDirection: "row",
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
