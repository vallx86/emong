/* eslint-disable react/jsx-no-undef */
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Logo from '../components/Logo';
import { colors } from '../styles/colors';
import Button from '../components/Button'

const LoginScreen = () => {
    const router = useRouter();

    const goToParentRegister = () => {
        router.push('/screens/RegisterPatrentScreen');
    };

    const goToTeacherRegister = () => {
        router.push('/screens/RegisterTeacherScreen')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Logo */}
                <View style={styles.logoSection}>
                    <Logo />
                </View>

                {/* Button */}
                <View style={styles.buttonSection}>
                    <Button
                        title="Orang Tua"
                        onPress={goToParentRegister}
                    />
                    <Button
                        title="Guru"
                        onPress={goToTeacherRegister}
                    />
                </View>

                <View style={styles.spacer} />
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
        paddingVertical: 360, // Padding atas dan bawah
        marginBottom: 60,
    
    },  

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    logoContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
     spacer: {
        flex: 0.5,
    },
});

export default LoginScreen;
