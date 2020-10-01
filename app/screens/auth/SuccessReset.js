import React from "react";
import { View, StyleSheet } from "react-native";

import Link from "../../components/Link";
import routes from "../../navigation/routes";
import Text from "../../components/Text";

function SuccessReset({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Your password has been reset successfully!
      </Text>
      <Link
        onPress={() => navigation.navigate(routes.LOGIN)}
        text="Back to Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  instructions: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default SuccessReset;
