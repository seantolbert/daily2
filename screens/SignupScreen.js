import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signup, signupError } = useAuth();

  const handleSubmit = () => {
    signup(email, password, username);

    console.log(signupError);
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
      <TextInput
        value={username}
        placeholder="username"
        onChangeText={setUsername}
        style={styles.input}
      />

      <Button title="submit" onPress={handleSubmit} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
