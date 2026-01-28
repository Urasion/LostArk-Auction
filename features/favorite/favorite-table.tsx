'use client';

import useFavorite from '@/hooks/useFavorite';
import { DataTable } from '../data-table/components/data-table';
import { useQuery } from '@tanstack/react-query';
import getFavoritesDetail from '@/api/favorites';
import { FAVORITE_COLUMN } from '../data-table/constant/favorite-column';
import { FavoriteItem, FavoriteItemResponse } from '@/store/favorites';
import { useMemo } from 'react';

export default function FavoriteList() {
  const { getFavorites } = useFavorite();
  const favorites = getFavorites();

  const { data: currentPrices = [] } = useQuery({
    queryKey: ['favorites', favorites.map((item) => item.Id)],
    queryFn: (): Promise<FavoriteItemResponse[]> =>
      getFavoritesDetail(favorites),
  });
  const data = useMemo<FavoriteItem[]>(() => {
    return favorites.flatMap((item, index) => {
      if (!currentPrices.at(index)) {
        return [];
      }
      return { ...item, ...currentPrices.at(index) };
    });
  }, [favorites, currentPrices]);

  return <DataTable data={data} columns={FAVORITE_COLUMN} />;
}
