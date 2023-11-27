import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

const DashboardScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Dashboard</Text>
      <Text>
        + button in the center of the bottom tabs for adding a task this will
        take you to the task creation tab
      </Text>
      <Text>
        This page will display the current day's schedule by default in
        chronological order
      </Text>
      <Text>
        each task will be selectable and marked complete from here OR open a
        modal to the task details page to mark complete there
      </Text>
      <Text>list of tasks for today completed and uncompleted</Text>
    </View>
  );
};

export default DashboardScreen;
