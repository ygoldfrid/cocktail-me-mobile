import * as React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function IconWithBadge({ badgeCount, color, name, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <MaterialCommunityIcons name={name} color={color} size={size} />
      {badgeCount > 0 && (
        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.mustard,
            borderRadius: 8,
            height: 16,
            justifyContent: "center",
            right: -10,
            top: -4,
            position: "absolute",
            width: 16,
          }}
        >
          <Text
            style={{ color: colors.dark, fontSize: 10, fontWeight: "bold" }}
          >
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

export default IconWithBadge;
