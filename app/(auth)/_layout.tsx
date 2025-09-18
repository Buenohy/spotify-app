import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="get-startted" />
      <Stack.Screen name="choose-mode" />
      <Stack.Screen name="register-or-sign-up" />
    </Stack>
  );
}
