import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ChooseMode() {
  return (
    <SafeAreaProvider>
      <View className="items-center justify-center">
        <Image source={require('../../assets/images/spotify-logo.png')} />
        <Text className="mb-5 text-2xl font-bold text-[#DADADA]">Choose Mode</Text>
        <Text className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed
          phasellus. Cursus ornare id scelerisque aliquam.
        </Text>
        <Link href="/(auth)/get-startted">
          <Text>Continue</Text>
        </Link>
      </View>
    </SafeAreaProvider>
  );
}
