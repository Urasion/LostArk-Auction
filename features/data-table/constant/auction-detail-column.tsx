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
        <div className="text-right">
          <span>{avgPrice}</span>
        </div>
      );
    },
  }),

  columnHelper.display({
    id: 'priceChange',
    header: '',
    cell: ({ row }) => {
      const currentAvg = row.getValue('AvgPrice') as number;
      const prevAvg = row.original.prevAvgPrice ?? 0;
      const diff = currentAvg - prevAvg;

      if (prevAvg <= 0) return <Badge variant="none">0.00%</Badge>;

      const rate = (diff / prevAvg) * 100;
      const isIncreasing = diff > 0;
      const formattedRate = `(${Math.abs(rate).toFixed(2)}%)`;

      return (
        <Badge variant={isIncreasing ? 'increase' : 'decrease'}>
          {isIncreasing ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          {Math.abs(diff).toFixed(1)}
          <span className="text-[11px] ml-1">{formattedRate}</span>
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
    cell: ({ row }) => (
      <div className="text-right">
        <span>{row.getValue('TradeCount')}</span>
      </div>
    ),
  }),

  columnHelper.display({
    id: 'tradeCountChange',
    header: '',
    cell: ({ row }) => {
      const currentTrade = row.getValue('TradeCount') as number;
      const prevTrade = row.original.prevTradeCount ?? 0;
      const diff = currentTrade - prevTrade;

      if (prevTrade <= 0) return <Badge variant="none">0.00%</Badge>;

      const rate = (diff / prevTrade) * 100;
      const isIncreasing = diff > 0;

      return (
        <Badge variant={isIncreasing ? 'increase' : 'decrease'}>
          {isIncreasing ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          {Math.abs(diff)}
          <span className="text-[11px] ml-1">
            ({Math.abs(rate).toFixed(2)}%)
          </span>
        </Badge>
      );
    },
  }),
];
