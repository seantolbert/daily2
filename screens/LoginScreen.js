import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loginError } = useAuth();

  const handleSubmit = () => {
    login(email, password);

  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        placeholder="email"
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        value={password}
        placeholder="password"
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="submit" onPress={handleSubmit} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
