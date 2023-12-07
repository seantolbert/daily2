import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

const AddTaskScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueTime, setDueTime] = useState("");

  const { navigate } = useNavigation();

  const handleAddTask = () => {
    console.log(title);
    console.log(description);
    console.log(dueTime);
    navigate("allTasks");
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="what should it be called?"
          placeholderTextColor="#fff"
        />
      </View>
      <View>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={[styles.input, {height: 100}]}
          placeholder="how would youn describe it?"
          placeholderTextColor="#fff"
          multiline
        />
      </View>
      <View>
        <Pressable onPress={handleAddTask} style={styles.submitButton}>
          <Text style={{ color: "#fff" }}>create</Text>
        </Pressable>
      </View>

      {/* <Text>AddTask</Text>
      <Text>
        Should be a form with inputs for title, description, (maybe category)
        and due time of the task
      </Text>
      <Text>
        option to set reminderfor task upon creation (also available on task
        details screen)
      </Text>
      <Text>keyboard avoiding view</Text> */}
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#474747",
    gap: 10,
  },
  input: {
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  submitButton: {
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    borderRadius: 10,
  },
});
