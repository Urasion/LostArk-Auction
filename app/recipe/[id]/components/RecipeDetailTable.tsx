import { getRecipeDetail } from '@/api/recipe';
import { auction_detail_columns } from '@/features/data-table/constant/auction-detail-column';
import { DataTable } from '@/features/data-table/data-table';

interface Props {
  id: string;
}
export default async function RecipeDetailTable({ id }: Props) {
  const data = await getRecipeDetail(id);

  return <DataTable data={data[1].Stats} columns={auction_detail_columns} />;
}
