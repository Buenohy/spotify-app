import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderHome from '~/components/ui/HeaderHome';
import BannerHome from '~/components/ui/BannerHome';
import ListHome from '~/components/ui/ListHome';
import MiniPlayer from '~/components/ui/MiniPlayer';

export default function HomePage() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-[#1C1B1B] px-7">
        <View>
          <HeaderHome />
          <BannerHome />
        </View>
        <View className="mt-10 gap-8">
          <ListHome />
          <MiniPlayer />
        </View>
        <View></View>
      </View>
    </SafeAreaProvider>
  );
}
