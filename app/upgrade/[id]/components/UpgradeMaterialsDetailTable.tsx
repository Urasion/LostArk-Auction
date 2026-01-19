import { getUpgradeMaterialsDetail } from '@/api/upgrade-materials';
import { auction_detail_columns } from '@/features/data-table/constant/auction-detail-column';
import { DataTable } from '@/features/data-table/data-table';

interface Props {
  id: string;
}
export default async function UpgradeMaterialsDetailTable({ id }: Props) {
  const data = await getUpgradeMaterialsDetail(id);

  return (
    <div className="h-full overflow-y-auto scrollbar-hide">
      <DataTable data={data.Stats} columns={auction_detail_columns} />
    </div>
  );
}
