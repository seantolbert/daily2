import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DateHeader = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: 10,
            fontWeight: "bold",
          }}
        >
          November
        </Text>
        <Text style={{ color: "#8f8f8f" }}>2023</Text>
      </View>
    </View>
  );
};

export default DateHeader;

const styles = StyleSheet.create({});
