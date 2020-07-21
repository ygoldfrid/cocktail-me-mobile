import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

function AccountScreen() {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          IconComponent={
            <Icon name="account" backgroundColor={colors.medium} />
          }
          subTitle={user.email}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor={colors.secondary} />
        }
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
