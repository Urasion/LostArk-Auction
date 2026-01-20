import { apiClient } from '@/lib/apiClient';
import {
  AuctionItem,
  AuctionItemDetailResponse,
  AuctionItemRequest,
  AuctionItemResponse,
} from '@/store/auction';
import { delay } from '@/utils/utils';
import { unstable_cache } from 'next/cache';

async function fetchRecipeList(request: AuctionItemRequest) {
  let pageNo = 1;
  let isRunning = true;
  const recipe_list: AuctionItem[] = [];
  while (isRunning) {
    const data = await apiClient<AuctionItemResponse>('/markets/items', {
      method: 'POST',
      body: JSON.stringify({
        ...request,
        PageNo: pageNo,
        Sort: 'CURRENT_MIN_PRICE',
        CharacterClass: '',
        ItemTier: null,
        CategoryCode: 40000,
        SortCondition: 'DESC',
      }),
      next: { revalidate: 600 },
    });
    if (!data.Items || data.Items.length === 0) {
      isRunning = false;
    }
    recipe_list.push(...data.Items);
    pageNo++;
    await delay(100);
  }
  return recipe_list;
}

export const getRecipeList = unstable_cache(fetchRecipeList, ['recipe-list'], {
  revalidate: 1,
  tags: ['recipes'],
});

export async function getRecipeDetail(id: string) {
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
