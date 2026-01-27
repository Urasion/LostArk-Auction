// 📁 app/api/favorites/route.ts
import { FavoriteItem } from '@/store/favorites';
import { requestScheme } from '@/store/request_scheme';
import { routeDispatcher } from '@/utils/utils';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const items = requestScheme.parse(json);
    const responseList = await Promise.all(
      items.map((item) => routeDispatcher(item.Type)(String(item.Id))),
    );

    const parsedResponse = responseList.map((response) => ({
      ...response,
      Stats: response.Stats.at(-1),
    }));
    const favoriteList = items.reduce<FavoriteItem[]>((acc, item) => {
      const findItem = parsedResponse.find(
        (response) => response.Id === String(item.Id),
      );
      if (!findItem?.Stats) return acc;
      acc.push({
        ...item,
        CurrentPrice: findItem.Stats.AvgPrice,
      });
      return acc;
    }, []);
    return NextResponse.json(favoriteList);
  } catch (e) {
    return NextResponse.json(
      { error: '잘못된 데이터 형식입니다.' },
      { status: 400 },
    );
  }
}
