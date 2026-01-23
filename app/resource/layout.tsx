import { ReactNode, Suspense } from 'react';
import { DataTableSkeleton } from '@/features/data-table/components/data-table-skeleton';
import { AUCTION_SKELETON_COLUMNS } from '@/features/data-table/constant/auction-skeleton';
import MobileWrapper from '@/components/common/mobile-wrapper';
import ResourceSidebar from './components/resource-sidebar';

interface Props {
  children: ReactNode;
}
export default async function Layout({ children }: Props) {
  return (
    <div className="flex  w-full xl:h-[90dvh] justify-center items-start gap-x-4 ">
      {children}
      <MobileWrapper>
        <Suspense
          fallback={
            <DataTableSkeleton
              columns={AUCTION_SKELETON_COLUMNS}
              rowCount={30}
              className="w-full"
            />
          }
        >
          <ResourceSidebar />
        </Suspense>
      </MobileWrapper>
    </div>
  );
}
