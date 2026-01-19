'use client';
import { Badge } from '@/components/ui/badge';
import { AuctionItem } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const columnHelper = createColumnHelper<AuctionItem>();
export const AUCTION_COLUMNS = [
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
  columnHelper.accessor('Name', { header: '아이템명' }),
  columnHelper.accessor('Grade', {
    header: () => <div className="text-center">등급</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center ">
          <Badge variant={row.getValue('Grade')}>{row.getValue('Grade')}</Badge>
        </div>
      );
    },
  }),
  columnHelper.accessor('CurrentMinPrice', {
    header: () => <div className="text-right">현재 최저가</div>,
    meta: { align: 'right' },
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('CurrentMinPrice')}</span>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: 'YDayAvgPriceChangeRate',
    cell: ({ row }) => {
      const isPriceIncreasing =
        (row.getValue('YDayAvgPrice') as number) <
        (row.getValue('CurrentMinPrice') as number);
      const priceDecrease =
        (row.getValue('CurrentMinPrice') as number) -
        (row.getValue('YDayAvgPrice') as number);
      const current = row.getValue('CurrentMinPrice') as number;
      const prev = row.getValue('YDayAvgPrice') as number;
      if (!prev) return '0.00%';
      const rawRate = ((current - prev) / prev) * 100;
      const formattedRate = '(' + +rawRate.toFixed(2) + '%' + ')';

      return (
        <Badge variant={isPriceIncreasing ? 'increase' : 'decrease'}>
          {isPriceIncreasing ? <ArrowUp /> : <ArrowDown />}
          {priceDecrease.toFixed(1)}
          <span className="text-[11px]"> {formattedRate}</span>
        </Badge>
      );
    },
  }),

  columnHelper.accessor('YDayAvgPrice', {
    header: () => <div className="text-right">전일 평군 거래가</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('YDayAvgPrice')}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('RecentPrice', {
    header: () => <div className="text-right">최근 거래가</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('RecentPrice')}</span>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: 'RecentPriceChangeRate',
    cell: ({ row }) => {
      const isPriceIncreasing =
        (row.getValue('YDayAvgPrice') as number) <
        (row.getValue('RecentPrice') as number);
      const priceDecrease =
        (row.getValue('RecentPrice') as number) -
        (row.getValue('YDayAvgPrice') as number);
      const current = row.getValue('RecentPrice') as number;
      const prev = row.getValue('YDayAvgPrice') as number;
      if (!prev) return '0.00%';
      const rawRate = ((current - prev) / prev) * 100;
      const formattedRate = '(' + +rawRate.toFixed(2) + '%' + ')';

      return (
        <Badge variant={isPriceIncreasing ? 'increase' : 'decrease'}>
          {isPriceIncreasing ? <ArrowUp /> : <ArrowDown />}
          {priceDecrease.toFixed(1)}
          <span className="text-[11px]"> {formattedRate}</span>
        </Badge>
      );
    },
  }),
];
