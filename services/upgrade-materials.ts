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

async function fetchUpgradeMaterials(request: AuctionItemRequest) {
  let pageNo = 1;
  let isRunning = true;
  const upgradeMaterials: AuctionItem[] = [];
  while (isRunning) {
    const data = await apiClient<AuctionItemResponse>('/markets/items', {
      method: 'POST',
      body: JSON.stringify({
        ...request,
        PageNo: pageNo,
        Sort: 'CURRENT_MIN_PRICE',
        CharacterClass: '',
        ItemTier: 4,
        CategoryCode: 50000,
        SortCondition: 'DESC',
      }),
    });
    if (!data.Items || data.Items.length === 0) {
      isRunning = false;
    }
    upgradeMaterials.push(
      ...data.Items.map((item) => ({ ...item, Type: '/upgrade' as const })),
    );
    pageNo++;
    await delay(100);
  }
  return upgradeMaterials;
}

export const getUpgradeMaterials = unstable_cache(
  fetchUpgradeMaterials,
  ['upgrade-materials-list'],
  { revalidate: 60, tags: ['upgrade-materials'] },
);

export async function getUpgradeMaterialsDetail(
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
    const reversedStats = [...Item.Stats].reverse();
    return { ...Item, Stats: reversedStats };
  });

  if (!sortedData[0]) {
    throw new Error('데이터를 찾을 수 없습니다.');
  }
  const enrichedData = sortedData[0].Stats.map((item, index) => {
    const prevItem = sortedData[0].Stats[index - 1];
    const prevAvgPrice = prevItem ? prevItem.AvgPrice : 0;
    const prevTradeCount = prevItem ? prevItem.TradeCount : 0;

    return {
      ...item,
      prevAvgPrice,
      prevTradeCount,
    };
  });

  return { Name: sortedData[0].Name, Stats: enrichedData, Id: id };
}
