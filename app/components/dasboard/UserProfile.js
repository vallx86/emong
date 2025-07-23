import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const UserProfile = ({ user }) => {
    return (
        <View style={styles.container}>
            <Image
                source={user.avatar}
                style={styles.avatar}
                defaultSource={require('../../../assets/images/default-avatar.png')}
            />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userId}>{user.id}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    avatar: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: (width * 0.15) / 2,
        marginRight: width * 0.04,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: Math.min(width * 0.045, 18),
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 2,
    },
    userId: {
        fontSize: Math.min(width * 0.035, 14),
        color: colors.darkGray,
    },
});

export default UserProfile;