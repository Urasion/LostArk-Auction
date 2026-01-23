import { getArkgridGem } from '@/api/arkgrid-gem';
import GemTable from './gem-table';

export default async function GemSidebar() {
  const gems = await getArkgridGem({
    ItemGrade: '',
    ItemName: '',
  });
  return (
    <>
      <GemTable data={gems} />
    </>
  );
}
