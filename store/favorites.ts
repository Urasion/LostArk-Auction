import { ROUTE_LIST } from './route';

export interface FavoriteItem {
  Id: number;
  Name: string;
  Grade: string;
  Icon: string;
  BasePrice: number;
  CurrentPrice: number;
  Stock: number;
  Type: (typeof ROUTE_LIST)[number];
}

export interface FavoriteItemResponse {
  Id: number;
  CurrentPrice: number;
}
