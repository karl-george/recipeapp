import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Fave = () => {
  const { top, bottom } = useSafeAreaInsets();
  const router = useRouter();

  let recipeNumber = 10;

  return (
    <ScrollView
      className='h-full px-4 bg-bgFaded'
      style={{ paddingTop: top + 24, paddingBottom: 48 }}
    >
      <StatusBar backgroundColor={'#F6F6F6'} />
      <View className='mb-2'>
        <Text className='text-2xl font-bold'>Faves</Text>
      </View>

      {/* Breakfast */}
      <View className='flex-row items-center justify-between mb-2'>
        <Text className='text-lg font-bold'>Breakfast</Text>
        <TouchableOpacity
          onPress={() => {
            router.push('/faves/Breakfast');
          }}
        >
          <Text className='font-semibold text-accent'>See all</Text>
        </TouchableOpacity>
      </View>

      <View className='flex-row space-x-2 overflow-hidden'>
        <View className='w-3/6 h-48 overflow-hidden rounded-md'>
          <ImageBackground
            src='https://img.spoonacular.com/recipes/756814-312x231.jpg'
            className='w-full h-full'
            resizeMode='cover'
          />
        </View>
        <View className='flex-col h-48 space-y-2 overflow-hidden rounded-md w-[182px]'>
          <View className='w-full overflow-hidden rounded-md h-3/6'>
            <ImageBackground
              src='https://img.spoonacular.com/recipes/655235-312x231.jpg'
              className='w-full h-full'
              resizeMode='cover'
            />
          </View>
          <View className='w-full overflow-hidden rounded-md h-3/6 '>
            <ImageBackground
              src='https://img.spoonacular.com/recipes/660368-312x231.jpg'
              className='w-full h-full'
              resizeMode='cover'
            >
              <View className='w-full h-full bg-black opacity-50' />
            </ImageBackground>
            <View className='absolute w-full h-full'>
              <Text className='pt-4 text-lg text-center text-white'>
                {recipeNumber}+
              </Text>
              <Text className='text-lg text-center text-white'>Recipes</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Lunch */}
      <View className='flex-row items-center justify-between mt-6 mb-2'>
        <Text className='text-lg font-bold'>Lunch</Text>
        <TouchableOpacity
          onPress={() => {
            router.push('/faves/Lunch');
          }}
        >
          <Text className='font-semibold text-accent'>See all</Text>
        </TouchableOpacity>
      </View>

      <View className='flex-row space-x-2 overflow-hidden'>
        <View className='w-3/6 h-48 overflow-hidden rounded-md'>
          <ImageBackground
            src='https://img.spoonacular.com/recipes/756814-312x231.jpg'
            className='w-full h-full'
            resizeMode='cover'
          />
        </View>
        <View className='flex-col h-48 space-y-2 overflow-hidden rounded-md w-[182px]'>
          <View className='w-full overflow-hidden rounded-md h-3/6'>
            <ImageBackground
              src='https://img.spoonacular.com/recipes/655235-312x231.jpg'
              className='w-full h-full'
              resizeMode='cover'
            />
          </View>
          <View className='w-full overflow-hidden rounded-md h-3/6 '>
            <ImageBackground
              src='https://img.spoonacular.com/recipes/660368-312x231.jpg'
              className='w-full h-full'
              resizeMode='cover'
            >
              <View className='w-full h-full bg-black opacity-50' />
            </ImageBackground>
            <View className='absolute w-full h-full'>
              <Text className='pt-4 text-lg text-center text-white'>
                {recipeNumber}+
              </Text>
              <Text className='text-lg text-center text-white'>Recipes</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Dinner */}
      <View className='pb-20 mb-20'>
        <View className='flex-row items-center justify-between mt-6 mb-2'>
          <Text className='text-lg font-bold'>Dinner</Text>
          <TouchableOpacity
            onPress={() => {
              router.push('/faves/Dinner');
            }}
          >
            <Text className='font-semibold text-accent'>See all</Text>
          </TouchableOpacity>
        </View>

        <View className='flex-row space-x-2 overflow-hidden'>
          <View className='w-3/6 h-48 overflow-hidden rounded-md'>
            <ImageBackground
              src='https://img.spoonacular.com/recipes/756814-312x231.jpg'
              className='w-full h-full'
              resizeMode='cover'
            />
          </View>
          <View className='flex-col h-48 space-y-2 overflow-hidden rounded-md w-[182px]'>
            <View className='w-full overflow-hidden rounded-md h-3/6'>
              <ImageBackground
                src='https://img.spoonacular.com/recipes/655235-312x231.jpg'
                className='w-full h-full'
                resizeMode='cover'
              />
            </View>
            <View className='w-full overflow-hidden rounded-md h-3/6 '>
              <ImageBackground
                src='https://img.spoonacular.com/recipes/660368-312x231.jpg'
                className='w-full h-full'
                resizeMode='cover'
              >
                <View className='w-full h-full bg-black opacity-50' />
              </ImageBackground>
              <View className='absolute w-full h-full'>
                <Text className='pt-4 text-lg text-center text-white'>
                  {recipeNumber}+
                </Text>
                <Text className='text-lg text-center text-white'>Recipes</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Fave;
