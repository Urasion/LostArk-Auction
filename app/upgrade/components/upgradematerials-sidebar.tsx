import { getUpgradeMaterials } from '@/api/upgrade-materials';
import UpgradeMaterialsTable from './upgradematerials-table';
import DataTableToolbar from '@/features/data-table/layout/data-table-toolbar';
import FavoriteButton from '@/features/favorite/favorite-button';

export default async function UpgradeMaterialsSidebar() {
  const upgradeMaterials = await getUpgradeMaterials({
    ItemName: '',
    ItemGrade: '',
  });
  return (
    <>
      <DataTableToolbar>
        <FavoriteButton />
      </DataTableToolbar>
      <UpgradeMaterialsTable data={upgradeMaterials} />
    </>
  );
}
