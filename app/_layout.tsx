import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="screens/RegisterParentScreen"
        options={{ title: 'Register Orang Tua' }}
      />
      <Stack.Screen
        name="screens/RegisterTeacherScreen"
        options={{ title: 'Register Guru' }}
      />
    </Stack>
  );
}
