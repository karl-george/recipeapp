import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create(
  persist(
    (set, get) => ({
      FavoritesList: [],
      toggleFavorite: (id: number) => {
        set((state: any) => ({
          FavoritesList: state.FavoritesList.includes(id)
            ? state.FavoritesList.filter((item: any) => item !== id)
            : [...state.FavoritesList, id],
        }));
      },
    }),
    {
      name: 'recipe-app',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
