import { StyleSheet, Text, View } from "react-native";
import React from "react";

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const weekDays = ["0", "S", "M", "T", "W", "T", "F", "S", "0"];

const DateHeader = () => {
  return (
    <View style={{ gap: 20, paddingBottom: 40 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: 10,
            fontWeight: "bold",
            // textAlign: 'right'
          }}
        >
          November
        </Text>
        {/* <Text style={{ color: "white" }}>
          1<Text style={{ fontSize: 10 }}>st</Text>
        </Text> */}
        <Text style={{ color: "#8f8f8f" }}>2023</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {weekDays.map((wd) => (
          <View style={{padding: 5}}>
            <Text style={{ color: "white" }}>{wd}</Text>
          </View>
        ))}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {days.map((day) => (
          <View
            style={{ borderColor: "white", padding: 5}}
          >
            <Text style={{ color: "white" }}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DateHeader;

const styles = StyleSheet.create({});
