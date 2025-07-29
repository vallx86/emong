import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-svg';
import Svg, { Line, Circle, Text as SvgText, G, Polyline } from 'react-native-svg';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const StudentEmotionChart = ({ data }) => {
    const chartWidth = width - (width * 0.1);
    const chartHeight = height * 0.35;
    const padding = 40;
    const graphWidth = chartWidth - (padding * 2);
    const graphHeight = chartHeight - (padding * 2);

    // Emotion colors
    const emotionColors = {
        'Marah': '#FF4757',
        'Takut': '#FF8C42',
        'Sedih': '#FF6B9D',
        'Jijik': '#8E44AD',
        'Terkejut': '#54A0FF',
        'Senang': '#2ED573',
    };

    const emotions = ['Marah', 'Takut', 'Sedih', 'Jijik', 'Terkejut', 'Senang'];

    // Calculate points for each emotion line
    const getPointsForEmotion = (emotion) => {
        return data.map((item, index) => {
            const x = padding + (index * (graphWidth / (data.length - 1)));
            const y = padding + graphHeight - ((item[emotion] / 100) * graphHeight);
            return { x, y, value: item[emotion] };
        });
    };

    // Create path string for polyline
    const createPath = (points) => {
        return points.map(point => `${point.x},${point.y}`).join(' ');
    };

    // Y-axis labels (percentages)
    const yAxisLabels = [0, 20, 40, 60, 80, 100];

    // X-axis labels (times)
    const xAxisLabels = data.map(item => item.time);

    return (
        <View style={styles.container}>
            <Text style={styles.chartTitle}>Persentase Emosi Berdasarkan Waktu</Text>

            <View style={styles.chartContainer}>
                <Svg width={chartWidth} height={chartHeight}>
                    {/* Grid lines */}
                    {yAxisLabels.map((label, index) => {
                        const y = padding + graphHeight - ((label / 100) * graphHeight);
                        return (
                            <G key={`grid-${index}`}>
                                <Line
                                    x1={padding}
                                    y1={y}
                                    x2={padding + graphWidth}
                                    y2={y}
                                    stroke="#E5E5E5"
                                    strokeWidth="1"
                                />
                            </G>
                        );
                    })}

                    {/* Y-axis */}
                    <Line
                        x1={padding}
                        y1={padding}
                        x2={padding}
                        y2={padding + graphHeight}
                        stroke="#333"
                        strokeWidth="2"
                    />

                    {/* X-axis */}
                    <Line
                        x1={padding}
                        y1={padding + graphHeight}
                        x2={padding + graphWidth}
                        y2={padding + graphHeight}
                        stroke="#333"
                        strokeWidth="2"
                    />

                    {/* Y-axis labels */}
                    {yAxisLabels.map((label, index) => {
                        const y = padding + graphHeight - ((label / 100) * graphHeight);
                        return (
                            <SvgText
                                key={`y-label-${index}`}
                                x={padding - 10}
                                y={y + 4}
                                fontSize="10"
                                fill="#666"
                                textAnchor="end"
                            >
                                {label}%
                            </SvgText>
                        );
                    })}

                    {/* X-axis labels */}
                    {xAxisLabels.map((label, index) => {
                        const x = padding + (index * (graphWidth / (data.length - 1)));
                        return (
                            <SvgText
                                key={`x-label-${index}`}
                                x={x}
                                y={padding + graphHeight + 20}
                                fontSize="10"
                                fill="#666"
                                textAnchor="middle"
                            >
                                {label}
                            </SvgText>
                        );
                    })}

                    {/* Emotion lines */}
                    {emotions.map((emotion) => {
                        const points = getPointsForEmotion(emotion);
                        const pathString = createPath(points);

                        return (
                            <G key={emotion}>
                                {/* Line */}
                                <Polyline
                                    points={pathString}
                                    fill="none"
                                    stroke={emotionColors[emotion]}
                                    strokeWidth="2.5"
                                />

                                {/* Points */}
                                {points.map((point, index) => (
                                    <Circle
                                        key={`${emotion}-point-${index}`}
                                        cx={point.x}
                                        cy={point.y}
                                        r="4"
                                        fill={emotionColors[emotion]}
                                        stroke="#fff"
                                        strokeWidth="2"
                                    />
                                ))}
                            </G>
                        );
                    })}
                </Svg>
            </View>

            {/* Time range indicator */}
            <View style={styles.timeIndicator}>
                <Text style={styles.timeText}>
                    Waktu: {xAxisLabels[0]} - {xAxisLabels[xAxisLabels.length - 1]}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: height * 0.02,
    },
    chartTitle: {
        fontSize: Math.min(width * 0.04, 16),
        fontWeight: '600',
        color: colors.text,
        marginBottom: height * 0.02,
        textAlign: 'center',
    },
    chartContainer: {
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        padding: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    timeIndicator: {
        marginTop: height * 0.02,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        backgroundColor: colors.lightGray,
        borderRadius: 6,
    },
    timeText: {
        fontSize: Math.min(width * 0.035, 14),
        color: colors.darkGray,
        fontWeight: '500',
    },
});

export default StudentEmotionChart;