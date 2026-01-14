import { apiClient } from '@/lib/apiClient';
import {
  AuctionItem,
  AuctionItemDetailResponse,
  AuctionItemRequest,
  AuctionItemResponse,
} from '@/store/auction';
import { delay } from '@/utils/utils';

export async function getRecipeList(request: AuctionItemRequest) {
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
    });
    if (!data.Items || data.Items.length === 0) {
      isRunning = false;
    }
    recipe_list.push(...data.Items);
    pageNo++;
    await delay(200);
  }
  return recipe_list;
}

export async function getRecipeDetail(id: string) {
  const data = await apiClient<AuctionItemDetailResponse[]>(
    `/markets/items/${id}`,
    {
      method: 'GET',
    }
  );
  const sorted_data = data.map((Item) => {
    Item.Stats.reverse();
    return Item;
  });
  console.log('sorted_data', sorted_data);
  return sorted_data;
}
