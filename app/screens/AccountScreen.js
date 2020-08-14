import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import ListItem from "../components/ListItem";
import useAuth from "../auth/useAuth";

function AccountScreen({ navigation }) {
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
      <View style={styles.item}>
        <ListItem
          title="Favorites"
          IconComponent={<Icon name="star" backgroundColor={colors.mustard} />}
          onPress={() => navigation.navigate(routes.FAVORITES)}
        />
      </View>
      <View style={styles.item}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor={colors.red} />}
          onPress={() => logOut()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  item: {
    marginTop: 20,
  },
});

export default AccountScreen;
