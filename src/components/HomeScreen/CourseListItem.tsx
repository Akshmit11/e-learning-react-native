import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface CourseListItemProps {
  item: any;
}

export default function CourseListItem({ item }: CourseListItemProps) {
  return (
    <View style={styles.courseListItem__container}>
      <Image
        source={{ uri: item?.banner?.url }}
        style={styles.courseListItem__bannerImage}
      />
      <View style={styles.courseListItem__infoContainer}>
        <Text style={styles.courseListItem__courseName}>{item.name}</Text>
        <View style={styles.courseListItem__descpContainer}>
          <View style={styles.courseListItem__description}>
            <Ionicons name="book-outline" size={24} color="black" />
            <Text style={styles.courseListItem__chapterNumber}>{item?.chapters?.length} Chapter</Text>
          </View>
          <View style={styles.courseListItem__description}>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text style={styles.courseListItem__time}>{item?.time}</Text>
          </View>
        </View>
        <Text style={styles.courseListItem__price}>{ item?.price == 0 ? 'Free' : 'Rs. '+item.price }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  courseListItem__container: {
    padding: 10,
    backgroundColor: Colors.LIGHT_PRIMARY,
    marginRight: 15,
    borderRadius: 15,
  },
  courseListItem__bannerImage: {
    width: 210,
    height: 120,
    borderRadius: 15,
  },
  courseListItem__infoContainer: {
    width: 210,
    padding: 7,
  },
  courseListItem__courseName: {
    fontFamily: "Outfit-Bold",
    fontSize: 17,
    flexWrap: "wrap",
  },
  courseListItem__descpContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseListItem__description: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  courseListItem__chapterNumber: {
    fontFamily: "Outfit-Regular"    
  },
  courseListItem__time: {
    fontFamily: "Outfit-Regular"    
  },
  courseListItem__price: {
    marginTop: 5,
    fontFamily: "Outfit-Medium"    
  }
});
