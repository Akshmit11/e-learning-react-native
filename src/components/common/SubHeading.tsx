import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

interface SubHeadingProps {
  title: string;
}

export default function SubHeading({ title }: SubHeadingProps) {
  return (
    <View>
      <Text style={[styles.courseList__heading, {color: title == "Basic Courses" ? Colors.WHITE : Colors.BLACK}]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  courseList__heading: {
    fontFamily: "Outfit-Bold",
    fontSize: 24,
},
})