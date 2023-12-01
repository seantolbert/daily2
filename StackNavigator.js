import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "./screens/DashboardScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import CalendarScreen from "./screens/CalendarScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const AuthStack = createNativeStackNavigator();
const AuthStackGroup = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="landing" component={Landing} />
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="signup" component={Signup} />
      <AuthStack.Screen name="main" component={HomeStackGroup} />
    </AuthStack.Navigator>
  );
};

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
      {/* <HomeStackGroup /> */}
      <AuthStackGroup />
    </NavigationContainer>
  );
};

export default StackNavigator;
