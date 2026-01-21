import { getUpgradeMaterials } from '@/api/upgrade-materials';
import UpgradeMaterialsTable from './UpgradeMaterialsTable';

export default async function UpgradeMaterialsSidebar() {
  const upgrade_materials = await getUpgradeMaterials({
    ItemName: '',
    ItemGrade: '',
  });
  return (
    <>
      <UpgradeMaterialsTable data={upgrade_materials} />
    </>
  );
}
