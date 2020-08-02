import React, { useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppTextInput({
  borderColor = colors.medium,
  icon,
  width = "100%",
  ...rest
}) {
  const textInput = useRef();

  return (
    <TouchableWithoutFeedback onPress={() => textInput.current.focus()}>
      <View style={[styles.container, { borderColor, width }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          ref={textInput}
          style={defaultStyles.text}
          {...rest}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
