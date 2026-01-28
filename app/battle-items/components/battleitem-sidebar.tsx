import { getBattleItems } from '@/api/battle-item';
import BattleItemTable from './battleitem-table';
import DataTableToolbar from '@/features/data-table/layout/data-table-toolbar';
import FavoriteButton from '@/features/favorite/favorite-button';

export default async function BattleItemSidebar() {
  const battleItems = await getBattleItems({
    ItemGrade: '',
    ItemName: '',
  });
  return (
    <>
      <DataTableToolbar>
        <FavoriteButton />
      </DataTableToolbar>
      <BattleItemTable data={battleItems} />
    </>
  );
}
