import { auction_detail_columns } from '@/features/data-table/constant/auction-detail-column';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { DataTableSkeleton } from '@/features/data-table/data-table-skeleton';
import UpgradeMaterialsDetailChart from './components/UpgradeMaterialsDetailChart';
import UpgradeMaterialsDetailTable from './components/UpgradeMaterialsDetailTable';

interface Props {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full grow gap-y-4 ">
      <Suspense fallback={<Skeleton className="h-180 w-full" />}>
        <UpgradeMaterialsDetailChart id={id} />
      </Suspense>
      <Suspense
        fallback={
          <DataTableSkeleton columns={auction_detail_columns} rowCount={10} />
        }
      >
        <UpgradeMaterialsDetailTable id={id} />
      </Suspense>
    </div>
  );
}
