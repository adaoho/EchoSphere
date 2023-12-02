import React from "react";
import SearchScreen from "../screens/SearchScreen";
import PostCreateScreen from "../screens/PostCreateScreen";
import TabBar from "../components/TabBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostDetailStack from "./PostDetailStack";
import PostDetailScreen from "../screens/PostDetailScreen";

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={TabBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostCreate"
        component={PostCreateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
