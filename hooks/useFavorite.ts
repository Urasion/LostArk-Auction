import { AuctionItem } from '@/store/auction';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const atom = atomWithStorage<AuctionItem[]>('loatark-auction-favorites', []);
export default function useFavorite() {
  const [favorites, setFavorites] = useAtom(atom);
}
