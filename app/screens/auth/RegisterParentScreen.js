import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Alert, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../styles/colors';
import Logo from '../components/common/Logo.js';
import Button from '../components/common/Button';
import CustomTextInput from '../components/common/TextInput';

const { width, height } = Dimensions.get('window');

const RegisterParentScreen = () => {
    const router = useRouter();
    const [nidn, setNidn] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (nidn === '' || password === '') {
            Alert.alert('Error', 'Mohon isi semua field!');
            return;
        }

        // Simulasi validasi login
        if (nidn === '120016729' && password === 'password') {
            Alert.alert('Berhasil', 'Login berhasil!', [
                {
                    text: 'OK',
                    onPress: () => router.replace('/screens/dashboard/ParentDashboardScreen')
                }
            ]);
        } else {
            Alert.alert('Error', 'NIDN atau Password salah!');
        }

        console.log('Parent Login:', { nidn, password });
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.content}>
                        <View style={styles.logoSection}>
                            <Logo />
                        </View>

                        <View style={styles.formSection}>
                            <CustomTextInput
                                placeholder="NIDN"
                                value={nidn}
                                onChangeText={setNidn}
                            />

                            <CustomTextInput
                                placeholder="Password"
                                isPassword={true}
                                value={password}
                                onChangeText={setPassword}
                            />

                            <Button
                                title="Masuk"
                                onPress={handleLogin}
                            />
                        </View>

                        <View style={styles.spacer} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        minHeight: height,
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.05,
    },
    logoSection: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height * 0.25,
    },
    formSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: height * 0.35,
    },
    spacer: {
        flex: 0.5,
        minHeight: height * 0.05,
    },

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.gray,
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: width * 0.05,       // 5% dari lebar layar
//         paddingVertical: height * 0.05,        // 5% dari tinggi layar
//     },
//     formContainer: {
//         alignItems: 'center',
//         minHeight: height * 0.35,
//     },
});


export default RegisterParentScreen;
