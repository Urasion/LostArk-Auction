import { AuctionItemDetail } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<AuctionItemDetail>();
export const auction_detail_columns = [
  columnHelper.display({
    id: 'index',
  }),
  columnHelper.accessor('Date', {
    meta: { align: 'right' },
    header: '날짜',
  }),
  columnHelper.accessor('AvgPrice', {
    meta: { align: 'right' },

    header: '평균거래가',
  }),
  columnHelper.accessor('TradeCount', {
    meta: { align: 'right' },

    header: '거래량',
  }),
];
