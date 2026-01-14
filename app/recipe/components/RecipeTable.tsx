'use client';
import { AUCTION_COLUMNS } from '@/features/data-table/constant/auction-column';
import { DataTable } from '@/features/data-table/data-table';
import { AuctionItem } from '@/store/auction';
import { useRouter } from 'next/navigation';

interface Props {
  data: AuctionItem[];
}
export default function RecipeTable({ data }: Props) {
  const router = useRouter();

  const onRowClick = (item: AuctionItem) => {
    router.push(`/recipe/${item.Id}`);
  };
  return (
    <DataTable data={data} columns={AUCTION_COLUMNS} onRowClick={onRowClick} />
  );
}
