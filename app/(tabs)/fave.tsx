import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
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
