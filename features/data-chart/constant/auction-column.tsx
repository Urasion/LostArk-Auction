'use client';
import { Badge } from '@/components/ui/badge';
import { AuctionItem } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const columnHelper = createColumnHelper<AuctionItem>();
export const auction_columns = [
  /* columnHelper.display({
    id: 'select', // 식별자 필수

    header: ({ table }) => (
      <Checkbox
        className="mx-2"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="mx-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }), */
  columnHelper.accessor('Id', {
    header: 'ID',
  }),
  columnHelper.accessor('Icon', {
    header: '',
    cell: ({ row }) => (
      <Image
        src={row.getValue('Icon')}
        width={30}
        height={30}
        alt="아이템 이미지"
      />
    ),
  }),
  columnHelper.accessor('Name', { header: '각인서명' }),
  columnHelper.accessor('CurrentMinPrice', {
    header: '최저가',
    cell: ({ row }) => {
      const isPriceIncreasing =
        (row.getValue('YDayAvgPrice') as number) <
        (row.getValue('CurrentMinPrice') as number);
      return (
        <Badge variant={isPriceIncreasing ? 'increase' : 'decrease'}>
          {row.getValue('CurrentMinPrice')}{' '}
          {isPriceIncreasing ? <ArrowUp /> : <ArrowDown />}
        </Badge>
      );
    },
  }),
  columnHelper.accessor('YDayAvgPrice', {
    header: '전일 평균 거래가',
    cell: ({ row }) => {
      return <Badge variant={'none'}>{row.getValue('YDayAvgPrice')}</Badge>;
    },
  }),
  columnHelper.accessor('RecentPrice', {
    header: '최근 거래가',
    cell: ({ row }) => {
      const isPriceIncreasing =
        (row.getValue('YDayAvgPrice') as number) <
        (row.getValue('RecentPrice') as number);

      return (
        <Badge variant={isPriceIncreasing ? 'increase' : 'decrease'}>
          {row.getValue('RecentPrice')}{' '}
          {isPriceIncreasing ? <ArrowUp /> : <ArrowDown />}
        </Badge>
      );
    },
  }),
];
