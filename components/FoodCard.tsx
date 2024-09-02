import { View, Text, Image } from 'react-native';
import React from 'react';

type FoodCardProps = {
  label: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  time: number;
  calories: number;
};

const FoodCard = ({ label, image, time, calories }: FoodCardProps) => {
  return (
    <View className='mb-4'>
      {/* //todo add favourite icon */}
      <View className='h-[220px] w-[182px]'>
        <Image
          src={image.url}
          className='w-full h-full rounded-xl'
          resizeMode='cover'
        />
      </View>

      <View>
        {/* Title */}
        <Text
          className='w-[182px] font-bold text-base'
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {label}
        </Text>
        {/* // todo add time and calories icons */}
        <View className='flex-row items-center space-x-4'>
          {/* Time */}
          <Text className='text-faded'>{time}min</Text>
          {/* Calories */}
          <Text className='text-faded'>{calories.toFixed(0)} cal</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
