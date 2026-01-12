import { getRecipeDetail } from '@/api/recipe';
import { ChartConfig } from '@/components/ui/chart';
import { auction_detail_columns } from '@/features/data-chart/constant/auction-detail-column';
import { Chart } from '@/features/data-chart/data-chart';
import { DataTable } from '@/features/data-table/data-table';

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: RecipeDetailPageProps) {
  const { id } = await params;
  console.log(id);
  const data = await getRecipeDetail(id);
  const chartConfig = {
    AvgPrice: {
      label: '평균거래가',
      color: 'var(--chart-3)',
    },
    TradeCount: {
      label: '거래량',
      color: 'var(--chart-2)',
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col grow gap-y-4 ">
      <Chart
        chartTitle={data[1].Name}
        chartDescription="최근 2주일간의 거래정보가 표시됩니다."
        chartData={data[1].Stats}
        chartConfig={chartConfig}
      />
      <DataTable data={data[1].Stats} columns={auction_detail_columns} />
    </div>
  );
}
