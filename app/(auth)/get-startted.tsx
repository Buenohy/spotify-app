import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonAuth from '~/components/ui/ButtonAuth';

export default function GetStartted() {
  return (
    <SafeAreaProvider>
      <View className="items-center justify-center bg-[#0d0c0c] px-7">
        <Image source={require('../../assets/images/spotify-logo.png')} className="mb-96 mt-9" />

        <Text className="mb-5 text-2xl font-bold text-[#DADADA]">Enjoy listening to music</Text>
        <Text className="mb-9 text-base font-normal text-[#797979]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed
          phasellus. Cursus ornare id scelerisque aliquam.
        </Text>
        <ButtonAuth text="Get Started" link="/(auth)/choose-mode" />
      </View>
    </SafeAreaProvider>
  );
}
