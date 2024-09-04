import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

type FoodCardProps = {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  likes: number;
};

const FoodCard = ({
  id,
  title,
  image,
  readyInMinutes,
  likes,
}: FoodCardProps) => {
  return (
    <Link href={`/recipe/${id}`} className='mb-5'>
      <View>
        <View className='h-[220px] w-[182px]'>
          <Image
            src={image}
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
            {title}
          </Text>
          <View className='flex-row items-center space-x-4'>
            {/* Time */}
            <View className='flex-row items-center space-x-1'>
              <Ionicons name='time-outline' size={14} color={'#EA7A22'} />
              <Text className='text-sm text-faded'>{readyInMinutes}min</Text>
            </View>
            {/* Calories */}
            <View className='flex-row items-center space-x-1'>
              <Ionicons name='thumbs-up' size={14} color={'#EA7A22'} />
              <Text className='text-sm text-faded'>{likes.toFixed(0)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default FoodCard;
