import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function GetStartted() {
  return (
    <SafeAreaProvider>
      <View className="items-center justify-center px-7">
        <Image source={require('../../assets/images/spotify-logo.png')} />

        <Text className="text-2xl font-bold text-[#DADADA]">Enjoy listening to music</Text>
        <Text className="text-base font-normal text-[#797979]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed
          phasellus. Cursus ornare id scelerisque aliquam.
        </Text>
        <Link href="/(auth)/choose-mode">
          <Text className="text-2xl font-bold">Choose Mode</Text>
        </Link>
      </View>
    </SafeAreaProvider>
  );
}
