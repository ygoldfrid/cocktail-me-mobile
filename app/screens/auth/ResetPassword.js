import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import ActivityIndicator from "../../components/ActivityIndicator";
import authApi from "../../api/authService";
import routes from "../../navigation/routes";
import Screen from "../../components/Screen";
import useApi from "../../hooks/useApi";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";

const validationSchema = Yup.object().shape({
  password: Yup.string().min(5).required().label("New Password"),
  passwordConfirmation: Yup.string()
    .min(5)
    .required()
    .label("Password Confirmation")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function ResetPassword({ navigation, route }) {
  const email = route.params.email;
  const token = route.params.token;

  const { request: resetPassword, data: errorMessage, loading, error } = useApi(
    authApi.resetPassword
  );

  const handleSubmit = async ({ password }) => {
    const response = await resetPassword(email, token, password);
    if (response.ok) navigation.navigate(routes.SUCCESS_RESET);
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ token: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={errorMessage} visible={error} />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="New Password"
            secureTextEntry
            textContentType="password"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Send" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ResetPassword;
