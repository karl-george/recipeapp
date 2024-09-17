import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <Image src='/app/assets/images/logo.png' width={196} height={46} />
      <View className='items-center justify-center w-[196px] h-[46px]'>
        <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#EA7A22', '#F5A150']}
            className='items-center px-5 py-3 rounded-md'
          >
            <Text className='text-2xl font-bold text-white capitalize bg-transparent'>
              Get Started
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
