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
        url="https://www.yanivgoldfrid.com"
      />
      <View style={styles.line} />
      <OpenUrlLink
        text="Privacy Policy"
        style={styles.externalLink}
        url="https://cocktailme.yanivgoldfrid.com/privacy"
      />
      <Text style={styles.attribution}>Attribution:</Text>
      <Text>
        Icons made by{" "}
        <OpenUrlLink
          text="Freepik"
          style={styles.externalLink}
          url="https://www.flaticon.com/authors/freepik"
        />{" "}
        from{" "}
        <OpenUrlLink
          text="www.flaticon.com"
          style={styles.externalLink}
          url="https://www.flaticon.com/"
        />
      </Text>
      <Text>
        Design vector created by pikisuperstar -{" "}
        <OpenUrlLink
          text="www.freepik.com"
          style={styles.externalLink}
          url="https://www.freepik.com/vectors/design"
        />
      </Text>
      <Text>
        Background photo created by yingyang -{" "}
        <OpenUrlLink
          text="www.freepik.com"
          style={styles.externalLink}
          url="https://www.freepik.com/photos/background"
        />
      </Text>
      <Text>
        People photo created by senivpetro -{" "}
        <OpenUrlLink
          text="www.freepik.com"
          style={styles.externalLink}
          url="https://www.freepik.com/photos/people"
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
    color: colors.dark,
    fontWeight: "normal",
    textDecorationLine: "underline",
  },
  line: {
    backgroundColor: colors.dark,
    height: 1,
    marginVertical: 20,
  },
  website: {
    alignSelf: "center",
  },
});

export default AboutScreen;
