import { Text, Pressable } from 'react-native';
import { Link, Href } from 'expo-router';
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('items-center justify-center rounded-3xl', {
  variants: {
    intent: {
      primary: 'bg-spotify',
      secondary: 'bg-gray-700',
    },
    size: {
      large: 'h-20 w-80',
      small: 'h-16 w-36',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'large',
  },
});

export interface ButtonAuthProps extends VariantProps<typeof buttonVariants> {
  text: string;
  link: Href<string>;
  className?: string;
}

export default function ButtonAuth({ className, text, link, intent, size }: ButtonAuthProps) {
  return (
    <Link href={link} asChild>
      <Pressable className={buttonVariants({ intent, size, className })}>
        <Text className="text-2xl font-bold text-white">{text}</Text>
      </Pressable>
    </Link>
  );
}
