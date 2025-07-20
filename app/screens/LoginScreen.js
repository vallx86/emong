/* eslint-disable react/jsx-no-undef */
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Logo from '../components/Logo';
import { colors } from '../styles/colors';

const LoginScreen = () => {
    const router = useRouter();

    const goToParentRegister = () => {
        router.push('/screens/RegisterOrtu');
    };

    const goToTeacherRegister = () => {
        router.push('/screens/RegisterGuru')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Logo />
                <View style={styles.buttonContainer}>
                </View>
                <View style={styles.container}>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Orang Tua"
                        onPress={goToParentRegister}
                    />
                    <Button
                        title="Guru"
                        onPress={goToTeacherRegister}
                    />
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
