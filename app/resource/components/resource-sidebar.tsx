import { getResources } from '@/api/resource';
import ResourceTable from './resource-table';

export default async function ResourceSidebar() {
  const resources = await getResources({
    ItemGrade: '',
    ItemName: '',
  });
  return (
    <>
      <ResourceTable data={resources} />
    </>
  );
}
