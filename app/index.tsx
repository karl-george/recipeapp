import CategoryList from '@/components/CategoryList';
import FoodCard from '@/components/FoodCard';
import { data } from '@/constants/data';
import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Index() {
  const [categorySelected, setCategorySelected] = useState('Breakfast');

  return (
    <ScrollView className='px-4 bg-bgFaded'>
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

      <FlatList
        data={data.hits}
        contentContainerStyle={{}}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <FoodCard
            label={item.recipe.label}
            image={item.recipe.images.SMALL}
            time={item.recipe.totalTime}
            calories={item.recipe.calories}
          />
        )}
      />
    </ScrollView>
  );
}
