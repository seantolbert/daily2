import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppProvider } from "./context/DayContext";
import RootNavigation from "./navigation";

export default function App() {
  return (
    <>
      <RootNavigation />
      <StatusBar style="light" />
    </>
  );
}
