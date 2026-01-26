// 📁 app/api/favorites/route.ts
import { getBattleItemDetail } from '@/api/battle-item';
import { getRecipeDetail } from '@/api/recipe';
import { bodyScheme } from '@/store/auction_scheme';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { itemIds } = bodyScheme.parse(json);
    const data = await Promise.all(itemIds.map((id) => getRecipeDetail(id)));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: '잘못된 데이터 형식입니다.' },
      { status: 400 },
    );
  }
}
