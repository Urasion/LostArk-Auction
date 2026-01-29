export const dynamic = 'force-dynamic';
import { favoriteRequestScheme } from '@/store/request_scheme';
import { routeDispatcher } from '@/utils/utils';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const items = favoriteRequestScheme.parse(json);
    const responseList = await Promise.all(
      items.map((item) => routeDispatcher(item.Type)(String(item.Id))),
    );

    const priceList = responseList.map((response) => {
      const stats = response.Stats.at(-1);
      return {
        Id: Number(response.Id),
        CurrentPrice: stats?.AvgPrice || 0,
      };
    });
    return NextResponse.json(priceList);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: '데이터 조회 중 오류가 발생했습니다.' },
      { status: 400 },
    );
  }
}
