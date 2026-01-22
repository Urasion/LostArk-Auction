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
  columnHelper.accessor('diffAvgPrice', {
    header: '',
    cell: ({ row }) => {
      const diffAvgPrice = row.getValue('diffAvgPrice') as number;
      const avgPrice = row.getValue('AvgPrice') as number;
      const isPriceIncreasing = diffAvgPrice > 0;
      if (diffAvgPrice === 0) return <Badge variant={'none'}>{'0.00%'}</Badge>;
      const rawRate = (diffAvgPrice / avgPrice) * 100;
      const formattedRate = '(' + +rawRate.toFixed(2) + '%' + ')';
      return (
        <Badge variant={isPriceIncreasing ? 'increase' : 'decrease'}>
          {isPriceIncreasing ? <ArrowUp /> : <ArrowDown />}
          {diffAvgPrice.toFixed(1)}
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
  columnHelper.accessor('diffTradeCount', {
    header: '',
    cell: ({ row }) => {
      const diffTradeCount = row.getValue('diffTradeCount') as number;
      const avgPrice = row.getValue('AvgPrice') as number;
      const isPriceIncreasing = diffTradeCount > 0;
      if (diffTradeCount === 0)
        return <Badge variant={'none'}>{'0.00%'}</Badge>;
      const rawRate = (diffTradeCount / avgPrice) * 100;
      const formattedRate = '(' + +rawRate.toFixed(2) + '%' + ')';
      return (
        <Badge variant={isPriceIncreasing ? 'increase' : 'decrease'}>
          {isPriceIncreasing ? <ArrowUp /> : <ArrowDown />}
          {diffTradeCount.toFixed(1)}
          <span className="text-[11px]"> {formattedRate}</span>
        </Badge>
      );
    },
  }),
];
