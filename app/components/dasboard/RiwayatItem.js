import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const RiwayatItem = ({ item }) => {
    const getEmotionColor = (emotion) => {
        const emotionColors = {
            'Marah': '#FF4757',
            'Jijik': '#8E44AD',
            'Takut': '#FF8C42',
            'Terkejut': '#54A0FF',
            'Sedih': '#FF6B9D',
            'Senang': '#2ED573',
        };
        return emotionColors[emotion] || colors.primary;
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                <Text style={styles.dateText}>{item.date}</Text>
                <View style={styles.emotionContainer}>
                    <View
                        style={[
                            styles.emotionDot,
                            { backgroundColor: getEmotionColor(item.emotion) }
                        ]}
                    />
                    <Text style={styles.emotionText}>Dominan: {item.emotion}</Text>
                </View>
            </View>
            <View style={styles.rightContent}>
                <Text style={styles.percentageText}>{item.percentage}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.015,
        backgroundColor: colors.white,
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.005,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
    },
    leftContent: {
        flex: 1,
    },
    dateText: {
        fontSize: Math.min(width * 0.035, 14),
        color: colors.text,
        fontWeight: '500',
        marginBottom: 4,
    },
    emotionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emotionDot: {
        width: width * 0.025,
        height: width * 0.025,
        borderRadius: (width * 0.025) / 2,
        marginRight: width * 0.02,
    },
    emotionText: {
        fontSize: Math.min(width * 0.03, 12),
        color: colors.darkGray,
    },
    rightContent: {
        alignItems: 'flex-end',
    },
    percentageText: {
        fontSize: Math.min(width * 0.04, 16),
        color: colors.primary,
        fontWeight: 'bold',
    },
});

export default RiwayatItem;