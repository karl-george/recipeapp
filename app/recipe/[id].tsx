import { detailedRecipe } from '@/constants/data';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';

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
        {/* Title */}
        <Text className='text-2xl font-bold'>{detailedRecipe?.title}</Text>
        <View className='flex-row space-x-4'>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='time-outline' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {detailedRecipe?.readyInMinutes} min
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='flame' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {detailedRecipe?.nutrition.nutrients[0].amount.toFixed(0)} cal
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='people' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {detailedRecipe?.servings}
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='flex-row space-x-2'
        >
          {detailedRecipe.diets.map((diet, i) => (
            <View key={i} className='flex-row mt-4'>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#EA7A22', '#F5A150']}
                className='items-center w-24 px-2 py-2 rounded-md'
              >
                <Text className='font-semibold text-white capitalize bg-transparent'>
                  {diet}
                </Text>
              </LinearGradient>
            </View>
          ))}
        </ScrollView>

        {/* Ingredients */}
        <View className='mt-6'>
          <Text className='mb-3 text-xl font-bold'>Ingredients</Text>
          {detailedRecipe?.extendedIngredients.map((ingredient, i) => (
            <View className='flex-row items-center mb-4 space-x-2' key={i}>
              <Image
                src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                className='w-10 h-10 rounded-full'
                resizeMode='cover'
              />
              <View className='flex-row items-center justify-between flex-1'>
                <Text className='text-lg capitalize'>
                  {ingredient.nameClean}
                </Text>
                <Text className='text-lg'>
                  {ingredient.amount} {ingredient.measures.us.unitShort}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Instructions */}
        <View className='mt-4'>
          <Text className='mb-3 text-xl font-bold'>Instructions</Text>
          {detailedRecipe?.analyzedInstructions[0].steps.map((step, i) => (
            <View className='flex-row mb-4 space-x-2' key={i}>
              <Text className='text-lg'>{step.number}.</Text>
              <Text className='w-11/12 text-lg'>{step.step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
