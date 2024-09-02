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
    <View className='mb-3'>
      <View className='h-[220px] w-[182px]'>
        <Image
          src={image.url}
          className='w-full h-full rounded-xl'
          resizeMode='cover'
        />
      </View>

      <View>
        {/* Title */}
        <Text className='w-[182px] font-semibold text-lg'>{label}</Text>
        <View>
          {/* Time */}
          <Text className='text-faded'>{time}</Text>
          {/* Calories */}
          <Text className='text-faded'>{calories}</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
