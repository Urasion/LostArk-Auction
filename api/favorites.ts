import { appClient } from '@/lib/apiClient';
import { AuctionItemDetail } from '@/store/auction';
import { FavoriteItem } from '@/store/favorites';

export default async function getFavoritesDetail(
  items: FavoriteItem[],
): Promise<AuctionItemDetail> {
  const data = await appClient<AuctionItemDetail>('/api/favorites', {
    method: 'POST',
    body: JSON.stringify(
      items.map((item) => ({ itemId: String(item.Id), type: item.Type })),
    ),
  });
  return data;
}
