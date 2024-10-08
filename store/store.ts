import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '@/types';

export const useStore = create(
  persist(
    (set, get) => ({
      FavoritesList: [],
      toggleFavorite: (recipe: Recipe) => {
        set((state: any) => ({
          FavoritesList: state.FavoritesList.map((item: any) => {
            console.log('itemid', item.id, 'recipeid', recipe.id);
            if (item.id == recipe.id) {
              item.favorite = !item.favorite;
              if (item.favorite) {
                state.FavoritesList.unshift(item);
                console.log('added fave');
              } else {
                state.FavoritesList.splice(
                  state.FavoritesList.indexOf(item.id),
                  1
                );
              }
            } else {
              state.FavoritesList.unshift(recipe);
              console.log('[pushed]');
            }
          }),
        }));
      },
      resetStore: () => {
        set({ FavoritesList: [] });
        console.log('cleared');
      },
    }),
    {
      name: 'recipe-app',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
