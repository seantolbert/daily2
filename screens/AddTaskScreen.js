import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

const AddTaskScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>AddTask</Text>
      <Text>
        Should be a form with inputs for title, description, (maybe category)
        and due time of the task
      </Text>
      <Text>
        option to set reminderfor task upon creation (also available on task
        details screen)
      </Text>
    </View>
  );
};

export default AddTaskScreen;
