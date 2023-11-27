import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DashboardScreen from "./screens/DashboardScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import CalendarScreen from "./screens/CalendarScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";
import ProfileScreen from "./screens/profileTab/ProfileScreen";
import SettingsScreen from "./screens/profileTab/SettingsScreen";

const Stack = createNativeStackNavigator();

const HomeStackGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profilescreens" component={ProfileTabGroup} />
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen name="addtask" component={AddTaskScreen} />
      <Stack.Screen name="calendar" component={CalendarScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
    </Stack.Navigator>
  );
};

const ProfileTopTab = createMaterialTopTabNavigator();

const ProfileTabGroup = () => {
  return (
    <ProfileTopTab.Navigator>
      <ProfileTopTab.Screen name="profile" component={ProfileScreen} />
      <ProfileTopTab.Screen name="settings" component={SettingsScreen} />
    </ProfileTopTab.Navigator>
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
