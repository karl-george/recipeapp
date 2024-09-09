import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const pathname = usePathname();
  const router = useRouter();

  return (
    <View className='flex-row items-center w-full h-10 p-2 mb-6 space-x-4 bg-white border rounded-md border-faded'>
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert('No search term, Please enter a search term');
          }

          if (pathname.startsWith('/search')) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
          }
        }}
      >
        <Ionicons name='search' size={20} color={'#AEAAAA'} />
      </TouchableOpacity>
      <TextInput
        className='flex-1'
        placeholder='Search for recipes...'
        placeholderTextColor={'#AEAAAA'}
        value={query}
        onChangeText={(e) => setQuery(e)}
      />
      {/* //Todo: Add a cross icon that deletes the entered text to the right side */}
    </View>
  );
};

export default SearchBar;
