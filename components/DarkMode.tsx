import { View, Text } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function DarkMode() {
  return (
    <View className="mb-16">
      <View className="flex flex-row items-center justify-center gap-16">
        <View className="gap-4">
          <FontAwesome
            name="moon-o"
            size={36}
            color="white"
            className="bg-spotify rounded-full p-5"
          />
          <Text className="text-base font-bold text-white">Dark Mode</Text>
        </View>
        <View className="gap-4">
          <Feather name="sun" size={36} color="white" className="bg-spotify rounded-full p-5" />
          <Text className="text-base font-bold text-white">Light Mode</Text>
        </View>
      </View>
    </View>
  );
}
