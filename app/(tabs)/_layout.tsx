import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EA7A22',
        tabBarStyle: {
          backgroundColor: '#F6F6F6',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search/[query]'
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='fave'
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='heart' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
