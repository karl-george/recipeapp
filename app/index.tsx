import CategoryList from '@/components/CategoryList';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View className='px-4 bg-bgFaded'>
      {/* Search Bar */}
      {/*// todo  */}
      {/* Categories */}
      <View className='flex-row items-center justify-between'>
        <Text className='text-xl font-bold'>Categories</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text className='font-semibold text-accent'>See all</Text>
        </TouchableOpacity>
      </View>

      <CategoryList />
      {/* Recommended */}
      {/* // todo */}
    </View>
  );
}
