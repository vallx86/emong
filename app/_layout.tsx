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
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="screens/dashboard/TeacherDashboardScreen"
        options={{
          title: 'Dashboard Guru',
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="screens/teacher/StudentDetailScreen"
        options={{
          title: 'Detail Siswa',
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="screens/teacher/StudentChartScreen"
        options={{
          title: 'Grafik Emosi',
          headerBackVisible: false,
        }}
      />
    </Stack>

  );
}