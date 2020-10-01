import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import OpenUrlLink from "../components/OpenUrlLink";
import Text from "../components/Text";

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        Cocktail Me was created by Yaniv Goldfrid. Check out this and other
        projects on:
      </Text>
      <OpenUrlLink
        text="yanivgoldfrid.com"
        style={styles.website}
        touchable
        url="https://www.yanivgoldfrid.com"
      />
      <View style={styles.line} />
      <OpenUrlLink
        text="Privacy Policy"
        style={styles.externalLink}
        touchable
        url="https://cocktailme.yanivgoldfrid.com/privacy"
      />
      <Text style={styles.attribution}>Attribution:</Text>
      <Text>
        Icons made by{" "}
        <OpenUrlLink
          text="Freepik"
          style={styles.externalLink}
          url="https://www.flaticon.com/authors/freepik"
          color={colors.dark}
        />{" "}
        from{" "}
        <OpenUrlLink
          text="www.flaticon.com"
          style={styles.externalLink}
          url="https://www.flaticon.com/"
          color={colors.dark}
        />
      </Text>
      <Text>
        Design vector created by pikisuperstar -{" "}
        <OpenUrlLink
          text="www.freepik.com"
          style={styles.externalLink}
          url="https://www.freepik.com/vectors/design"
          color={colors.dark}
        />
      </Text>
      <Text>
        Glasses photo created by freepik -{" "}
        <OpenUrlLink
          text="www.freepik.com"
          style={styles.externalLink}
          url="https://www.freepik.com/photos/glasses"
          color={colors.dark}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  attribution: {
    fontSize: 18,
    marginTop: 20,
  },
  container: {
    padding: 15,
  },
  info: {
    marginVertical: 10,
  },
  externalLink: {
    textDecorationLine: "underline",
  },
  line: {
    backgroundColor: colors.dark,
    height: 1,
    marginVertical: 20,
  },
  website: {
    alignSelf: "center",
    fontSize: 19,
  },
});

export default AboutScreen;
