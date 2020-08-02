import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import routes from "../../navigation/routes";
import Text from "../../components/Text";

function SuccessReset({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Your password has been reset successfully!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
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
  link: {
    color: colors.primary,
    textAlign: "center",
  },
});

export default SuccessReset;
