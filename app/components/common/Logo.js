import React from 'react';
import { Image, StyleSheet, View , Dimensions} from 'react-native';
import { colors } from '../../styles/colors';

const {width, height} = Dimensions.get('window');

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

const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: height * 0.02, // 2% dari tinggi layar
        },
        image: {
            width: Math.min(width * 0.5, 200),    // Max 50% lebar layar atau 200px
            height: Math.min(width * 0.5, 200),   // Aspect ratio 1:1
            resizeMode: 'contain',
        },
    });

export default Logo;