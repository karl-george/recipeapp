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

const Fave = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView className='px-4 bg-bgFaded' style={{ paddingTop: top + 24 }}>
      <StatusBar backgroundColor={'#F6F6F6'} />
      <View className='mb-2'>
        <Text className='text-2xl font-bold'>Faves</Text>
      </View>

      {/* Breakfast */}
      <View className='flex-row items-center justify-between mb-2'>
        <Text className='text-lg font-bold'>Breakfast</Text>
        <TouchableOpacity onPress={() => {}}>
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
          <View className='w-full overflow-hidden rounded-md h-3/6'>
            <ImageBackground
              src='https://img.spoonacular.com/recipes/660368-312x231.jpg'
              className='w-full h-full'
              resizeMode='cover'
            />
          </View>
        </View>
      </View>

      {/* https://img.spoonacular.com/recipes/756814-312x231.jpg */}
      {/* https://img.spoonacular.com/recipes/655235-312x231.jpg */}
      {/* https://img.spoonacular.com/recipes/660368-312x231.jpg */}

      {/* Lunch */}
      <View className='flex-row items-center justify-between mb-2'>
        <Text className='text-lg font-bold'>Lunch</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text className='font-semibold text-accent'>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Dinner */}
      <View className='flex-row items-center justify-between mb-2'>
        <Text className='text-lg font-bold'>Dinner</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text className='font-semibold text-accent'>See all</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Fave;
