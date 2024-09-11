import CategoryList from '@/components/CategoryList';
import FoodCard from '@/components/FoodCard';
import SearchBar from '@/components/SearchBar';
import { Recipes } from '@/types';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipes>();
  const [categorySelected, setCategorySelected] = useState('breakfast');
  const [loading, setLoading] = useState(false);

  const { top, bottom } = useSafeAreaInsets();

  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&type=${categorySelected}&instructionsRequired=true&addRecipeInformation=true`
      );

      const data = await res.json();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [categorySelected]);

  return (
    <ScrollView
      className='px-4 bg-bgFaded'
      style={{ paddingTop: top + 24 }}
      showsHorizontalScrollIndicator={false}
    >
      <StatusBar backgroundColor={'#F6F6F6'} />
      {loading && <ActivityIndicator size='large' color='#000' />}
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
        data={recipes?.results}
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
