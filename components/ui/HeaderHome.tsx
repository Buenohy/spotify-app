import { View, Text, Image } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function HeaderHome() {
  return (
    <View className="flex-row items-center justify-between p-7">
      <Feather name="search" size={26} color="white" />
      <Image
        source={require('../../assets/images/spotify-logo.png')}
        className="h-8 w-24"
        resizeMode="contain"
      />
      <SimpleLineIcons name="options-vertical" size={22} color="white" />
    </View>
  );
}
