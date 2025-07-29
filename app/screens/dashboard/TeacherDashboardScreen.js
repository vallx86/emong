import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../../styles/colors';
import UserProfile from '../../components/dashboard/UserProfile';
import StudentCard from '../../components/teacher/StudentCard';
import { studentsData, teacherProfile } from '../../data/teacherMockData';
import Button from '../../components/common/Button';

const { width, height } = Dimensions.get('window');

const TeacherDashboardScreen = () => {
    const router = useRouter();

    const handleStudentPress = (student) => {
        console.log('Navigating to student detail:', student.name);
        // Navigate to student detail screen with student data
        router.push(`/screens/teacher/StudentDetailScreen?studentId=${student.id}`);
    };

    const handleLogout = () => {
        router.replace('/');
    };

    const renderRealtimeContent = () => (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.classTitle}>Kelas 10A</Text>
            <View style={styles.studentsGrid}>
                {studentsData.map((student) => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        onPress={() => handleStudentPress(student)}
                    />
                ))}
            </View>
        </ScrollView>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.dashboardTitle}>Dashboard Guru</Text>
            <UserProfile user={teacherProfile} />
            {renderRealtimeContent()}
            <Button
                title="Logout"
                onPress={handleLogout}
                style={{
                    backgroundColor: colors.error,
                    paddingVertical: height * 0.008,
                    paddingHorizontal: width * 0.03,
                    borderRadius: 6,
                    alignSelf: 'center',
                    marginTop: 16,
                    marginBottom: 8,
                }}
                textStyle={{
                    fontSize: Math.min(width * 0.032, 13),
                    color: colors.white,
                    fontWeight: 'bold',
                    letterSpacing: 0.5,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    contentContainer: {
        flex: 1,
        paddingBottom: height * 0.02,
    },
    classTitle: {
        fontSize: Math.min(width * 0.05, 20),
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginVertical: height * 0.02,
    },
    studentsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: width * 0.05,
    },
    dashboardTitle: {
        fontSize: Math.min(width * 0.055, 22),
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginTop: height * 0.02,
        marginBottom: 4,
    },
});

export default TeacherDashboardScreen;