import FoodCard from '@/components/FoodCard';
import { Recipes } from '@/types';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CategoryList = () => {
  const [recipes, setRecipes] = useState<Recipes>();
  const [loading, setLoading] = useState(false);

  const { cat } = useLocalSearchParams();
  const { top, bottom } = useSafeAreaInsets();

  const fetchRecipe = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.apiKey}&type=${cat}&instructionsRequired=true&addRecipeInformation=true`
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
  }, [cat]);

  return (
    <ScrollView
      className='px-4 pt-4 bg-bgFaded'
      showsHorizontalScrollIndicator={false}
    >
      <Stack.Screen
        options={{
          headerTitle: `${cat}`,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#F6F6F6' },
          headerShadowVisible: false,
        }}
      />
      <StatusBar backgroundColor={'#F6F6F6'} />
      {loading && <ActivityIndicator size='large' color='#000' />}

      <FlatList
        data={recipes?.results}
        contentContainerStyle={{ marginBottom: bottom + 24 }}
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
};

export default CategoryList;
