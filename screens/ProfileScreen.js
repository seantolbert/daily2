import { View, Text, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";
import { auth } from "../configs/firebase";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Profile</Text>
      <Button title="Log out" onPress={() => signOut(auth)} />
    </View>
  );
};

export default ProfileScreen;
