import { View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InputAuth from '~/components/ui/InputAuth';
import ButtonAuth from '~/components/ui/ButtonAuth';
import FooterAuth from '~/components/ui/FooterAuth';
import HeaderAuth from '~/components/ui/HeaderAuth';

export default function register() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-[#1C1B1B] px-7">
        <HeaderAuth title="Register" text="If you Need Any Support" link="Click Here" />
        <View className=" items-center gap-4">
          <InputAuth placeholder="Full Name" keyboardType="default" />
          <InputAuth placeholder="Enter Email" keyboardType="email-address" />
          <InputAuth placeholder="Password" keyboardType="default" />
          <ButtonAuth link="/(app)/(tabs)/home" text="Creat Account" size={'large'} />
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
