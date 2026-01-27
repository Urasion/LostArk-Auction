import { getArkgridGemDetail } from '@/api/arkgrid-gem';
import { getBattleItemDetail } from '@/api/battle-item';
import { getRecipeDetail } from '@/api/recipe';
import { getResourceDetail } from '@/api/resource';
import { getUpgradeMaterialsDetail } from '@/api/upgrade-materials';
import { AuctionItem } from '@/store/auction';
import { FavoriteItem } from '@/store/favorites';
import { ROUTE_LIST } from '@/store/route';

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
    Stock: 0,
    ReturnAmount: 0,
    ReturnRate: 0,
    Type: item.Type,
  };
};

export function routeDispatcher(route: (typeof ROUTE_LIST)[number]) {
  switch (route) {
    case '/recipe':
      return getRecipeDetail;
    case '/gem':
      return getArkgridGemDetail;
    case '/upgrade':
      return getUpgradeMaterialsDetail;
    case '/battle-items':
      return getBattleItemDetail;
    case '/resource':
      return getResourceDetail;
  }
}
