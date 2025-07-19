import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import emong from "../../assets/images/emong.png";
import { colors } from '../styles/colors';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textEmong}>
            </Text>
            <Image
                source={emong}
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
    },
    textEmong:{
        fontWeight: '400',
        fontStyle: 'normal',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginVertical: 24,
    },
})
