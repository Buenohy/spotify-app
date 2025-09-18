import { Text, Pressable } from 'react-native';
import { Link, Href } from 'expo-router';
import React from 'react';

interface Props {
  text: string;
  link: Href<string>;
}

export default function ButtonAuth({ text, link }: Props) {
  return (
    <Link href={link} asChild>
      <Pressable className="bg-spotify h-20 w-80 items-center justify-center rounded-3xl">
        <Text className="text-2xl font-bold text-white">{text}</Text>
      </Pressable>
    </Link>
  );
}
