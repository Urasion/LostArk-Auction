import { apiClient } from '@/lib/apiClient';
import {
  AuctionItem,
  AuctionItemDetailResponse,
  AuctionItemRequest,
  AuctionItemResponse,
} from '@/store/auction';
import { delay } from '@/utils/utils';
import { unstable_cache } from 'next/cache';

async function fetchArkgridGem(request: AuctionItemRequest) {
  let pageNo = 1;
  let isRunning = true;
  const arkgrid_gem: AuctionItem[] = [];
  while (isRunning) {
    const data = await apiClient<AuctionItemResponse>('/markets/items', {
      method: 'POST',
      body: JSON.stringify({
        ...request,
        PageNo: pageNo,
        Sort: 'CURRENT_MIN_PRICE',
        CharacterClass: '',
        ItemTier: null,
        CategoryCode: 230000,
        SortCondition: 'DESC',
      }),
    });
    if (!data.Items || data.Items.length === 0) {
      isRunning = false;
    }
    arkgrid_gem.push(...data.Items);
    pageNo++;
    await delay(100);
  }
  return arkgrid_gem;
}

export const getArkgridGem = unstable_cache(
  fetchArkgridGem,
  ['arkgrid-gem-list'],
  { revalidate: 600, tags: ['gems'] },
);

export async function getArkgridGemDetail(id: string) {
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
  return sorted_data[1];
}
