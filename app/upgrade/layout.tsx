import { ReactNode, Suspense } from 'react';
import UpgradeMaterialsSidebar from './components/UpgradeMaterialsSidebar';
import { DataTableSkeleton } from '@/features/data-table/data-table-skeleton';
import { AUCTION_SKELETON_COLUMNS } from '@/features/data-table/constant/auction-skeleton-column';

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="flex h-[95dvh] items-center grow gap-x-4">
      {children}
      <Suspense
        fallback={
          <DataTableSkeleton columns={AUCTION_SKELETON_COLUMNS} rowCount={20} />
        }
      >
        <UpgradeMaterialsSidebar />
      </Suspense>
    </div>
  );
}
