import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

const CalendarScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Calendar</Text>
      <Text>
        view other tasks for previous and future days, whatever day you select
      </Text>
      <Text>
        https://blog.logrocket.com/create-customizable-shareable-calendars-react-native/
      </Text>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({});
