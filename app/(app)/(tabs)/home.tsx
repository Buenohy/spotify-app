import { View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderHome from '~/components/ui/HeaderHome';
import BannerHome from '~/components/ui/BannerHome';
import ListHome from '~/components/ui/ListHome';
import RecentlyPlayed from '~/components/ui/RecentlyPlayed';
import PlaylistHome from '~/components/ui/PlaylistHome';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#1C1B1B]">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 28, paddingBottom: 24 }}>
        <View>
          <HeaderHome />
          <BannerHome />
        </View>

        <View className="mt-10 gap-8">
          <ListHome />

          <RecentlyPlayed />
        </View>

        <View className="mt-8">
          <PlaylistHome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
