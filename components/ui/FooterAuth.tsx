import { View, Text } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

interface FooterAuthProps {
  text: string;
  link: string;
}

export default function FooterAuth({ text, link }: FooterAuthProps) {
  return (
    <View>
      <View className="my-8 w-full flex-row items-center">
        <View className="bg-spotify h-px flex-1" />

        <Text className="mx-4 text-gray-400">Or</Text>

        <View className="bg-spotify h-px flex-1" />
      </View>
      <View className="mb-8 mt-12 flex-row items-center justify-center gap-16">
        <FontAwesome name="google" size={36} color="white" />
        <FontAwesome name="apple" size={36} color="white" />
      </View>
      <Text className="text-center text-sm font-bold text-white">
        {text}{' '}
        <Link href="/(auth)/sing-up" className="text-spotify">
          {link}
        </Link>
      </Text>
    </View>
  );
}
