import { AuctionItem } from '@/store/auction';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const atom = atomWithStorage<AuctionItem[]>('loatark-auction-favorites', []);
export default function useFavorite(itemId: number) {
  const [favorites, setFavorites] = useAtom(atom);

  const isFavorite = favorites.some((item) => item.Id === itemId);

  const toggleFavorite = (itemToAdd?: AuctionItem) => {
    console.log(itemToAdd);
    if (isFavorite) {
      setFavorites((prev) => prev.filter((item) => item.Id !== itemId));
    } else {
      if (itemToAdd) {
        setFavorites((prev) => [...prev, itemToAdd]);
      }
    }
  };

  console.log(favorites);

  return { isFavorite, toggleFavorite };
}
