import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import Logo from '../../components/common/Logo';
import { colors } from '../../styles/colors';
import Button from '../../components/common/Button';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const router = useRouter();

    const goToParentRegister = () => {
        console.log('Navigating to RegisterParentScreen...');
        router.push('screens\auth\RegisterParentScreen.js');
    };

    const goToTeacherRegister = () => {
        console.log('Navigating to RegisterTeacherScreen...');
        router.push('\screens\auth\RegisterTeacherScreen.js/RegisterTeacherScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    {/* Logo Section */}
                    <View style={styles.logoSection}>
                        <Logo />
                    </View>

                    {/* Button Section */}
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

                    {/* Spacer untuk layar kecil */}
                    <View style={styles.spacer} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    scrollContent: {
        flexGrow: 1,
        minHeight: height, // Minimal setinggi layar
    },
    content: {
        flex: 1,
        justifyContent: 'space-around', // Distribusi merata
        alignItems: 'center',
        paddingHorizontal: width * 0.05,       // 5% dari lebar layar
        paddingVertical: height * 0.05,        // 5% dari tinggi layar
    },
    logoSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height * 0.3,               // Min 30% tinggi layar
    },
    buttonSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom : 300,
        minHeight: height * 0.2,               // Min 20% tinggi layar
    },
    spacer: {
        flex: 0.5,
        minHeight: height * 0.1,               // Min 10% tinggi layar
    },
});

export default LoginScreen;