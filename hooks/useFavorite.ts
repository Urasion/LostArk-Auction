import { convertAuctionItemToFavoriteItem } from './../utils/utils';
import { AuctionItem } from '@/store/auction';
import { FavoriteItem } from '@/store/favorites';
import { useAtom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage<FavoriteItem[]>(() => {
  if (typeof window === 'undefined') {
    return {
      getItem: () => null,
      setItem: () => null,
      removeItem: () => null,
    };
  }
  return localStorage;
});

export const favoriteAtom = atomWithStorage<FavoriteItem[]>(
  'loatark-auction-favorites',
  [],
  storage,
);
export default function useFavorite() {
  const [favorites, setFavorites] = useAtom(favoriteAtom);

  const isFavorite = (itemId: number) =>
    favorites.some((item) => item.Id === itemId);

  const toggleFavorite = (itemId: number, itemToAdd?: AuctionItem) => {
    if (isFavorite(itemId)) {
      setFavorites((prev) => prev.filter((item) => item.Id !== itemId));
    } else {
      if (itemToAdd) {
        setFavorites((prev) => [
          ...prev,
          convertAuctionItemToFavoriteItem(itemToAdd),
        ]);
      }
    }
  };

  const getFavorites = () => {
    return favorites;
  };

  const updateFavoriteBasicPrice = <K extends keyof FavoriteItem>(
    itemId: number,
    key: K,
    value: FavoriteItem[K],
  ) => {
    setFavorites((prev) =>
      prev.map((item) =>
        item.Id === itemId ? { ...item, [key]: value } : item,
      ),
    );
  };

  return {
    updateFavoriteBasicPrice,
    isFavorite,
    toggleFavorite,
    getFavorites,
  };
}
