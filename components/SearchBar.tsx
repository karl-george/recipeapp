import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

const SearchBar = () => {
  return (
    <View className='flex-row items-center w-full h-10 p-2 mb-6 space-x-4 bg-white border rounded-md border-faded'>
      <TouchableOpacity>
        <Ionicons name='search' size={20} color={'#AEAAAA'} />
      </TouchableOpacity>
      <TextInput
        className='flex-1'
        placeholder='Search for recipes...'
        placeholderTextColor={'#AEAAAA'}
      />
      {/* //Todo: Add a cross icon that deletes the entered text to the right side */}
    </View>
  );
};

export default SearchBar;
