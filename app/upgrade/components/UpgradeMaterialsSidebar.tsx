import { getUpgradeMaterials } from '@/api/upgrade-materials';
import UpgradeMaterialsTable from './UpgradeMaterialsTable';

export default async function UpgradeMaterialsSidebar() {
  const upgrade_materials = await getUpgradeMaterials({
    ItemName: '',
    ItemGrade: '',
  });
  return (
    <div className="flex h-full shrink-0">
      <UpgradeMaterialsTable data={upgrade_materials} />
    </div>
  );
}
