'use client';
import { Badge } from '@/components/ui/badge';
import { AuctionItemDetail } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const columnHelper = createColumnHelper<AuctionItemDetail>();
export const AUCTION_DETAIL_COLUMNS = [
  columnHelper.accessor('Date', {
    header: () => <div className="text-center">날짜</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center ">
          <span>{row.getValue('Date')}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('AvgPrice', {
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        평균 거래가
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
    cell: ({ row }) => {
      const avgPrice = (row.getValue('AvgPrice') as number).toFixed(1);
      return (
        <div className="text-right ">
          <span>{avgPrice}</span>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: 'YDayAvgPriceChangeRate',
    cell: ({ row, table }) => {
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

  columnHelper.accessor('TradeCount', {
    header: ({ column }) => (
      <div
        className="flex justify-end items-center gap-x-2 cursor-pointer select-none"
        onClick={column.getToggleSortingHandler()}
      >
        거래량
        {column.getIsSorted() === 'asc' && <ChevronUp size={16} />}
        {column.getIsSorted() === 'desc' && <ChevronDown size={16} />}
        {!column.getIsSorted() && <ArrowUpDown size={16} />}
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('TradeCount')}</span>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: 'TradeCountChangeRate',
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
];
