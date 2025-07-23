import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';
import UserProfile from '../../components/dashboard/UserProfile';
import DashboardTabs from '../../components/dashboard/DashboardTabs';
import PieChart from '../../components/charts/PieChart';
import EmotionLegend from '../../components/charts/EmotionLegend';
import RiwayatItem from '../components/dasboard/RiwayatItem';
import { emotionData, riwayatData, userProfile } from '../../data/mockData';

const { width, height } = Dimensions.get('window');

const ParentDashboardScreen = () => {
    const [activeTab, setActiveTab] = useState('realtime');

    const renderRealtimeContent = () => (
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.chartContainer}>
                <PieChart data={emotionData} />
            </View>
            <EmotionLegend data={emotionData} />
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

    return (
        <SafeAreaView style={styles.container}>
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
});

export default ParentDashboardScreen;
