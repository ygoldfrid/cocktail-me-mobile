import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";
import Button from "./Button";

function ServerErrorMessage({ error, onPress, setError }) {
  if (!error) return null;

  const handlePress = () => {
    setError(false);
    onPress();
  };
  return (
    <>
      <View style={styles.container}>
        <Text>Couldn't reach the server</Text>
        <Button title="Retry" onPress={handlePress} />
      </View>
      <View style={styles.opac} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    height: "100%",
    justifyContent: "center",
    padding: 20,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  opac: {
    alignSelf: "center",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.5,
    position: "absolute",
    width: "100%",
  },
});

export default ServerErrorMessage;
