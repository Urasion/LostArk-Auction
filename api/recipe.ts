import { apiClient } from '@/lib/apiClient';
import {
  AuctionItemDetailResponse,
  AuctionItemRequest,
  AuctionItemResponse,
} from '@/store/auction';
import { useQuery } from '@tanstack/react-query';

export function getRecipeList(request: AuctionItemRequest) {
  return apiClient<AuctionItemResponse>('/markets/items', {
    method: 'POST',
    body: JSON.stringify({
      ...request,
      Sort: 'GRADE',
      CharacterClass: '',
      ItemTier: null,
      CategoryCode: 40000,
      SortCondition: 'ASC',
    }),
  });
}

export function getRecipeDetail(id: number) {
  return apiClient<AuctionItemDetailResponse>(`/markets/items/${id}`, {
    method: 'GET',
  });
}
