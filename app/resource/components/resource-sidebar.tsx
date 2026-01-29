import { getResources } from '@/services/resource';
import ResourceTable from './resource-table';
import DataTableToolbar from '@/features/data-table/layout/data-table-toolbar';
import FavoriteButton from '@/features/favorite/favorite-button';

export default async function ResourceSidebar() {
  const resources = await getResources({
    ItemGrade: '',
    ItemName: '',
  });
  return (
    <>
      <DataTableToolbar>
        <FavoriteButton />
      </DataTableToolbar>
      <ResourceTable data={resources} />
    </>
  );
}
