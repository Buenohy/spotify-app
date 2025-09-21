import { View, Text, FlatList } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function PlaylistHome() {
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text className="text-white text-xl font-bold">Playlist</Text>
        <Text className="text-white text-xs font-normal">See More</Text>
      </View>
      <View className="mt-7 flex-row items-center gap-6">
        <MaterialIcons name="play-circle" size={37} color="white" />
        <View>
          <Text className="text-white text-base font-bold">As It Was</Text>
          <Text className="text-xs font-normal">Harry Styles</Text>
        </View>
        <Text className="pl-24 pr-20 text-sm font-normal">5:33</Text>
        <AntDesign name="heart" size={21} color="white" />
      </View>
    </View>
  );
}
