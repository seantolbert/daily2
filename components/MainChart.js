import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MainChart = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
        height: "20%",
        padding: 10,
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>
        minimalist line graph for the active daily tasks frequency over time
        with an adjustable scale relative to the highest active skill level
        https://www.youtube.com/watch?v=xeLdmn3se1I
      </Text>
    </View>
  );
};

export default MainChart;

const styles = StyleSheet.create({});
