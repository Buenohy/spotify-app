import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ButtonAuth from '~/components/ui/ButtonAuth';

export default function registerOrSignUp() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center  bg-[#1C1B1B] px-7">
        <Image
          source={require('../../assets/images/spotify-logo.png')}
          className="mb-14 mt-[175px]"
        />

        <Text className="mb-5 text-2xl font-bold text-[#DADADA]">Enjoy Listening To Music</Text>
        <Text className="mb-9 text-center text-base font-normal text-[#797979]">
          Spotify is a proprietary Swedish audio streaming and media services provider
        </Text>
        <View className="flex-row gap-20">
          <ButtonAuth text="Register" link="/(auth)/choose-mode" size={'small'} />
          <ButtonAuth
            text="Sing in"
            link="/(auth)/choose-mode"
            size={'small'}
            intent={'secondary'}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
