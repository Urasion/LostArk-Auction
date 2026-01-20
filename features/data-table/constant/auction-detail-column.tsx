import { AuctionItemDetail } from '@/store/auction';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<AuctionItemDetail>();
export const AUCTION_DETAIL_COLUMNS = [
  columnHelper.display({
    id: 'index',
  }),
  columnHelper.accessor('Date', {
    header: '날짜',
  }),
  columnHelper.accessor('AvgPrice', {
    header: '평균 거래가',
  }),
  columnHelper.accessor('TradeCount', {
    header: '거래량',
  }),
];
