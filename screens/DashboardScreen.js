import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import SideTask from "../components/SideTask";
import ActiveTaskList from "../components/ActiveTaskList";
import DateHeader from "../components/DateHeader";
import Journal from "../components/Journal";
import { data } from "../data/tasks";
import MainChart from "../components/MainChart";
import { DayContext } from "../context/DayContext";
import { auth } from "../configs/firebase";

const DashboardScreen = () => {
  const [journalText, setJournalText] = useState("");

  const { state } = useContext(DayContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <DateHeader />
        <ActiveTaskList data={data} />
        <Journal journalText={journalText} onChange={setJournalText} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height,
    backgroundColor: "#171717",
    flex: 1,
    // marginBottom: 200,
  },
});

// Dashboard

//       + button in the center of the bottom tabs for adding a task this will
//       take you to the task creation tab

//       This page will display the current day's schedule by default in
//       chronological order

//       each task will be selectable and marked complete from here OR open a
//       modal to the task details page to mark complete there

//   list of tasks for today completed and uncompleted

// should be essentially the dayDetails
// page. journal entries specific to that day,
// a mood tracker would be cool too
//
