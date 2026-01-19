import { getArkgridGem } from '@/api/arkgrid-gem';
import GemTable from './GemTable';

export default async function GemSidebar() {
  const gems = await getArkgridGem({
    ItemGrade: '',
    ItemName: '',
  });
  return (
    <div className="flex h-full shrink-0">
      <GemTable data={gems} />
    </div>
  );
}
