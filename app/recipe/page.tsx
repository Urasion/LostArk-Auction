import { RecipeChart } from '@/features/chart/components/recipe-chart';
import { DataTableDemo } from '@/features/main/auction-table';

export default async function Page() {
  return (
    <div className="flex flex-col grow">
      <RecipeChart />
      <DataTableDemo />
    </div>
  );
}
