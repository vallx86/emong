import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Alert, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../../styles/colors';
import Logo from '../../components/common/Logo';
import Button from '../../components/common/Button';
import CustomTextInput from '../../components/common/TextInput';

const { width, height } = Dimensions.get('window');

const RegisterTeacherScreen = () => {
    const router = useRouter();
    const [nidn, setNidn] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Teacher login attempt:', { nidn, password });

        if (nidn === '' || password === '') {
            Alert.alert('Error', 'Mohon isi semua field!');
            return;
        }

        // Simulasi validasi login untuk guru
        if (nidn === 'teacher001' && password === 'password') {
            console.log('Teacher login successful, navigating...');

            try {
                router.push('/screens/dashboard/TeacherDashboardScreen');
                console.log('Teacher navigation executed');
            } catch (error) {
                console.error('Teacher navigation error:', error);
                Alert.alert('Error Navigasi', 'Gagal berpindah ke dashboard guru: ' + error.message);
            }
        } else {
            Alert.alert('Error', 'NIDN atau Password salah!');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}>

                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled">

                    <View style={styles.content}>
                        <View style={styles.logoSection}>
                            <Logo />
                        </View>

                        <View style={styles.formSection}>
                            <CustomTextInput
                                placeholder="NIDN"
                                value={nidn}
                                onChangeText={setNidn} />

                            <CustomTextInput
                                placeholder="Password"
                                isPassword={true}
                                value={password}
                                onChangeText={setPassword} />

                            <Button
                                title="Masuk"
                                onPress={handleLogin} />
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.05,
        margin: 100,
    },
    logoSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height * 0.3,
    },
    formSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: height * 0.2,
    },
    spacer: {
        flex: 0.5,
        minHeight: height * 0.1,
    },
});

export default RegisterTeacherScreen;