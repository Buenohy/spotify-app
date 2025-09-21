import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderHome from '~/components/ui/HeaderHome';
import BannerHome from '~/components/ui/BannerHome';
import ListHome from '~/components/ui/ListHome';
import MiniPlayer from '~/components/ui/MiniPlayer';
import PlaylistHome from '~/components/ui/PlaylistHome';

export default function Home() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-[#1C1B1B] px-7">
        <View>
          <HeaderHome />
          <BannerHome />
        </View>
        <View className="mt-10 gap-8">
          <ListHome />
          <View className="mb-9 flex-row gap-3">
            <MiniPlayer />
            <MiniPlayer />
            <MiniPlayer />
          </View>
        </View>
        <View>
          <PlaylistHome />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
