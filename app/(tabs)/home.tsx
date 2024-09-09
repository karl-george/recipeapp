import CategoryList from '@/components/CategoryList';
import FoodCard from '@/components/FoodCard';
import SearchBar from '@/components/SearchBar';
import { data } from '@/constants/data';
import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {
  const [categorySelected, setCategorySelected] = useState('Breakfast');

  const { top, bottom } = useSafeAreaInsets();

  // const fetchRecipe = async () => {
  //   const res = await fetch(
  //     'https://api.spoonacular.com/recipes/complexSearch?${process.env.apiKey}&type=breakfast&instructionsRequired=true&addRecipeInformation=true'
  //   );

  //   const data = await res.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchRecipe();
  // }, []);

  return (
    <ScrollView
      className='px-4 bg-bgFaded'
      style={{ paddingTop: top + 24 }}
      showsHorizontalScrollIndicator={false}
    >
      <StatusBar backgroundColor={'#F6F6F6'} />
      {/* Search Bar */}
      <SearchBar />
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
        data={data?.results}
        contentContainerStyle={{ marginBottom: bottom + 128 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <FoodCard
            id={item.id}
            title={item.title}
            image={item.image}
            readyInMinutes={item.readyInMinutes}
            likes={item.aggregateLikes}
          />
        )}
      />
    </ScrollView>
  );
}
