'use client';
import { Badge } from '@/components/ui/badge';
import { AuctionItem } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
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
  columnHelper.accessor('Name', {
    header: ({ column }) => (
      <div
        className="flex justify-start items-center gap-x-2 text-left cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        아이템명
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
  }),
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
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        현재 최저가
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
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
      if (!prev) return <Badge variant={'none'}>{'0.00%'}</Badge>;
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
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        전일 평균 거래가
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('YDayAvgPrice')}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('RecentPrice', {
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        최근 거래가
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
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
      if (!prev) return <Badge variant={'none'}>{'0.00%'}</Badge>;
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
