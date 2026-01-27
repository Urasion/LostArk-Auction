import { convertAuctionItemToFavoriteItem } from './../utils/utils';
import { AuctionItem } from '@/store/auction';
import { FavoriteItem } from '@/store/favorites';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const atom = atomWithStorage<FavoriteItem[]>('loatark-auction-favorites', []);
export default function useFavorite() {
  const [favorites, setFavorites] = useAtom(atom);

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
      prev.map((item) => (item.Id === itemId ? { ...item, key: value } : item)),
    );
  };

  return {
    updateFavoriteBasicPrice,
    isFavorite,
    toggleFavorite,
    getFavorites,
  };
}
