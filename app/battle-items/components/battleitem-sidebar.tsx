import { getBattleItems } from '@/api/battle-item';
import BattleItemTable from './battleitem-table';

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
