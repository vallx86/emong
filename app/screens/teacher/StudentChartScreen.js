import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { colors } from '../../styles/colors';
import UserProfile from '../../components/dashboard/UserProfile';
import StudentEmotionChart from '../../components/charts/StudentEmotionChart';
import EmotionLegend from '../../components/charts/EmotionLegend';
import { studentsData } from '../../data/teacherMockData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const StudentChartScreen = () => {
    const router = useRouter();
    const { studentId, date } = useLocalSearchParams();

    // Find student data
    const student = studentsData.find(s => s.id === parseInt(studentId));

    if (!student) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Student not found</Text>
            </SafeAreaView>
        );
    }

    // Create user profile for this student
    const studentProfile = {
        name: student.name,
        id: student.nidn,
        avatar: student.avatar
    };

    // Legend data for emotions
    const emotionLegendData = [
        { name: 'Marah', value: 1, color: '#FF4757' },
        { name: 'Takut', value: 1, color: '#FF8C42' },
        { name: 'Sedih', value: 1, color: '#FF6B9D' },
        { name: 'Jijik', value: 1, color: '#8E44AD' },
        { name: 'Terkejut', value: 1, color: '#54A0FF' },
        { name: 'Senang', value: 1, color: '#2ED573' },
    ];

    const handleBackPress = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with back button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Grafik Emosi Harian</Text>
                <View style={styles.placeholder} />
            </View>

            <UserProfile user={studentProfile} />

            <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.dateTitle}>{date}</Text>
                <Text style={styles.sectionTitle}>Grafik emosi siswa</Text>
                <Text style={styles.sectionSubtitle}>Persentase siswa</Text>

                {/* Time-based emotion chart */}
                <View style={styles.chartContainer}>
                    <StudentEmotionChart data={student.todayEmotionData} />
                </View>

                {/* Legend */}
                <View style={styles.legendContainer}>
                    <EmotionLegend data={emotionLegendData} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: Math.min(width * 0.045, 18),
        fontWeight: 'bold',
        color: colors.text,
    },
    placeholder: {
        width: 40, // Same width as back button for centering
    },
    contentContainer: {
        flex: 1,
        paddingBottom: height * 0.02,
    },
    dateTitle: {
        fontSize: Math.min(width * 0.04, 16),
        fontWeight: '600',
        color: colors.text,
        textAlign: 'center',
        marginVertical: height * 0.015,
        backgroundColor: colors.white,
        marginHorizontal: width * 0.05,
        paddingVertical: height * 0.01,
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: Math.min(width * 0.045, 18),
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginTop: height * 0.02,
    },
    sectionSubtitle: {
        fontSize: Math.min(width * 0.035, 14),
        color: colors.darkGray,
        textAlign: 'center',
        marginBottom: height * 0.01,
    },
    chartContainer: {
        backgroundColor: colors.white,
        marginHorizontal: width * 0.05,
        marginTop: height * 0.02,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        paddingVertical: height * 0.02,
    },
    legendContainer: {
        backgroundColor: colors.white,
        marginHorizontal: width * 0.05,
        marginTop: height * 0.02,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    errorText: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.error,
        marginTop: height * 0.3,
    },
});

export default StudentChartScreen;