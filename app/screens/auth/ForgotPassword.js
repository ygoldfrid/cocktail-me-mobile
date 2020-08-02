import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import ActivityIndicator from "../../components/ActivityIndicator";
import authApi from "../../api/authService";
import routes from "../../navigation/routes";
import Screen from "../../components/Screen";
import Text from "../../components/Text";
import useApi from "../../hooks/useApi";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function ForgotPassword({ navigation }) {
  const {
    request: requestResetToken,
    data: errorMessage,
    loading,
    error,
  } = useApi(authApi.requestResetToken);

  const handleSubmit = async ({ email }) => {
    const response = await requestResetToken(email);
    if (response.ok) navigation.navigate(routes.VALIDATE_TOKEN, { email });
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Text style={styles.instructions}>
          Type in your email and we will send you the reset instructions
        </Text>
        <Form
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={errorMessage} visible={error} />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
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
  instructions: {
    marginBottom: 10,
  },
});

export default ForgotPassword;
