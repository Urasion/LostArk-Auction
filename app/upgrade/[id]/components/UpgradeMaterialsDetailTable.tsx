import { getUpgradeMaterialsDetail } from '@/api/upgrade-materials';
import { AUCTION_DETAIL_COLUMNS } from '@/features/data-table/constant/auction-detail-column';
import { DataTable } from '@/features/data-table/data-table';

interface Props {
  id: string;
}
export default async function UpgradeMaterialsDetailTable({ id }: Props) {
  const data = await getUpgradeMaterialsDetail(id);

  return <DataTable data={data.Stats} columns={AUCTION_DETAIL_COLUMNS} />;
}
