import { getResources } from '@/api/resource';
import ResourceTable from './ResourceTable';

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
