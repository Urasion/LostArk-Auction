import { getBattleItems } from '@/api/battle-item';
import BattleItemTable from './BattleItemTable';

export default async function BattleItemSidebar() {
  const battleItems = await getBattleItems({
    ItemGrade: '',
    ItemName: '',
  });
  return (
    <>
      <BattleItemTable data={battleItems} />
    </>
  );
}
