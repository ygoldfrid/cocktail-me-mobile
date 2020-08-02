import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import ActivityIndicator from "../../components/ActivityIndicator";
import authApi from "../../api/authService";
import colors from "../../config/colors";
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
  token: Yup.string().required().label("Code"),
});

function ValidateToken({ navigation, route }) {
  const email = route.params.email;

  const {
    request: validateToken,
    data: errorMessage,
    loading: loadingValidation,
    error,
  } = useApi(authApi.validateToken);

  const { request: requestResetToken, loading: loadingEmail } = useApi(
    authApi.requestResetToken
  );

  const handleSubmit = async ({ token }) => {
    const response = await validateToken(email, token);
    if (response.ok)
      navigation.navigate(routes.RESET_PASSWORD, { email, token });
  };

  const resendEmail = async () => {
    await requestResetToken(email);
  };

  return (
    <>
      <ActivityIndicator visible={loadingValidation || loadingEmail} />
      <Screen style={styles.container}>
        <Text style={styles.instructions}>
          Type in the code you received in your email
        </Text>
        <Form
          initialValues={{ token: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={errorMessage} visible={error} />
          <FormField
            autoCapitalize="characters"
            autoCorrect={false}
            name="token"
            placeholder="Code"
          />
          <SubmitButton title="Send" />
        </Form>
        <Text style={styles.bottomInstructions}>Didn't get the code?</Text>
        <TouchableOpacity onPress={resendEmail}>
          <Text style={styles.link}>Resend email</Text>
        </TouchableOpacity>
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
  bottomInstructions: {
    marginVertical: 5,
    textAlign: "center",
  },
  link: {
    color: colors.primary,
    textAlign: "center",
  },
});

export default ValidateToken;
