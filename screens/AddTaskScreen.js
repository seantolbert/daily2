import { View, Text } from "react-native";
import { useState } from "react";
import { globalStyles } from "../styles/globalStyles";

const AddTaskScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueTime, setDueTime] = useState("");

  const handleAddTask = () => {
    console.log(title);
    console.log(description);
    console.log(dueTime);
  };

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
      <Text>keyboard avoiding view</Text>
    </View>
  );
};

export default AddTaskScreen;
