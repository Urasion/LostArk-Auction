import { appClient } from '@/lib/apiClient';
import { FavoriteItem, FavoriteItemResponse } from '@/store/favorites';
import { favoriteRequestItemScheme } from '@/store/request_scheme';
import { z } from 'zod';

export default async function getFavoritesDetail(
  items: FavoriteItem[],
): Promise<FavoriteItemResponse[]> {
  const favoriteList = await appClient<FavoriteItemResponse[]>(
    '/api/favorites',
    {
      method: 'POST',
      body: JSON.stringify(
        items.map(
          (item) =>
            ({ Id: item.Id, Type: item.Type }) as z.infer<
              typeof favoriteRequestItemScheme
            >,
        ),
      ),
    },
  );
  return favoriteList;
}
