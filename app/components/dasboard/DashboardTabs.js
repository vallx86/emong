import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const DashboardTabs = ({ activeTab, onTabPress }) => {
    const tabs = [
        { key: 'realtime', label: 'Real-Time' },
        { key: 'riwayat', label: 'Riwayat' },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.key}
                    style={[
                        styles.tab,
                        activeTab === tab.key && styles.activeTab,
                    ]}
                    onPress={() => onTabPress(tab.key)}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === tab.key && styles.activeTabText,
                        ]}
                    >
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.gray,
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.01,
        borderRadius: 8,
        padding: 4,
    },
    tab: {
        flex: 1,
        paddingVertical: height * 0.015,
        alignItems: 'center',
        borderRadius: 6,
    },
    activeTab: {
        backgroundColor: colors.primary,
    },
    tabText: {
        fontSize: Math.min(width * 0.04, 16),
        color: colors.darkGray,
        fontWeight: '500',
    },
    activeTabText: {
        color: colors.white,
        fontWeight: '600',
    },
});

export default DashboardTabs;
