import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { colors } from '../../styles/colors';
import UserProfile from '../../components/dashboard/UserProfile';
import DashboardTabs from '../../components/dashboard/DashboardTabs';
import PieChart from '../../components/charts/PieChart';
import EmotionLegend from '../../components/charts/EmotionLegend';
import RiwayatItem from '../../components/dashboard/RiwayatItem';
import StudentEmotionChart from '../../components/charts/StudentEmotionChart';
import { studentsData } from '../../data/teacherMockData';
import { emotionData } from '../../data/mockData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const StudentDetailScreen = () => {
    const router = useRouter();
    const { studentId } = useLocalSearchParams();
    const [activeTab, setActiveTab] = useState('realtime');

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

    // Convert current emotion data to pie chart format
    const getCurrentEmotionData = () => {
        const emotionColors = {
            'Marah': '#FF4757',
            'Jijik': '#8E44AD',
            'Takut': '#FF8C42',
            'Terkejut': '#54A0FF',
            'Sedih': '#FF6B9D',
            'Senang': '#2ED573',
        };

        // Simulate current emotion distribution
        return Object.keys(emotionColors).map(emotion => ({
            name: emotion,
            value: emotion === student.currentEmotion ? student.emotionPercentage :
                Math.floor(Math.random() * (100 - student.emotionPercentage) / 5),
            color: emotionColors[emotion]
        }));
    };

    const renderRealtimeContent = () => (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.sectionTitle}>Grafik emosi siswa</Text>
            <Text style={styles.sectionSubtitle}>Persentase siswa</Text>

            <View style={styles.chartContainer}>
                <PieChart data={getCurrentEmotionData()} />
            </View>
            <EmotionLegend data={getCurrentEmotionData()} />
        </ScrollView>
    );

    const renderRiwayatContent = () => (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.historyHeader}>
                <Text style={styles.sectionTitle}>Riwayat</Text>
            </View>

            <View style={styles.riwayatContainer}>
                {student.emotionHistory.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleHistoryItemPress(item)}
                    >
                        <RiwayatItem item={item} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );

    const handleHistoryItemPress = (historyItem) => {
        // Navigate to detailed chart view
        router.push(`/screens/teacher/StudentChartScreen?studentId=${student.id}&date=${historyItem.date}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header with back button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detail Siswa</Text>
                <View style={styles.placeholder} />
            </View>
            <UserProfile user={studentProfile} />
            <DashboardTabs activeTab={activeTab} onTabPress={setActiveTab} />
            {activeTab === 'realtime' ? renderRealtimeContent() : renderRiwayatContent()}
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
    chartContainer: {
        alignItems: 'center',
        paddingVertical: height * 0.03,
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
    historyHeader: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
    },
    riwayatContainer: {
        paddingVertical: height * 0.01,
    },
    errorText: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.error,
        marginTop: height * 0.3,
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
        width: 40, // Sama dengan lebar back button agar judul tetap di tengah
    },
});

export default StudentDetailScreen;