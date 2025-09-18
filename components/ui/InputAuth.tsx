import { View, Text, TextInput } from 'react-native';
import React from 'react';

interface InputAuthPRops {
  placeholder: string;
  keyboardType: 'default' | 'email-address';
}

export default function InputAuth({ placeholder, keyboardType }: InputAuthPRops) {
  return (
    <TextInput
      className="h-20 w-[334px] rounded-3xl border border-[#A7A7A7] p-7  text-[#A7A7A7] placeholder:text-[#A7A7A7]"
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}
