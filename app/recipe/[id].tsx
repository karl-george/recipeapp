import { View, Text, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { detailedRecipe } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const RecipeDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView className='flex-1 w-full'>
      <StatusBar translucent />
      <View>
        <ImageBackground
          src={detailedRecipe?.image}
          className='w-full h-[300px]'
          resizeMode='cover'
        />
        {/* Back Button */}
        {/* Fave Button */}
      </View>
      {/* Info */}
      <View className='px-4 mt-4'>
        <Text className='text-xl font-bold'>{detailedRecipe?.title}</Text>
        <View className='flex-row space-x-4'>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='time-outline' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {detailedRecipe?.readyInMinutes} min
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='people' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {detailedRecipe?.servings}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
