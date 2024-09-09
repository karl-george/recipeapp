import { View, Text, ScrollView, StatusBar, FlatList } from 'react-native';
import React from 'react';
import SearchBar from '@/components/SearchBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { data } from '@/constants/data';
import FoodCard from '@/components/FoodCard';

const Search = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { query } = useLocalSearchParams();

  let length = 1;

  return (
    <ScrollView
      className='px-4 bg-bgFaded'
      style={{ paddingTop: top + 24 }}
      showsHorizontalScrollIndicator={false}
    >
      <StatusBar backgroundColor={'#F6F6F6'} />
      {/* Search Bar */}
      <SearchBar />

      <View className=''>
        {length === 0 && !query && (
          <Text className='items-center mt-24 text-xl text-center'>
            Search for delicious recipes
          </Text>
        )}
        {length === 0 && query && (
          <Text className='items-center mt-24 text-xl text-center'>
            No results found
          </Text>
        )}
      </View>
      {length > 0 && (
        <View>
          <Text className='mb-2 text-xl font-bold'>{query}</Text>
          <FlatList
            data={data?.results}
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
