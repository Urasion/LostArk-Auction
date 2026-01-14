import { ReactNode, Suspense } from 'react';
import RecipeSidebar from './components/RecipeSIdebar';
import { DataTableSkeleton } from '@/features/data-table/data-table-skeleton';
import { AUCTION_SKELETON_COLUMNS } from '@/features/data-table/constant/auction-skeleton-column';

type Props = {
  children: ReactNode;
};
export default async function RecipeLayout({ children }: Props) {
  return (
    <div className="flex h-[95dvh] items-center grow gap-x-4">
      {children}
      <Suspense
        fallback={
          <DataTableSkeleton columns={AUCTION_SKELETON_COLUMNS} rowCount={20} />
        }
      >
        <RecipeSidebar />
      </Suspense>
    </div>
  );
}
