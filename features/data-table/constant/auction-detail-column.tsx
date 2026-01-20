'use client';
import { AuctionItemDetail } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<AuctionItemDetail>();
export const AUCTION_DETAIL_COLUMNS = [
  columnHelper.accessor('Date', {
    header: () => <div className="text-right">날짜</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('Date')}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('AvgPrice', {
    header: () => <div className="text-right">평균 거래가</div>,
    cell: ({ row }) => {
      const avgPrice = (row.getValue('AvgPrice') as number).toFixed(1);
      return (
        <div className="text-right ">
          <span>{avgPrice}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('TradeCount', {
    header: () => <div className="text-right">거래량</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right ">
          <span>{row.getValue('TradeCount')}</span>
        </div>
      );
    },
  }),
];
