import FoodCard from '@/components/FoodCard';
import { data } from '@/constants/data';
import { useStore } from '@/store/store';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FaveCategory = () => {
  const { cat } = useLocalSearchParams();
  const { top, bottom } = useSafeAreaInsets();

  const FavoriteList = useStore((state: any) => state.FavoritesList);
  const resetStore = useStore((state: any) => state.resetStore);

  // console.log('faves', FavoriteList);

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

      <TouchableOpacity onPress={() => resetStore()}>
        <Text>Reset</Text>
      </TouchableOpacity>

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
