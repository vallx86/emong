import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Alert, Dimensions} from 'react-native';
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
        if (nidn === '' || password === '') {
            Alert.alert('Error', 'Mohon isi semua field!');
            return;
        }

        // penambahan logika login
        Alert.alert('Berhasil', `Login Guru dengan NIDN: ${nidn}`);
        console.log('Teacher Login:', { nidn, password });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Logo />

                <View style={styles.formContainer}>
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
        paddingHorizontal: width * 0.05,       // 5% dari lebar layar
        paddingVertical: height * 0.05,        // 5% dari tinggi layar
    },
    formContainer: {
        alignItems: 'center',
        minHeight: height * 0.35, 
    },
});

export default RegisterTeacherScreen;