import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Logo from '../components/Logo';
import CustomTextInput from '../components/TextInput';
import { colors } from '../styles/colors';

const RegisterGuru = () => {
    const router = useRouter();
    const [nidn, setNidn] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (nidn === '' || password === '') {
            Alert.alert('Error', 'Mohon isi semua field!');
            return;
        }

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
        paddingHorizontal: 20,
    },
    formContainer: {
        alignItems: 'center',
    },
});

export default RegisterGuru;