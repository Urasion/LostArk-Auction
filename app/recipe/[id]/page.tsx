import { Suspense } from 'react';
import RecipeDetailChart from './components/recipe-detail-chart';
import { Skeleton } from '@/components/ui/skeleton';
import RecipeDetailTable from './components/recipe-detail-table';
import { DataTableSkeleton } from '@/features/data-table/components/data-table-skeleton';
import { AUCTION_DETAIL_SKELETON_COLUMNS } from '@/features/data-table/constant/auction-skeleton';

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: RecipeDetailPageProps) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full grow gap-y-4 ">
      <Suspense
        fallback={<Skeleton className="h-110 xl:h-180 w-full xl:grow" />}
      >
        <RecipeDetailChart id={id} />
      </Suspense>
      <Suspense
        fallback={
          <DataTableSkeleton
            columns={AUCTION_DETAIL_SKELETON_COLUMNS}
            rowCount={10}
          />
        }
      >
        <RecipeDetailTable id={id} />
      </Suspense>
    </div>
  );
}
