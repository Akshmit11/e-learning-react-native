import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import MyCourseScreen from '../screens/MyCourseScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="leaderboard" component={LeaderboardScreen} />
        <Tab.Screen name="mycourse" component={MyCourseScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})