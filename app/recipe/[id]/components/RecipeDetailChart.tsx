import { getRecipeDetail } from '@/api/recipe';
import { ChartConfig } from '@/components/ui/chart';
import { Chart } from '@/features/data-chart/data-chart';

interface Props {
  id: string;
}

export default async function RecipeDetailChart({ id }: Props) {
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
    <Chart
      chartTitle={data[1].Name}
      chartDescription="최근 2주일간의 거래정보가 표시됩니다."
      chartData={data[1].Stats}
      chartConfig={chartConfig}
    />
  );
}
