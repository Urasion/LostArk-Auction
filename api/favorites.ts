import { appClient } from '@/lib/apiClient';
import { FavoriteItem } from '@/store/favorites';
import { requestItemScheme } from '@/store/request_scheme';
import { z } from 'zod';

export default async function getFavoritesDetail(
  items: FavoriteItem[],
): Promise<FavoriteItem[]> {
  const favoriteList = await appClient<FavoriteItem[]>('/api/favorites', {
    method: 'POST',
    body: JSON.stringify(
      items.map((item) => item as z.infer<typeof requestItemScheme>),
    ),
  });
  return favoriteList;
}
