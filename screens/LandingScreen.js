import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate("login")}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigate("signup")}>
        <Text style={styles.text}>signup</Text>
      </Pressable>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
  },
});
