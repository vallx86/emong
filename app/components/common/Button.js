import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

// Tambahkan props style dan textStyle
const Button = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: height * 0.02,        // 2% dari tinggi layar
        paddingHorizontal: width * 0.08,       // 8% dari lebar layar
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: height * 0.015,        // 1.5% dari tinggi layar
        width: Math.min(width * 0.8, 350),     // Max 80% lebar layar atau 350px
        minWidth: width * 0.6,                 // Min 60% lebar layar
    },
    buttonText: {
        color: colors.white,
        fontSize: Math.min(width * 0.045, 20), // Max 4.5% lebar layar atau 20px
        fontWeight: '600',
    },
});

export default Button;
