import React from "react";
import PostDetailScreen from "../screens/PostDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenCard from "../screens/HomeScreenCard";

const Stack = createNativeStackNavigator();

const PostDetailStack = () => {
  return (
    <Stack.Navigator initialRouteName="PostDetailScreen">
      <Stack.Screen
        name="PostDetailScreen"
        component={PostDetailScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default PostDetailStack;
