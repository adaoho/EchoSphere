import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import AuthenticationStack from "./AuthenticationStack";
import UnAuthenticationStack from "./UnAuthenticationStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "../components/TabBar";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const StackHolder = () => {
  const { isSignedIn } = useContext(AuthContext);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackHolder;
