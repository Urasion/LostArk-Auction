import { getArkgridGem } from '@/services/arkgrid-gem';
import GemTable from './gem-table';
import DataTableToolbar from '@/features/data-table/layout/data-table-toolbar';
import FavoriteButton from '@/features/favorite/favorite-button';

export default async function GemSidebar() {
  const gems = await getArkgridGem({
    ItemGrade: '',
    ItemName: '',
  });
  return (
    <>
      <DataTableToolbar>
        <FavoriteButton />
      </DataTableToolbar>
      <GemTable data={gems} />
    </>
  );
}
