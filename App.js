import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { AppProvider } from "./context/DayContext";

export default function App() {
  return (
    <>
      <AppProvider>
        <StackNavigator />
        <StatusBar style="light" />
      </AppProvider>
    </>
  );
}
