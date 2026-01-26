'use client';

import useFavorite from '@/hooks/useFavorite';
import { DataTable } from '../data-table/components/data-table';
import { AUCTION_COLUMNS } from '../data-table/constant/auction-column';
import { useQuery } from '@tanstack/react-query';
import getFavoritesDetail from '@/api/favorites';
import { AuctionItemDetail } from '@/store/auction';

export default function FavoriteList() {
  const { getFavorites } = useFavorite();
  const data = getFavorites();

  const { data: favorites } = useQuery({
    queryKey: ['favorites'],
    queryFn: (): Promise<AuctionItemDetail> =>
      getFavoritesDetail(data.map((item) => String(item.Id))),
  });
  console.log(favorites);
  return <DataTable data={data} columns={AUCTION_COLUMNS} />;
}
