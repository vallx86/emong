/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const CustomTextInput = ({ placeholder, isPassword = false, value, onChangeText }) => {
    const [hidePassword, setHidePassword] = useState(true);

    const togglePassword = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.darkGray}
                secureTextEntry={isPassword ? hidePassword : false}
                value={value}
                onChangeText={onChangeText}
            />
            {isPassword && (
                <TouchableOpacity style={styles.eyeButton} onPress={togglePassword}>
                    <Text style={styles.eyeText}>{hidePassword ? '👁️' : '🙈'}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: colors.white,
        width: 300,
    },
    eyeButton: {
        position: 'absolute',
        right: 15,
        top: 12,
    },
    eyeText: {
        fontSize: 16,
    },
});

export default CustomTextInput;