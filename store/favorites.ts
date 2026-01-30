import { ROUTE_LIST } from './route';
import { z } from 'zod';
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

export const priceScheme = z
  .number()
  .nonnegative({ message: '최소 0이상이어야 합니다.' })
  .max(100_000_000, { message: '최대 1억까지 입력 가능합니다.' });
