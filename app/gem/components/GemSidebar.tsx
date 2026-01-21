import { getArkgridGem } from '@/api/arkgrid-gem';
import GemTable from './GemTable';

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
