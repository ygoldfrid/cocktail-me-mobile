import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import useAuth from "../auth/useAuth";

function AccountScreen() {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <ListItem
          title={user.name}
          IconComponent={
            <Icon name="account" backgroundColor={colors.medium} />
          }
          subtitle={user.email}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor={colors.secondary} />
        }
        onPress={() => logOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  item: {
    marginVertical: 20,
  },
});

export default AccountScreen;
