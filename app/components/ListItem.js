import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import Text from "./Text";

function ListItem({
  title,
  subtitle,
  imageUrl,
  thumbnailUrl,
  IconComponent,
  onDelete,
  onPress,
}) {
  return (
    <TouchableHighlight underlayColor={colors.medium} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {imageUrl && (
          <Image
            style={styles.image}
            tint="light"
            preview={{ uri: thumbnailUrl }}
            uri={imageUrl}
          />
        )}
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {subtitle && (
            <Text numberOfLines={2} style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
        {onDelete && (
          <TouchableOpacity onPress={onDelete}>
            <View style={styles.trash}>
              <MaterialCommunityIcons
                color={colors.medium}
                name="trash-can-outline"
                size={25}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontSize: 18,
  },
  trash: {
    padding: 15,
  },
});

export default ListItem;
