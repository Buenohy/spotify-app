import { View, Text } from 'react-native';
import React from 'react';

export default function ListHome() {
  return (
    <View className="flex-row gap-10">
      <Text className="text-xl font-bold text-white">News</Text>
      <Text className="text-xl font-bold text-white">Video</Text>
      <Text className="text-xl font-bold text-white">Artists</Text>
      <Text className="text-xl font-bold text-white">Podcast</Text>
      <Text className="text-xl font-bold text-white">Music</Text>
    </View>
  );
}
