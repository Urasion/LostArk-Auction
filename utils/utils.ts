import { AuctionItem } from '@/store/auction';
import { FavoriteItem } from '@/store/favorites';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const convertAuctionItemToFavoriteItem = (
  item: AuctionItem,
): FavoriteItem => {
  return {
    Id: item.Id,
    Name: item.Name,
    Grade: item.Grade,
    Icon: item.Icon,
    BasePrice: item.CurrentMinPrice,
    CurrentPrice: 0,
  };
};
