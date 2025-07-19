import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Logo from '../components/Logo';
import { colors } from '../styles/colors';

const LoginScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Logo />
                <View style={styles.buttonContainer}>
                </View>
                <View style={styles.container}>

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    buttonContainer: {
        alignItems: 'center',
    },
});

export default LoginScreen;
