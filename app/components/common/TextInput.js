import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const CustomTextInput = ({ placeholder, isPassword = false, value, onChangeText, style }) => {
    const [hidePassword, setHidePassword] = useState(true);

    const togglePassword = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={[styles.container, style]}>
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
                    <MaterialIcons
                        name={hidePassword ? 'visibility-off' : 'visibility'}
                        size={Math.min(width * 0.06, 24)}
                        color={colors.darkGray}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginVertical: height * 0.015,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.015,
        paddingRight: width * 0.12,
        fontSize: Math.min(width * 0.04, 16),
        backgroundColor: colors.white,
        width: Math.min(width * 0.8, 350),
        minWidth: width * 0.6,
    },
    eyeButton: {
        position: 'absolute',
        right: width * 0.03,
        top: '50%',
        transform: [{ translateY: -12 }],
        padding: 5,
    },
});

export default CustomTextInput;