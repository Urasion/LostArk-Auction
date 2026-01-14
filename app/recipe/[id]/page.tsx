import { getRecipeDetail } from '@/api/recipe';
import { ChartConfig } from '@/components/ui/chart';
import { auction_detail_columns } from '@/features/data-table/constant/auction-detail-column';
import { Chart } from '@/features/data-chart/data-chart';
import { DataTable } from '@/features/data-table/data-table';
import { Suspense } from 'react';
import RecipeDetailChart from './components/RecipeDetailChart';
import { Skeleton } from '@/components/ui/skeleton';
import RecipeDetailTable from './components/RecipeDetailTable';
import { DataTableSkeleton } from '@/features/data-table/data-table-skeleton';

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: RecipeDetailPageProps) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full grow gap-y-4 overflow-y-auto scrollbar-hide">
      <Suspense fallback={<Skeleton className="h-180 w-full" />}>
        <RecipeDetailChart id={id} />
      </Suspense>
      <Suspense
        fallback={
          <DataTableSkeleton columns={auction_detail_columns} rowCount={10} />
        }
      >
        <RecipeDetailTable id={id} />
      </Suspense>
    </div>
  );
}
