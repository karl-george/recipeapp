import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
        <View className='flex-row items-center space-x-4'>
          {/* Time */}
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='time-outline' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>{time}min</Text>
          </View>
          {/* Calories */}
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='flame' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {calories.toFixed(0)} cal
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
