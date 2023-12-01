import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const weekDays = [
  { label: "S", name: "Sunday" },
  { label: "M", name: "Monday" },
  { label: "T", name: "Tuesday" },
  { label: "W", name: "Wednesday" },
  { label: "T", name: "Thursday" },
  { label: "F", name: "Friday" },
  { label: "S", name: "Saturday" },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DateHeader = () => {
  const [dateParts, setDateParts] = useState({
    dayOfWeek: "",
    month: "",
    dayOfMonth: "",
    year: "",
  });

  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateDateTime = () => {
    updateDateParts();
  };

  const updateDateParts = () => {
    const d = new Date();
    const month = months[d.getMonth()];
    const dayOfWeek = weekDays[d.getDay().name];
    const year = d.getFullYear();
    const dayOfMonth = d.getDate();

    setDateParts({
      dayOfWeek,
      month,
      dayOfMonth,
      year,
    });
  };

  return (
    <View
      style={{
        height: 100,
        paddingHorizontal: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 10
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: 10,
            fontWeight: "bold",
          }}
        >
          {dateParts.month}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: 10,
            // fontWeight: "bold",
          }}
        >
          {dateParts.dayOfMonth}
        </Text>
        <Text style={{ color: "#8f8f8f" }}>{dateParts.year}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 5,
        }}
      >
        {weekDays.map((wd, idx) => (
          <View
            style={{
              padding: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderLeftColor: "white",
              borderTopColor: "white",
              alignItems: "center",
              backgroundColor: dateParts.dayOfWeek === wd.name && "white",
              flex: 1,
            }}
            key={idx}
          >
            <Text
              style={{
                // color: "white",
                color: dateParts.dayOfWeek === wd.name ? "black" : "white",

                fontWeight: "bold",
              }}
            >
              {wd.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DateHeader;

// const styles = StyleSheet.create({});
