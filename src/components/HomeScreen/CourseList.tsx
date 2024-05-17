import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../services'
import SubHeading from '../common/SubHeading';
import CourseListItem from './CourseListItem';

interface CourseListProps {
    level: string;
}

export default function CourseList({ level }: CourseListProps) {

    const [courseList, setCourseList]: any = useState([]);

    useEffect(() => {
        getCourses();
    }, [])

    const getCourses = () => {
        getCourseList(level).then((res: any) => {
            console.log("RESPONSE---", res)
            setCourseList(res?.courses)
        })
    }

  return (
    <View style={styles.courseList__mainContainer}>
      <SubHeading title={level + ` Courses`} />
      <FlatList 
        data={courseList}
        key={courseList?.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CourseListItem item={item} key={item?.id} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    courseList__mainContainer: {
    },
    
})