import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import SongItem from './SongItem';

const PLAYLIST_DATA = [
  { id: '1', title: 'As It Was', artist: 'Harry Styles', duration: '5:33' },
  { id: '2', title: 'God Did', artist: 'DJ Khaled', duration: '3:43' },
  { id: '3', title: 'First Class', artist: 'Jack Harlow', duration: '2:54' },
  { id: '4', title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
];

export default function PlaylistHome() {
  return (
    <View>
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-white text-xl font-bold">Playlist</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 text-xs font-normal">See More</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={PLAYLIST_DATA}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View className="h-5" />}
        renderItem={({ item }) => (
          <SongItem title={item.title} artist={item.artist} duration={item.duration} />
        )}
      />
    </View>
  );
}
