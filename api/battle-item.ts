import { apiClient } from '@/lib/apiClient';
import {
  AuctionItem,
  AuctionItemDetailResponse,
  AuctionItemRequest,
  AuctionItemResponse,
} from '@/store/auction';
import { delay } from '@/utils/utils';
import { unstable_cache } from 'next/cache';

async function fetchBattleItem(request: AuctionItemRequest) {
  let pageNo = 1;
  let isRunning = true;
  const battle_items: AuctionItem[] = [];
  while (isRunning) {
    const data = await apiClient<AuctionItemResponse>('/markets/items', {
      method: 'POST',
      body: JSON.stringify({
        ...request,
        PageNo: pageNo,
        Sort: 'CURRENT_MIN_PRICE',
        CharacterClass: '',
        ItemTier: null,
        CategoryCode: 60000,
        SortCondition: 'DESC',
      }),
    });
    if (!data.Items || data.Items.length === 0) {
      isRunning = false;
    }
    battle_items.push(...data.Items);
    pageNo++;
    await delay(100);
  }
  return battle_items;
}

export const getBattleItems = unstable_cache(
  fetchBattleItem,
  ['battle-item-list'],
  { revalidate: 300, tags: ['battle-items'] },
);

export async function getBattleItemDetail(id: string) {
  const data = await apiClient<AuctionItemDetailResponse[]>(
    `/markets/items/${id}`,
    {
      method: 'GET',
      next: { revalidate: 600 },
    },
  );
  const sorted_data = data.map((Item) => {
    Item.Stats.reverse();
    return Item;
  });
  return sorted_data[0];
}
