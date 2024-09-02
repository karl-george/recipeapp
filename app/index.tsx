import CategoryList from '@/components/CategoryList';
import FoodCard from '@/components/FoodCard';
import { data } from '@/constants/data';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [categorySelected, setCategorySelected] = useState('Breakfast');

  return (
    <View className='px-4 bg-bgFaded'>
      {/* Search Bar */}
      {/*// todo  */}
      {/* Categories */}
      <View className='flex-row items-center justify-between mb-2'>
        <Text className='text-xl font-bold'>Categories</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text className='font-semibold text-accent'>See all</Text>
        </TouchableOpacity>
      </View>

      <CategoryList
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />

      {/* Recommended */}
      <View className='flex-row items-center justify-between mt-6 mb-2'>
        <Text className='text-xl font-bold'>Recommended</Text>
      </View>

      <FlatList data={data.hits} renderItem={({ item }) => <FoodCard />} />
    </View>
  );
}
