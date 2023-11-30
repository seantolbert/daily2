import { StyleSheet, Text, View } from "react-native";
import React from "react";

const days = [1, 2, 3, 4, 5, 6, 7];
const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

const DateHeader = () => {
  return (
    <View style={{ gap: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 5,
          flex: 1,
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

      <View style={{ flexDirection: "row", gap: 20, padding: 20 }}>
        {weekDays.map((wd, idx) => (
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderLeftColor: "white",
              borderTopColor: "white",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: 10,
            }}
            key={idx}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>{wd}</Text>
            <Text style={{ color: "white" }}>{days[idx]}</Text>
          </View>
        ))}
      </View>

      {/* <View style={{ flexDirection: "row", gap: 20 }}>
        {days.map((day) => (
          <View style={{ padding: 5 }}>
            <Text style={{ color: "white" }}>{day}</Text>
          </View>
        ))}
      </View> */}
    </View>
  );
};

export default DateHeader;

const styles = StyleSheet.create({});
