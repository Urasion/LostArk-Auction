import { getUpgradeMaterials } from '@/api/upgrade-materials';
import UpgradeMaterialsTable from './upgradematerials-table';

export default async function UpgradeMaterialsSidebar() {
  const upgradeMaterials = await getUpgradeMaterials({
    ItemName: '',
    ItemGrade: '',
  });
  return (
    <>
      <UpgradeMaterialsTable data={upgradeMaterials} />
    </>
  );
}
