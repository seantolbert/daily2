import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const AuthStack = createNativeStackNavigator();

const AuthStackGroup = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="landing" component={LandingScreen} />
        <AuthStack.Screen name="login" component={LoginScreen} />
        <AuthStack.Screen name="signup" component={SignupScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackGroup;
