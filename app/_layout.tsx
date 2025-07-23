
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#52de2cff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: 'Login EmonG' }}
      />
      <Stack.Screen
        name="screens/auth/RegisterParentScreen"
        options={{ title: 'Login Orang Tua' }}
      />
      <Stack.Screen
        name="screens/auth/RegisterTeacherScreen"
        options={{ title: 'Login Guru' }}
      />
      <Stack.Screen
        name="screens/dashboard/ParentDashboardScreen"
        options={{
          title: 'Dashboard Orang Tua',
          headerBackVisible: false, // Tidak bisa kembali ke login
        }}
      />
    </Stack>
  );
}