import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InputAuth from '~/components/ui/InputAuth';
import ButtonAuth from '~/components/ui/ButtonAuth';
import FooterAuth from '~/components/ui/FooterAuth';
import HeaderAuth from '~/components/ui/HeaderAuth';
import { Link } from 'expo-router';

export default function SingUp() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-[#1C1B1B] px-7">
        <HeaderAuth title="Sing In" text="If you Need Any Support" link="Click Here" />
        <View className=" items-center gap-4">
          <InputAuth placeholder="Enter Username Or Email" keyboardType="default" />
          <InputAuth placeholder="Password" keyboardType="default" />
          <Link href="/">
            <Text className="text-left text-gray-500">Recovery password</Text>
          </Link>
          <ButtonAuth link="/(app)/(tabs)/home-page" text="Sing In" size={'large'} />
        </View>
        <FooterAuth
          text="
Do you have an account?"
          link="sign in"
        />
      </View>
    </SafeAreaProvider>
  );
}
