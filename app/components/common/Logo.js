import React from 'react';
import { Image, Text, StyleSheet, View, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const Logo = () => {
    // Fungsi untuk handle gambar dengan fallback
    const renderLogo = () => {
        try {
            // Coba render gambar
            return (
                <Image
                    source={require('../../../assets/images/emong.png')}
                    style={styles.image}
                    onError={() => console.log('Logo image failed to load')}
                />
            );
        } catch (error) {
            // Jika gambar tidak ditemukan, tampilkan fallback
            console.log('Logo image not found, using fallback');
            return (
                <View style={styles.fallbackContainer}>
                    <Text style={styles.fallbackText}>EmonG</Text>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            {renderLogo()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height * 0.02,
    },
    image: {
        width: Math.min(width * 0.5, 200),
        height: Math.min(width * 0.5, 200),
        resizeMode: 'contain',
    },
    fallbackContainer: {
        width: Math.min(width * 0.5, 200),
        height: Math.min(width * 0.5, 200),
        backgroundColor: colors.primary,
        borderRadius: Math.min(width * 0.25, 100),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    fallbackText: {
        fontSize: Math.min(width * 0.08, 32),
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
});

export default Logo;