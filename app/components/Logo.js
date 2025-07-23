import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../styles/colors';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/emong.png')}
                style={styles.image}
            />
        </View>
    );
};

export default Logo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});
