import { getArkgridGemDetail } from '@/services/arkgrid-gem';
import { ChartConfig } from '@/components/ui/chart';
import { Chart } from '@/features/data-chart/data-chart';

interface Props {
  id: string;
}

export default async function GemDetailChart({ id }: Props) {
  const data = await getArkgridGemDetail(id);
  const chartConfig = {
    AvgPrice: {
      label: '평균거래가',
      color: 'var(--chart-price)',
    },
    TradeCount: {
      label: '거래량',
      color: 'var(--chart-volume)',
    },
  } satisfies ChartConfig;
  return (
    <Chart
      chartTitle={data.Name}
      chartDescription="최근 2주일간의 거래정보가 표시됩니다."
      chartData={data.Stats}
      chartConfig={chartConfig}
    />
  );
}
