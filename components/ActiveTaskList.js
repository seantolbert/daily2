import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SideTask from "./SideTask";

const ActiveTaskList = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Active Daily Tasks</Text>
      <View style={styles.taskList}>
        {data.map((item, idx) => {
          return <SideTask item={item} key={idx} />;
        })}
      </View>
    </View>
  );
};

export default ActiveTaskList;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    paddingHorizontal: 5,
    // borderWidth: 1,
    // borderColor: "#6d98de",
    borderRadius: 25,
  },
  sectionTitle: {
    textTransform: "uppercase",
    fontSize: 15,
    letterSpacing: 10,
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
  taskList: {
    flexWrap: "wrap",
    height: 185,
    paddingHorizontal: 5,
    gap: 5,
  },
});