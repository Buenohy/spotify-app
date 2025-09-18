import { View, Text } from 'react-native';
import React from 'react';

export default function MiniPlayer() {
  return (
    <View className="gap-3">
      <View className="bg-spotify h-44 w-36 rounded-3xl"></View>
      <View>
        <Text className="text-base font-bold text-white">Bad Guy</Text>
        <Text className="text-sm font-normal text-white">Billie Eilish</Text>
      </View>
    </View>
  );
}
