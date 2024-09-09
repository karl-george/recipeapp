import { View, Text, StatusBar, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { data } from '@/constants/data';
import FoodCard from '@/components/FoodCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FaveCategory = () => {
  const { cat } = useLocalSearchParams();
  const { top, bottom } = useSafeAreaInsets();

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

      <FlatList
        data={data?.results}
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

export default FaveCategory;
