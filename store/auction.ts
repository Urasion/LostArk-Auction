export interface AuctionItemRequest {
  ItemGrade: string;
  ItemName: string;
  PageNo: number;
}

export interface AuctionItem {
  Id: number;
  Name: string;
  Grade: string;
  Icon: string;
  BundleCount: number;
  TradeRemainCount: number;
  YDayAvgPrice: number;
  RecentPrice: number;
  CurrentMinPrice: number;
}
export interface AuctionItemResponse {
  PageNo: number;
  PageSize: number;
  TotalCount: number;
  Items: AuctionItem[];
}

export interface AuctionItemDetailResponse {
  Name: string;
  TradeRemainCount: number;
  BundleCOunt: number;
  Stats: AuctionItemDetail[];
}

export interface AuctionItemDetail {
  Date: string;
  AvgPrice: number;
  TradeCount: number;
}
