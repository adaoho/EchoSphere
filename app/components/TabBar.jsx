import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenCard from "../screens/HomeScreenCard";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import PostCreateScreen from "../screens/PostCreateScreen";
import { BlurView } from "expo-blur";
import HomeStack from "../stacks/HomeStack";
import MessageScreen from "../screens/MessageScreen";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        showLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#00000080",
          paddingHorizontal: 30,
        },
        tabBarLabelStyle: { fontSize: 10, color: "white" },
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={20}
            style={{ width: "100%", height: "100%" }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} color="white" size={24} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "ios-people" : "ios-people-outline";
            return <Ionicons name={iconName} color="white" size={24} />;
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Post"
        component={PostCreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "add-circle" : "add-circle-outline";
            return <Ionicons name={iconName} color="white" size={50} />;
          },
          tabBarIconStyle: { top: 4 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "mail-open" : "mail-open-outline";
            return <Ionicons name={iconName} color="white" size={26} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} color="white" size={24} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
