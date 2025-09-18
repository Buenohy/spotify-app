import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';
import React from 'react';
import ButtonAuth from '~/components/ui/ButtonAuth';

export default function GetStartted() {
  return (
    <ImageBackground
      source={require('../../assets/images/billie-eilish-green-hair-wallpapers-1.png')}
      className="flex-1 items-center justify-end bg-black"
      resizeMode="cover">
      <StatusBar barStyle="light-content" />

      <View className="w-full items-center px-7 pb-16">
        <Image
          source={require('../../assets/images/spotify-logo.png')}
          className="mb-8 h-10 w-32"
        />

        <Text className="mb-5 text-center text-4xl font-bold text-white">
          Enjoy listening to music
        </Text>
        <Text className="mb-9 text-center text-base font-normal text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed
          phasellus. Cursus ornare id scelerisque aliquam.
        </Text>
        <ButtonAuth
          text="Get Started"
          link="/(auth)/choose-mode"
          size={'large'}
          intent={'primary'}
        />
      </View>
    </ImageBackground>
  );
}
