import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "./screens/DashboardScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import CalendarScreen from "./screens/CalendarScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const HomeStackGroup = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={BottomTabGroup} />
      <Stack.Screen
        name="taskDetails"
        component={TaskDetailsScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabGroup = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="dashboard" component={DashboardScreen} />
      <BottomTab.Screen name="calendar" component={CalendarScreen} />
      <Stack.Screen name="addtask" component={AddTaskScreen} />
      <BottomTab.Screen name="profile" component={ProfileScreen} />
      <BottomTab.Screen name="settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
};

export default StackNavigator;
