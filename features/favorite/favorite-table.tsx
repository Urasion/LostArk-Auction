'use client';

import useFavorite from '@/hooks/useFavorite';
import { DataTable } from '../data-table/components/data-table';
import { useQuery } from '@tanstack/react-query';
import getFavoritesDetail from '@/api/favorites';
import { FAVORITE_COLUMN } from '../data-table/constant/favorite-column';
import { FavoriteItem } from '@/store/favorites';

export default function FavoriteList() {
  const { getFavorites } = useFavorite();
  const data = getFavorites();

  const { data: favorites } = useQuery({
    queryKey: ['favorites'],
    queryFn: (): Promise<FavoriteItem[]> => getFavoritesDetail(data),
  });
  return <DataTable data={favorites ?? []} columns={FAVORITE_COLUMN} />;
}
