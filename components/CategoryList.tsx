import { categories } from '@/constants/data';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const CategoryList = ({ categorySelected, setCategorySelected }: any) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 8,
      }}
    >
      {categories.map((category, i) => (
        <View key={i}>
          <TouchableOpacity onPress={() => setCategorySelected(category)}>
            {categorySelected === category ? (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#EA7A22', '#F5A150']}
                className='items-center px-5 py-3 rounded-md'
              >
                <Text className='font-semibold text-white capitalize bg-transparent'>
                  {category}
                </Text>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                className='items-center px-5 py-[11px] border rounded-md border-faded'
                onPress={() => setCategorySelected(category)}
              >
                <Text className='capitalize text-faded'>{category}</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
