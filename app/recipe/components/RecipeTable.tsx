import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from '@/components/ui/data-table';
import { RecipeItem } from '@/store/recipe';

export default function RecipeTable() {
  const columnHelper = createColumnHelper<RecipeItem>();
  const column = [
    columnHelper.accessor('Name', {
      header: '아이템명',
    }),
    columnHelper.accessor('Grade', {
      header: '등급',
    }),
    columnHelper.accessor('YDayAvgPrice', {
      header: '전일 평균 거래가',
    }),
    columnHelper.accessor('YDayAvgPrice', {
      header: '전일 평균 거래가',
    }),
  ];

  return <></>;
}
