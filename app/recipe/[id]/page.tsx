import { Suspense } from 'react';
import RecipeDetailChart from './components/RecipeDetailChart';
import { Skeleton } from '@/components/ui/skeleton';
import RecipeDetailTable from './components/RecipeDetailTable';
import { DataTableSkeleton } from '@/features/data-table/data-table-skeleton';
import { AUCTION_DETAIL_SKELETON_COLUMNS } from '@/features/data-table/constant/auction-skeleton';

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: RecipeDetailPageProps) {
  const { id } = await params;

  return (
    <>
      <Suspense
        fallback={<Skeleton className="h-110 xl:h-180 w-180 xl:grow" />}
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
    </>
  );
}
