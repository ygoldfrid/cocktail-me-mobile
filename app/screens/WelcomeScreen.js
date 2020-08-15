import React from "react";
import { AppLoading } from "expo";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  MeriendaOne_400Regular,
} from "@expo-google-fonts/merienda-one";

import Button from "../components/Button";
import colors from "../config/colors";
import Link from "../components/Link";
import OpenUrlLink from "../components/OpenUrlLink";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Merienda-One": require("../assets/fonts/MeriendaOne-Regular.ttf"),
    "Merienda-One-Regular": MeriendaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/wood.jpg")}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>Cocktail Me!</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
          style={styles.button}
        />
        <Link
          onPress={() => navigation.navigate(routes.REGISTER)}
          text="or Sign Up"
          style={styles.link}
        />
      </View>
      <OpenUrlLink
        text="by Yaniv Goldfrid"
        style={styles.by}
        url="https://www.yanivgoldfrid.com"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  button: {
    width: "75%",
  },
  by: {
    alignSelf: "center",
    bottom: 20,
    position: "absolute",
  },
  container: {
    top: 70,
    alignItems: "center",
  },
  link: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 5,
  },
  logo: {
    left: 15,
    height: 180,
    marginBottom: 15,
    width: 180,
  },
  title: {
    color: colors.primary,
    fontFamily: "Merienda-One-Regular",
    fontSize: 45,
    marginBottom: 10,
  },
});

export default WelcomeScreen;
