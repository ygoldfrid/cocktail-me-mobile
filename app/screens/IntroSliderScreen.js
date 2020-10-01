import React from "react";
import { AppLoading } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";
import { View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts, Catamaran_100Thin } from "@expo-google-fonts/catamaran";

import colors from "../config/colors";
import routes from "../navigation/routes";
import storage from "../auth/storage";

function IntroSliderScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Catamaran-Thin": Catamaran_100Thin,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.bg }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={item.image}
          style={[styles.image, { width: item.width, height: item.height }]}
        />
      </View>
    );
  };

  const onDone = () => {
    storage.storeToken("seen", "introToken");
    navigation.reset({
      index: 0,
      routes: [{ name: routes.COCKTAILS_NAVIGATOR }],
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        showPrevButton
        showSkipButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    marginVertical: 32,
  },
  slide: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: colors.medium,
    fontFamily: "Catamaran-Thin",
    fontSize: 22,
    marginHorizontal: 40,
    textAlign: "center",
  },
});

const slides = [
  {
    key: 1,
    title: "Welcome to Cocktail Me!",
    image: require("../assets/mojito.png"),
    bg: "#ffce5c",
    height: 220,
    width: 220,
  },
  {
    key: 2,
    title: "Add ingredients to your bar",
    image: require("../assets/liquor.png"),
    bg: "#96d6d1",
    height: 220,
    width: 220,
  },
  {
    key: 3,
    title: "Find out which cocktails you can make",
    image: require("../assets/martini.png"),
    bg: "#ff9ca1",
    height: 220,
    width: 220,
  },
  {
    key: 4,
    title: "Enjoy with friends!",
    image: require("../assets/cheers.jpg"),
    bg: "#fde5cb",
    height: 250,
    width: 320,
  },
];

export default IntroSliderScreen;
