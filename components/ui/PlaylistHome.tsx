import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongItem from './SongItem';

const API_URL = 'http://192.168.226.1:4000/api/songs';

export default function PlaylistHome() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(API_URL);

        setSongs(response.data);
      } catch (err) {
        console.error('Erro ao buscar músicas da API:', err);
        setError('Não foi possível carregar a playlist.');
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return (
      <View className="h-20 items-center justify-center">
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  if (error) {
    return <Text className="text-center text-red-500">{error}</Text>;
  }

  return (
    <View>
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-white">Playlist</Text>
        <TouchableOpacity>
          <Text className="text-xs font-normal text-gray-400">See More</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={songs}
        keyExtractor={(item: any) => item.id.toString()}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View className="h-5" />}
        renderItem={({ item }) => (
          <SongItem title={item.title} artist={item.artist} duration={item.duration} />
        )}
      />
    </View>
  );
}
