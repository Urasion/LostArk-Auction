import { ROUTE_LIST } from './route';

export interface AuctionItemRequest {
  ItemGrade: string;
  ItemName: string;
}
export interface AuctionItem extends AuctionItemDTO {
  Type: (typeof ROUTE_LIST)[number];
}
export interface AuctionItemDTO {
  Id: number;
  Name: string;
  Grade: string;
  Icon: string;
  BundleCount: number;
  TradeRemainCount: number;
  YDayAvgPrice: number;
  RecentPrice: number;
  CurrentMinPrice: number;
  Type: (typeof ROUTE_LIST)[number];
}

export interface BaseAuctionItem {
  Id: number;
  Name: string;
  Grade: string;
  Icon: string;
}

export interface AuctionItemResponse {
  PageNo: number;
  PageSize: number;
  TotalCount: number;
  Items: AuctionItemDTO[];
}

export interface AuctionItemDetailResponseDTO {
  Name: string;
  TradeRemainCount: number;
  BundleCount: number;
  Stats: AuctionItemDetailDTO[];
}

export interface AuctionItemDetailDTO {
  Date: string;
  AvgPrice: number;
  TradeCount: number;
}

export interface AuctionItemDetailResponse {
  Name: string;
  Id: string;
  Stats: AuctionItemDetail[];
}
export interface AuctionItemDetail extends AuctionItemDetailDTO {
  diffAvgPrice: number;
  diffTradeCount: number;
}
