import React from "react";
import {
  View,
  StyleSheet,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "../components/Text";
import useBar from "../hooks/useBar";

function AppSwitch({ label }) {
  const { bar, setUseMyBar, useMyBar } = useBar();
  if (bar.length < 3) return null;

  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <Switch value={useMyBar} onValueChange={setUseMyBar} />
      </View>
      <TouchableWithoutFeedback onPress={() => setUseMyBar(!useMyBar)}>
        <Text>{label}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
  },
});

export default AppSwitch;
