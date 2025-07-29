import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';
import UserProfile from '../../components/dashboard/UserProfile';
import DashboardTabs from '../../components/dashboard/DashboardTabs';
import PieChart from '../../components/charts/PieChart';
import EmotionLegend from '../../components/charts/EmotionLegend';
import RiwayatItem from '../../components/dashboard/RiwayatItem';
import { emotionData, riwayatData, userProfile } from '../../data/mockData';
import { useRouter } from 'expo-router';
import Button from '../../components/common/Button';

const { width, height } = Dimensions.get('window');

const ParentDashboardScreen = () => {
    const [activeTab, setActiveTab] = useState('realtime');
    const router = useRouter();

    const renderRealtimeContent = () => (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.chartContainer}>
                <PieChart data={emotionData} />
            </View>
            <EmotionLegend data={emotionData} />
            <Button
                title="Logout"
                onPress={handleLogout}
                style={styles.logoutButton}
                textStyle={styles.logoutButtonText}
            />
        </ScrollView>
    );

    const renderRiwayatContent = () => (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.riwayatContainer}>
                {riwayatData.map((item) => (
                    <RiwayatItem key={item.id} item={item} />
                ))}
            </View>
        </ScrollView>
    );

    const handleLogout = () => {
        router.replace('/');
    };

    // Tambahkan console.log untuk debugging
    console.log('ParentDashboardScreen rendered');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.debugText}>Dashboard Loaded Successfully!</Text>
            <UserProfile user={userProfile} />
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
    debugText: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: colors.success,
        color: colors.white,
        fontWeight: 'bold',
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
    riwayatContainer: {
        paddingVertical: height * 0.02,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        marginBottom: 8,
    },
    logoutButton: {
        backgroundColor: colors.error,
        paddingVertical: height * 0.008,
        paddingHorizontal: width * 0.03,
        borderRadius: 6,
        minWidth: undefined,
        width: undefined,
        marginVertical: 0,
        marginLeft: 10,
        alignSelf: 'center',
    },
    logoutButtonText: {
        fontSize: Math.min(width * 0.032, 13),
        color: colors.white,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});

export default ParentDashboardScreen;