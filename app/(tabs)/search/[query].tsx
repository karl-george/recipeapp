import FoodCard from '@/components/FoodCard';
import SearchBar from '@/components/SearchBar';
import { Recipes } from '@/types';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Search = () => {
  const [recipes, setRecipes] = useState<Recipes>();
  const [loading, setLoading] = useState(false);

  const { top, bottom } = useSafeAreaInsets();
  const { query } = useLocalSearchParams();

  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&query=${query}&instructionsRequired=true&addRecipeInformation=true`
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
  }, [query]);

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

      <View className=''>
        {recipes?.results.length === 0 && !query && (
          <Text className='items-center mt-24 text-xl text-center'>
            Search for delicious recipes
          </Text>
        )}
        {recipes?.results.length === 0 && query && (
          <Text className='items-center mt-24 text-xl text-center'>
            No results found
          </Text>
        )}
      </View>
      {recipes?.results.length! > 0 && (
        <View>
          <Text className='mb-2 text-xl font-bold'>{query}</Text>
          <FlatList
            data={recipes?.results}
            contentContainerStyle={{ marginBottom: bottom + 124 }}
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
        </View>
      )}
    </ScrollView>
  );
};

export default Search;
