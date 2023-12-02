import React from "react";
import PostDetailScreen from "../screens/PostDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenCard from "../screens/HomeScreenCard";
import PostDetailStack from "./PostDetailStack";
import AuthenticationStack from "./AuthenticationStack";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeDashboard">
      <Stack.Screen
        name="HomeDashboard"
        component={HomeScreenCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          title: "Comment",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
