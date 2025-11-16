export interface RecipeRequest {
  ItemGrade: string;
  ItemName: string;
  PageNo: number;
}

export interface RecipeItem {
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
