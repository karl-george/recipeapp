import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { detailedRecipe } from '@/constants/data';

const RecipeDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView>
      <View>
        {/* Image */}
        {/* Back Button */}
        {/* Fave Button */}
      </View>
      {/* Info */}
      <View>
        {/* Title */}
        {/* mins and calories */}
        {/* Description */}
        {/* Ingredients */}
        {/* Directions */}
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
