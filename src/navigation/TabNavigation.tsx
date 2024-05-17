import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import MyCourseScreen from "../screens/MyCourseScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: "Leaderboard"
        }}
      />
      <Tab.Screen
        name="mycourse"
        component={MyCourseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: "My Courses"
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: "Profile"
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
