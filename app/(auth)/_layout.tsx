import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="get-started" />
      <Stack.Screen name="choose-mode" />
      <Stack.Screen name="register-or-sign-up" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
