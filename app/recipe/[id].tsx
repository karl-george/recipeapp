import { Recipe } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [fave, setFave] = useState(true);

  const { id } = useLocalSearchParams();
  const router = useRouter();

  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.apiKey}&includeNutrition=true`
    );

    const data = await res.json();
    setRecipe(data);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  return (
    <ScrollView className='flex-1 w-full'>
      <StatusBar translucent />
      <View>
        <ImageBackground
          src={recipe?.image}
          className='w-full h-[300px]'
          resizeMode='cover'
        >
          <View className='flex-row items-center justify-between px-8 mt-16'>
            {/* Back button */}
            <TouchableOpacity
              onPress={() => router.back()}
              className='p-2 bg-white rounded-full opacity-50'
            >
              <Ionicons name='chevron-back' size={26} color={'#000'} />
            </TouchableOpacity>
            {/* Favourite button */}
            <TouchableOpacity className='p-2 bg-white rounded-full opacity-60'>
              {fave ? (
                <Ionicons name='heart' size={26} color={'#ff0000'} />
              ) : (
                <Ionicons name='heart-outline' size={26} color={'#000'} />
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Info */}
      <View className='px-4 mt-4'>
        {/* Title */}
        <Text className='text-2xl font-bold'>{recipe?.title}</Text>
        <View className='flex-row space-x-4'>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='time-outline' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {recipe?.readyInMinutes} min
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='flame' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>
              {recipe?.nutrition.nutrients[0].amount.toFixed(0)} cal
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <Ionicons name='people' size={14} color={'#EA7A22'} />
            <Text className='text-sm text-faded'>{recipe?.servings}</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='flex-row space-x-2'
        >
          {recipe?.diets.map((diet, i) => (
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
          {recipe?.extendedIngredients.map((ingredient, i) => (
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
          {recipe?.analyzedInstructions[0].steps.map((step, i) => (
            <View className='flex-row mb-4 space-x-2' key={i}>
              <Text className='text-lg'>{step.number}.</Text>
              <Text className='w-11/12 text-lg'>{step.step}</Text>
            </View>
          ))}
        </View>

        {/* Nutrition Info */}
        <View className='mt-4'>
          <Text className='mb-3 text-xl font-bold'>Nutrition Per Serving</Text>
          <View className='flex-row flex-1 space-x-2'>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[0].name}:
            </Text>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[0].amount.toFixed(0)}
              {recipe?.nutrition.nutrients[0].unit}
            </Text>
          </View>
          <View className='flex-row flex-1 space-x-2'>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[1].name}:
            </Text>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[1].amount.toFixed(0)}
              {recipe?.nutrition.nutrients[1].unit}
            </Text>
          </View>
          <View className='flex-row flex-1 space-x-2'>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[3].name}:
            </Text>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[3].amount.toFixed(0)}
              {recipe?.nutrition.nutrients[3].unit}
            </Text>
          </View>
          <View className='flex-row flex-1 space-x-2'>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[5].name}:
            </Text>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[5].amount.toFixed(0)}
              {recipe?.nutrition.nutrients[5].unit}
            </Text>
          </View>
          <View className='flex-row flex-1 space-x-2'>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[6].name}:
            </Text>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[6].amount.toFixed(0)}
              {recipe?.nutrition.nutrients[6].unit}
            </Text>
          </View>
          <View className='flex-row flex-1 space-x-2'>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[7].name}:
            </Text>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[7].amount.toFixed(0)}
              {recipe?.nutrition.nutrients[7].unit}
            </Text>
          </View>
          <View className='flex-row flex-1 mb-3 space-x-2'>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[10].name}:
            </Text>
            <Text className='text-lg'>
              {recipe?.nutrition.nutrients[10].amount.toFixed(0)}
              {recipe?.nutrition.nutrients[10].unit}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
