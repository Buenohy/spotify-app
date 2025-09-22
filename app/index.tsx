import { View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const isLoggedIn = false;

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (isLoggedIn) {
        router.replace('/(app)');
      } else {
        router.replace('/(auth)/get-started');
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <StatusBar style="light" />

      {/* Logo do Spotify */}
      <Image
        source={require('../assets/images/spotify-logo.png')}
        className="h-20 w-2/3"
        resizeMode="contain"
      />

      <ActivityIndicator size="large" color="#1DB954" className="mt-8" />
    </View>
  );
}
