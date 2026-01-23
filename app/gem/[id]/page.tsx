import { Suspense } from 'react';
import GemDetailChart from './components/gem-detail-chart';
import { Skeleton } from '@/components/ui/skeleton';
import GemDetailTable from './components/gem-detail-table';
import { DataTableSkeleton } from '@/features/data-table/components/data-table-skeleton';
import { AUCTION_DETAIL_SKELETON_COLUMNS } from '@/features/data-table/constant/auction-skeleton';

interface GemDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: GemDetailPageProps) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full grow gap-y-4 ">
      <Suspense
        fallback={<Skeleton className="h-110 xl:h-180 w-full xl:grow" />}
      >
        <GemDetailChart id={id} />
      </Suspense>
      <Suspense
        fallback={
          <DataTableSkeleton
            columns={AUCTION_DETAIL_SKELETON_COLUMNS}
            rowCount={10}
          />
        }
      >
        <GemDetailTable id={id} />
      </Suspense>
    </div>
  );
}
