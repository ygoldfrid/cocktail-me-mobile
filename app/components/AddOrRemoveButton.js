import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import Text from "./Text";
import useBar from "../hooks/useBar";

function AddOrRemoveButton({ ingredient }) {
  const { bar, addOrRemoveItem } = useBar();

  const [isInMyBar, setIsInMyBar] = useState(false);

  const handleClick = () => {
    setIsInMyBar(!isInMyBar);
    addOrRemoveItem(ingredient, isInMyBar);
  };

  useEffect(() => {
    setIsInMyBar(bar.some((ing) => ing._id === ingredient._id));
  }, [bar]);

  return (
    <TouchableOpacity onPress={handleClick}>
      {isInMyBar ? (
        <View style={[styles.button, styles.removeButton]}>
          <Text style={[styles.buttonText, styles.removeButtonText]}>
            Remove
          </Text>
        </View>
      ) : (
        <View style={[styles.button, styles.addButton]}>
          <Text style={[styles.buttonText, styles.addButtonText]}>
            Add to My Bar
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  addButtonText: {
    color: colors.primary,
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    justifyContent: "center",
    margin: 5,
    padding: 4,
    width: 95,
  },
  buttonText: {
    fontSize: 12,
  },
  removeButton: {
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
  removeButtonText: {
    color: colors.white,
  },
});

export default AddOrRemoveButton;
