import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const StudentCard = ({ student, onPress, showHistory = false }) => {
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

    // Generate avatar dengan inisial nama
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    // Generate warna avatar berdasarkan nama
    const getAvatarColor = (name) => {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
        const index = name.length % colors.length;
        return colors[index];
    };

    // Hitung rata-rata emosi untuk mode riwayat
    const getAverageEmotion = () => {
        if (!showHistory || !student.emotionHistory) return null;

        const emotionCounts = {};
        student.emotionHistory.forEach(item => {
            emotionCounts[item.emotion] = (emotionCounts[item.emotion] || 0) + 1;
        });

        const mostFrequent = Object.keys(emotionCounts).reduce((a, b) =>
            emotionCounts[a] > emotionCounts[b] ? a : b
        );

        const avgPercentage = Math.round(
            student.emotionHistory.reduce((sum, item) => sum + item.percentage, 0) / student.emotionHistory.length
        );

        return { emotion: mostFrequent, percentage: avgPercentage };
    };

    const displayData = showHistory ? getAverageEmotion() : {
        emotion: student.currentEmotion,
        percentage: student.emotionPercentage
    };

    return (
        <TouchableOpacity
            style={[
                styles.container,
                student.isSelected && styles.selectedContainer
            ]}
            onPress={() => onPress(student)}
        >
            {/* Avatar */}
            <View
                style={[
                    styles.avatarContainer,
                    { backgroundColor: getAvatarColor(student.name) }
                ]}
            >
                <Text style={styles.avatarText}>
                    {getInitials(student.name)}
                </Text>
            </View>

            {/* Student Info */}
            <Text style={styles.studentName} numberOfLines={1}>
                {student.name}
            </Text>
            <Text style={styles.studentId}>{student.nidn}</Text>

            {/* Emotion Info */}
            {displayData && (
                <View style={styles.emotionInfo}>
                    <View style={styles.emotionContainer}>
                        <View
                            style={[
                                styles.emotionDot,
                                { backgroundColor: getEmotionColor(displayData.emotion) }
                            ]}
                        />
                        <Text style={styles.emotionText}>
                            {showHistory ? 'Rata-rata:' : 'Dominan:'} {displayData.emotion}
                        </Text>
                    </View>
                    <Text style={styles.percentageText}>{displayData.percentage}%</Text>
                </View>
            )}

            {/* Selection Indicator */}
            {student.isSelected && (
                <View style={styles.selectionIndicator}>
                    <View style={styles.selectionDot} />
                </View>
            )}
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        width: (width - width * 0.15) / 3, // 3 kolom dengan margin
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: width * 0.03,
        marginVertical: height * 0.01,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: colors.border,
    },
    selectedContainer: {
        borderColor: colors.primary,
        borderWidth: 2,
        elevation: 4,
    },
    avatarContainer: {
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: (width * 0.12) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.01,
    },
    avatarText: {
        fontSize: Math.min(width * 0.04, 16),
        fontWeight: 'bold',
        color: colors.white,
    },
    studentName: {
        fontSize: Math.min(width * 0.025, 12),
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginBottom: 2,
    },
    studentId: {
        fontSize: Math.min(width * 0.02, 10),
        color: colors.darkGray,
        textAlign: 'center',
        marginBottom: height * 0.01,
    },
    emotionInfo: {
        width: '100%',
        alignItems: 'center',
    },
    emotionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    emotionDot: {
        width: width * 0.02,
        height: width * 0.02,
        borderRadius: (width * 0.02) / 2,
        marginRight: width * 0.015,
    },
    emotionText: {
        fontSize: Math.min(width * 0.02, 9),
        color: colors.darkGray,
        textAlign: 'center',
    },
    percentageText: {
        fontSize: Math.min(width * 0.025, 12),
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectionIndicator: {
        position: 'absolute',
        top: width * 0.02,
        right: width * 0.02,
    },
    selectionDot: {
        width: width * 0.025,
        height: width * 0.025,
        borderRadius: (width * 0.025) / 2,
        backgroundColor: colors.primary,
    },
});


export default StudentCard;