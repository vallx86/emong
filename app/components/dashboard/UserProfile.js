import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const UserProfile = ({ user }) => {
    // Membuat avatar dengan inisial nama
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    // Generate warna avatar berdasarkan nama
    const getAvatarColor = (name) => {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
        const index = name.length % colors.length;
        return colors[index];
    };

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.avatarContainer,
                    { backgroundColor: getAvatarColor(user.name) }
                ]}
            >
                <Text style={styles.avatarText}>
                    {getInitials(user.name)}
                </Text>
            </View>
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
    avatarContainer: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: (width * 0.15) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width * 0.04,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    avatarText: {
        fontSize: Math.min(width * 0.06, 24),
        fontWeight: 'bold',
        color: colors.white,
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