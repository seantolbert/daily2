import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

const SettingsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Settings</Text>
      <Text>Users should be able to change the theme of the app from here</Text>
    </View>
  );
};

export default SettingsScreen;
