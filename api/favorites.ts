import { appClient } from '@/lib/apiClient';
import { AuctionItemDetail } from '@/store/auction';

export default async function getFavoritesDetail(
  itemIds: string[],
): Promise<AuctionItemDetail> {
  const data = await appClient<AuctionItemDetail>('/api/favorites', {
    method: 'POST',
    body: JSON.stringify({ itemIds: itemIds }),
  });
  return data;
}
