import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View className='items-center justify-center flex-1'>
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Text>Link</Text>
      </TouchableOpacity>
    </View>
  );
}
