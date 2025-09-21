import { View, Text, TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

interface MiniPlayerProps {
  image: ImageSourcePropType;
  title: string;
  artist: string;
  onPress?: () => void;
}

export default function MiniPlayer({ image, title, artist, onPress }: MiniPlayerProps) {
  return (
    <TouchableOpacity onPress={onPress} className="w-36 gap-2">
      <ImageBackground
        source={image}
        resizeMode="cover"
        className="h-36 w-36 items-end justify-end overflow-hidden rounded-xl p-2">
        <View className="bg-black/50 h-8 w-8 items-center justify-center rounded-full">
          <Feather name="play" size={18} color="white" />
        </View>
      </ImageBackground>

      <View>
        <Text className="text-white text-base font-bold" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-gray-400 text-sm font-normal" numberOfLines={1}>
          {artist}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
