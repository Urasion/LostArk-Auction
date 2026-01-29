import { getArkgridGemDetail } from '@/services/arkgrid-gem';
import { AUCTION_DETAIL_COLUMNS } from '@/features/data-table/constant/auction-detail-column';
import { DataTable } from '@/features/data-table/components/data-table';

interface Props {
  id: string;
}
export default async function GemDetailTable({ id }: Props) {
  const data = await getArkgridGemDetail(id);

  return <DataTable data={data.Stats} columns={AUCTION_DETAIL_COLUMNS} />;
}
