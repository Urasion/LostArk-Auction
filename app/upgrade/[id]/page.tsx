import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { DataTableSkeleton } from '@/features/data-table/data-table-skeleton';
import UpgradeMaterialsDetailChart from './components/UpgradeMaterialsDetailChart';
import UpgradeMaterialsDetailTable from './components/UpgradeMaterialsDetailTable';
import { AUCTION_DETAIL_SKELETON_COLUMNS } from '@/features/data-table/constant/auction-skeleton';

interface Props {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <div className="flex flex-col h-full grow gap-y-4 ">
      <Suspense
        fallback={<Skeleton className="h-110 xl:h-180 w-full xl:grow" />}
      >
        <UpgradeMaterialsDetailChart id={id} />
      </Suspense>
      <Suspense
        fallback={
          <DataTableSkeleton
            columns={AUCTION_DETAIL_SKELETON_COLUMNS}
            rowCount={10}
          />
        }
      >
        <UpgradeMaterialsDetailTable id={id} />
      </Suspense>
    </div>
  );
}
