import React from "react";
import { AppLoading } from "expo";
import { ImageBackground, StyleSheet, Text } from "react-native";
import {
  useFonts,
  MeriendaOne_400Regular,
} from "@expo-google-fonts/merienda-one";

import Button from "../components/Button";
import colors from "../config/colors";
import Link from "../components/Link";
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
      <Text style={styles.by}>by Yaniv Goldfrid</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  button: {
    width: "75%",
  },
  by: {
    alignSelf: "center",
    bottom: 20,
    color: colors.primary,
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
  },
  link: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 5,
  },
  title: {
    color: colors.primary,
    fontFamily: "Merienda-One-Regular",
    fontSize: 45,
    marginBottom: 30,
  },
});

export default WelcomeScreen;
