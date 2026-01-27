import { apiClient } from '@/lib/apiClient';
import {
  AuctionItem,
  AuctionItemDetailResponse,
  AuctionItemDetailResponseDTO,
  AuctionItemRequest,
  AuctionItemResponse,
} from '@/store/auction';
import { delay } from '@/utils/utils';
import { unstable_cache } from 'next/cache';

async function fetchBattleItem(request: AuctionItemRequest) {
  let pageNo = 1;
  let isRunning = true;
  const battleItems: AuctionItem[] = [];
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
    battleItems.push(
      ...data.Items.map((item) => ({
        ...item,
        Type: '/battle-items' as const,
      })),
    );
    pageNo++;
    await delay(100);
  }
  return battleItems;
}

export const getBattleItems = unstable_cache(
  fetchBattleItem,
  ['battle-item-list'],
  { revalidate: 300, tags: ['battle-items'] },
);

export async function getBattleItemDetail(
  id: string,
): Promise<AuctionItemDetailResponse> {
  const data = await apiClient<AuctionItemDetailResponseDTO[]>(
    `/markets/items/${id}`,
    {
      method: 'GET',
      next: { revalidate: 300 },
    },
  );
  const sortedData = data.map((Item) => {
    Item.Stats.reverse();
    return Item;
  });
  const enrichedData = sortedData[0].Stats.map((item, index) => {
    const prevItem = sortedData[0].Stats[index - 1];
    const diffAvgPrice = prevItem ? item.AvgPrice - prevItem.AvgPrice : 0;
    const diffTradeCount = prevItem ? item.TradeCount - prevItem.TradeCount : 0;
    return { ...item, diffAvgPrice, diffTradeCount };
  });

  return { Name: sortedData[0].Name, Stats: enrichedData };
}
