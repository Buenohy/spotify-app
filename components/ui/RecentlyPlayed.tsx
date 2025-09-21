// app/components/RecentlyPlayed.tsx (um novo arquivo)

import { View, Text, FlatList } from 'react-native';
import React from 'react';
import MiniPlayer from './MiniPlayer';

const RECENTLY_PLAYED_DATA = [
  {
    id: '1',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    image: require('../../assets/images/billie.png'),
  },
  {
    id: '2',
    title: 'Scorpion',
    artist: 'Drake',
    image: require('../../assets/images/drake.png'),
  },
  {
    id: '3',
    title: 'WHEN WE ALL FALL...',
    artist: 'Billie Eilish',
    image: require('../../assets/images/billie-2.png'),
  },
  {
    id: '4',
    title: 'ASTROWORLD',
    artist: 'Travis Scott',
    image: require('../../assets/images/drake.png'),
  },
];

export default function RecentlyPlayed() {
  return (
    <View className="gap-4">
      <Text className="text-white px-4 text-2xl font-bold">Recently Played</Text>
      <FlatList
        data={RECENTLY_PLAYED_DATA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-4" />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <MiniPlayer
            title={item.title}
            artist={item.artist}
            image={item.image}
            onPress={() => console.log('Tocando:', item.title)}
          />
        )}
      />
    </View>
  );
}
