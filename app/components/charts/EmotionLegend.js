import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const EmotionLegend = ({ data }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <View style={styles.container}>
            {data.map((item, index) => {
                const percentage = ((item.value / total) * 100).toFixed(1);
                return (
                    <View key={index} style={styles.legendItem}>
                        <View style={[styles.colorBox, { backgroundColor: item.color }]} />
                        <Text style={styles.emotionText}>{item.name}</Text>
                        <Text style={styles.percentageText}>{percentage}%</Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        marginBottom: height * 0.01,
    },
    colorBox: {
        width: width * 0.04,
        height: width * 0.04,
        borderRadius: (width * 0.04) / 2,
        marginRight: width * 0.02,
    },
    emotionText: {
        flex: 1,
        fontSize: Math.min(width * 0.035, 14),
        color: colors.text,
        fontWeight: '500',
    },
    percentageText: {
        fontSize: Math.min(width * 0.03, 12),
        color: colors.darkGray,
    },
});

export default EmotionLegend;