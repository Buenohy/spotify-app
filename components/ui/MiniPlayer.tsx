import { View, Text } from 'react-native';
import React from 'react';

export default function MiniPlayer() {
  return (
    <View>
      <View className="bg-spotify h-44 w-36">
        <Text>MiniPlayer</Text>
      </View>
      <View>
        <Text className="text-base font-bold text-white">Bad Guy</Text>
        <Text className="text-sm font-normal text-white">Billie Eilish</Text>
      </View>
    </View>
  );
}
