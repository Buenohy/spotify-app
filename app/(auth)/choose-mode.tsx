import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';
import React from 'react';
import ButtonAuth from '~/components/ui/ButtonAuth';
import DarkMode from '~/components/DarkMode';

export default function ChooseMode() {
  return (
    <ImageBackground
      source={require('../../assets/images/billie-eilish-green-hair-wallpapers-2.png')}
      className="flex-1 items-center justify-end bg-black"
      resizeMode="cover">
      <StatusBar barStyle="light-content" />

      <View className="w-full items-center px-7 pb-16">
        <Image
          source={require('../../assets/images/spotify-logo.png')}
          className="mb-8 h-10 w-32"
        />

        <Text className="mb-5 text-center text-4xl font-bold text-white">Choose Mode</Text>
        <DarkMode />
        <ButtonAuth
          text="Get Started"
          link="/(auth)/register-or-sign-up"
          size={'large'}
          intent={'primary'}
        />
      </View>
    </ImageBackground>
  );
}
