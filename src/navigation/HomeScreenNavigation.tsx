import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Home'
            component={HomeScreen}
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})