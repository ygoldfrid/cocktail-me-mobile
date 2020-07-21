import React from "react";
import { View, StyleSheet } from "react-native";

import useAuth from "../auth/useAuth";
import AppText from "../components/Text";

function BarScreen(props) {
  const { user } = useAuth();

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default BarScreen;
