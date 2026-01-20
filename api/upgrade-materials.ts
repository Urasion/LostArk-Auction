import { apiClient } from '@/lib/apiClient';
import {
  AuctionItem,
  AuctionItemDetailResponse,
  AuctionItemRequest,
  AuctionItemResponse,
} from '@/store/auction';
import { delay } from '@/utils/utils';
import { unstable_cache } from 'next/cache';

async function fetchUpgradeMaterials(request: AuctionItemRequest) {
  let pageNo = 1;
  let isRunning = true;
  const upgrade_materials: AuctionItem[] = [];
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
      next: { revalidate: 600 },
    });
    if (!data.Items || data.Items.length === 0) {
      isRunning = false;
    }
    upgrade_materials.push(...data.Items);
    pageNo++;
    await delay(100);
  }
  return upgrade_materials;
}

export const getUpgradeMaterials = unstable_cache(
  fetchUpgradeMaterials,
  ['upgrade-materials-list'],
  { revalidate: 600, tags: ['upgrade-materials'] },
);

export async function getUpgradeMaterialsDetail(id: string) {
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
