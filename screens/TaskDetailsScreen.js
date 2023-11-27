import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

const TaskDetailsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>TaskDetails</Text>
      <Text>you will be able to set reminders for tasks on this page</Text>
      <Text>users can edit and delete tasks on this page as well</Text>
      <Text>display all the task information</Text>
    </View>
  );
};

export default TaskDetailsScreen;
