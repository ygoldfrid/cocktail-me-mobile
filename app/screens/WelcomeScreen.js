import React from "react";
import { AppLoading } from "expo";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Catamaran_100Thin,
  Catamaran_500Medium,
} from "@expo-google-fonts/catamaran";

import Button from "../components/Button";
import colors from "../config/colors";
import Link from "../components/Link";
import OpenUrlLink from "../components/OpenUrlLink";
import routes from "../navigation/routes";
import { TouchableOpacity } from "react-native-gesture-handler";

function WelcomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Catamaran-Thin": Catamaran_100Thin,
    "Catamaran-Medium": Catamaran_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={1}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>
          Cocktail<Text style={{ fontFamily: "Catamaran-Medium" }}>Me</Text>
        </Text>

        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
          style={styles.button}
          textStyle={{ fontFamily: "Catamaran-Medium", fontWeight: "normal" }}
        />
        <Link
          onPress={() => navigation.navigate(routes.REGISTER)}
          text="or Sign Up"
          style={styles.link}
          color="white"
        />
      </View>
      <OpenUrlLink
        color={colors.white}
        style={styles.by}
        text="by Yaniv Goldfrid"
        touchable
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
    backgroundColor: "#72d47e99",
    width: "75%",
    marginVertical: 10,
    paddingBottom: 14,
  },
  by: {
    alignSelf: "center",
    bottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 0,
  },
  logo: {
    left: 15,
    height: 160,
    width: 160,
    marginBottom: -10,
  },
  title: {
    color: colors.white,
    fontFamily: "Catamaran-Thin",
    fontSize: 45,
    marginBottom: 15,
  },
});

export default WelcomeScreen;
