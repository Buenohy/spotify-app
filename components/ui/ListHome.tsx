import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const categories = [
  { id: '1', title: 'News' },
  { id: '2', title: 'Video' },
  { id: '3', title: 'Artists' },
  { id: '4', title: 'Podcast' },
  { id: '5', title: 'Music' },
  { id: '6', title: 'Shows' },
];

export default function ListHome() {
  const [selectedCategory, setSelectedCategory] = useState('1');

  const renderCategoryItem = ({ item }: { item: { id: string; title: string } }) => {
    const isActive = item.id === selectedCategory;

    return (
      <TouchableOpacity onPress={() => setSelectedCategory(item.id)}>
        <View className="mr-6 items-center">
          <Text className={`text-xl font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
            {item.title}
          </Text>
          {isActive && <View className="mt-1 h-1 w-5 rounded-full bg-spotify" />}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    </View>
  );
}
