import { getArkgridGemDetail } from '@/services/arkgrid-gem';
import { getBattleItemDetail } from '@/services/battle-item';
import { getRecipeDetail } from '@/services/recipe';
import { getResourceDetail } from '@/services/resource';
import { getUpgradeMaterialsDetail } from '@/services/upgrade-materials';
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
    Stock: 1,
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
