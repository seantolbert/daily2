import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";
import SideTask from "../components/SideTask";

const DashboardScreen = () => {
  const data = [
    {
      emoji: "💪",
      title: "exercise",
      description:
        "at least 30 minutes of exercise, the idea is just to get sweaty",
      active: true,
      level: 100,
      category: "daily",
      hp: 90,
    },
    {
      emoji: "🤓",
      title: "Code Course",
      description:
        "at least 1 hour of any coding course. I know yo0u hate it but get used to listening to monotonous speech.",
      active: true,
      level: 100,
      category: "daily",
      hp: 70,
    },
    {
      emoji: "✨",
      title: "Clean Room",
      description: "make your bed and makle sure no clothes are left out.",
      active: true,
      level: 100,
      category: "daily",
      hp: 85,
    },
    {
      emoji: "🌊",
      title: "Hydrate",
      description:
        "Drink some water!! You should fill and finish that blure bottle every day and take a hydration thing if you went drinking.",
      active: true,
      level: 100,
      category: "daily",
      hp: 85,
    },
    {
      emoji: "💬",
      title: "Chat",
      description:
        "Talk to someone, it will be therapudic and even if you are not feeling great, you will feel better after.",
      active: true,
      level: 100,
      category: "daily",
      hp: 85,
    },
    {
      emoji: "✍️",
      title: "Journal",
      description:
        "Nobody can accuse you of overthinkingif you are writing your thoughts out daily.",
      active: true,
      level: 100,
      category: "daily",
      hp: 85,
    },
  ];

  const mainTask = data[0];
  const sideTasks = data.shift();

  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <View>
        {data.map((item, idx) => {
          return <SideTask item={item} key={idx} />;
        })}
      </View>

      {/* <Text>Dashboard</Text>
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
      <Text>list of tasks for today completed and uncompleted</Text> */}
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#171717",
    gap: 5,
  },
  taskBox: {
    flexDirection: "row",
    gap: 10,
    // padding: 10,
    borderColor: "#6d98de",
    borderWidth: 1,
    borderRadius: 25,
    width: "60%",
  },
});
