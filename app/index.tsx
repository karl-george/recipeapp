import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View className='bg-[#DDEFE3] w-full h-full'>
      <View className='w-full h-full'>
        {/* Image */}
        <Image
          source={require('@/assets/images/start-img.jpg')}
          resizeMode='cover'
          className='w-full h-[60%]'
        />
        {/* Text */}
        <View className='space-y-3'>
          <Text className='text-4xl font-bold text-center text-accent'>
            Find Your
          </Text>
          <Text className='text-4xl font-bold text-center text-accent'>
            Perfect Recipes
          </Text>
          <Text className='text-4xl font-bold text-center text-accent'>
            Today
          </Text>
        </View>
        {/* Button */}
        <View className='items-center justify-center mt-20'>
          <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#EA7A22', '#F5A150']}
              className='items-center px-12 py-3 rounded-md'
            >
              <Text className='text-2xl font-bold text-white capitalize bg-transparent'>
                Get Started
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
