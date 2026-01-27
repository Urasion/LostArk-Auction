import { ROUTE_LIST } from './route';

export interface FavoriteItem {
  Id: number;
  Name: string;
  Grade: string;
  Icon: string;
  BasePrice: number;
  CurrentPrice: number;
  Stock: number;
  ReturnAmount: number;
  ReturnRate: number;
  Type: (typeof ROUTE_LIST)[number];
}
