import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { categories } from '@/constants/data';

const CategoryList = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, gap: 6 }}
    >
      {categories.map((category, i) => (
        <View key={i} className='px-4 py-2 border-2 rounded-md border-faded'>
          <TouchableOpacity>
            <Text className={`text-faded`}>{category}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
