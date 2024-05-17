import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../components/HomeScreen/Header";
import Colors from "../constants/Colors";
import CourseList from "../components/HomeScreen/CourseList";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.home__mainContainer}>
      <ScrollView>
        <View style={styles.home__headerContainer}>
          <Header />
        </View>
        <View style={styles.home__courseListContainer}>
          <View style={styles.home__basicCourseListContainer}>
            <CourseList level={"Basic"} />
          </View>
          <View style={{ marginTop: 20 }} />
          <CourseList level={"Advance"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home__mainContainer: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  home__headerContainer: {
    backgroundColor: Colors.PRIMARY,
    height: 250,
  },
  home__courseListContainer: {
    padding: 20,
  },
  home__basicCourseListContainer: {
    marginTop: -90,
  },
});
