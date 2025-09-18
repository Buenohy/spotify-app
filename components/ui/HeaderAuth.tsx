import { View, Text, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

interface HeaderAuthProps {
  title: string;
  text: string;
  link: string;
}

export default function HeaderAuth({ title, text, link }: HeaderAuthProps) {
  return (
    <View>
      <Image source={require('../../assets/images/spotify-logo.png')} />
      <View className="mb-7 mt-20 items-center gap-6">
        <Text className="text-3xl font-bold text-white">{title}</Text>
        <Text className="text-xs font-normal text-white">
          {text}{' '}
          <Link href="/" className="text-spotify">
            {link}
          </Link>
        </Text>
      </View>
    </View>
  );
}
