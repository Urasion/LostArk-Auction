import { auction_detail_columns } from '@/features/data-table/constant/auction-detail-column';
import { Suspense } from 'react';
import GemDetailChart from './components/GemDetailChart';
import { Skeleton } from '@/components/ui/skeleton';
import GemDetailTable from './components/GemDetailTable';
import { DataTableSkeleton } from '@/features/data-table/data-table-skeleton';

interface GemDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: GemDetailPageProps) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full grow gap-y-4 ">
      <Suspense fallback={<Skeleton className="h-180 w-full" />}>
        <GemDetailChart id={id} />
      </Suspense>
      <Suspense
        fallback={
          <DataTableSkeleton columns={auction_detail_columns} rowCount={10} />
        }
      >
        <GemDetailTable id={id} />
      </Suspense>
    </div>
  );
}