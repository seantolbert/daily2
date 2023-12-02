import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "../screens/DashboardScreen";
import TaskDetailsScreen from "../screens/TaskDetailsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import AddTaskScreen from "../screens/AddTaskScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { AppProvider } from "../context/DayContext";

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

const MainStack = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <HomeStackGroup />
      </AppProvider>
    </NavigationContainer>
  );
};

export default MainStack;
