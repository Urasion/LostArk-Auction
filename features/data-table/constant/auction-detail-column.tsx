import { AuctionItemDetail } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<AuctionItemDetail>();
export const auction_detail_columns = [
  columnHelper.display({
    id: 'index',
  }),
  columnHelper.accessor('Date', {
    header: '날짜',
  }),
  columnHelper.accessor('AvgPrice', {
    header: '평균거래가',
  }),
  columnHelper.accessor('TradeCount', {
    header: '거래량',
  }),
];
