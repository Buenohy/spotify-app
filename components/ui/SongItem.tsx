import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface SongItemProps {
  title: string;
  artist: string;
  duration: string;
}

export default function SongItem({ title, artist, duration }: SongItemProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <TouchableOpacity className="flex-row items-center">
      <MaterialIcons name="play-circle" size={37} color="#555" />

      <View className="mx-4 flex-1">
        <Text className="text-white text-base font-bold">{title}</Text>
        <Text className="text-gray-400 text-xs font-normal">{artist}</Text>
      </View>

      <View className="flex-row items-center gap-5">
        <Text className="text-gray-400 text-sm font-normal">{duration}</Text>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={21}
            color={isLiked ? '#42C83C' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
