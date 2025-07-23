import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

const { width } = Dimensions.get('window');

const PieChart = ({ data, size = Math.min(width * 0.6, 200) }) => {
    const radius = size / 2 - 10;
    const centerX = size / 2;
    const centerY = size / 2;

    // Hitung total untuk persentase
    const total = data.reduce((sum, item) => sum + item.value, 0);

    let currentAngle = 0;

    const createPath = (startAngle, endAngle) => {
        const startAngleRad = (startAngle * Math.PI) / 180;
        const endAngleRad = (endAngle * Math.PI) / 180;

        const x1 = centerX + radius * Math.cos(startAngleRad);
        const y1 = centerY + radius * Math.sin(startAngleRad);
        const x2 = centerX + radius * Math.cos(endAngleRad);
        const y2 = centerY + radius * Math.sin(endAngleRad);

        const largeArc = endAngle - startAngle > 180 ? 1 : 0;

        return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    };

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <Svg width={size} height={size}>
                <G>
                    {data.map((item, index) => {
                        const percentage = (item.value / total) * 100;
                        const angle = (percentage / 100) * 360;
                        const startAngle = currentAngle;
                        const endAngle = currentAngle + angle;

                        const pathData = createPath(startAngle, endAngle);
                        currentAngle = endAngle;

                        return (
                            <Path
                                key={index}
                                d={pathData}
                                fill={item.color}
                                stroke="#fff"
                                strokeWidth="2"
                            />
                        );
                    })}
                </G>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PieChart;