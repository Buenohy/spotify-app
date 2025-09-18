import { View, Text } from 'react-native';
import React from 'react';

export default function BannerHome() {
  return (
    <View className="bg-spotify h-28 w-full rounded-3xl">
      <View className="gap-1 p-4">
        <Text className="text-xs font-bold text-white">New Album</Text>
        <Text className="text-xl font-bold text-white">Happier Than Ever</Text>
        <Text className="text-xs font-bold text-white">Billie Eilish</Text>
      </View>
    </View>
  );
}
