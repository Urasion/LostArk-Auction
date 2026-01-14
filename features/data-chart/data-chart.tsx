'use client';

import * as React from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

interface config {
  label: string;
  color?: string;
}

interface ChartProps<TData extends { Date: string }> {
  chartTitle: string;
  chartDescription: string;
  chartData: TData[];
  chartConfig: Record<keyof Omit<TData, 'Date'>, config>;
}
export function Chart<TData extends { Date: string }>({
  chartTitle,
  chartDescription,
  chartData,
  chartConfig,
}: ChartProps<TData>) {
  const chartKeys = Object.keys(chartConfig);
  console.log(chartKeys);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>{chartDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full max-h-160">
          <ComposedChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('ko-KR', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <YAxis
              yAxisId={'AvgPrice'}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={48}
            />
            <YAxis
              yAxisId={'TradeCount'}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{ top: 100 }}
              width={48}
              hide={true}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />

            <Bar
              radius={8}
              dataKey={chartKeys[1]}
              type="linear"
              yAxisId="TradeCount"
              fill="var(--color-TradeCount)"
              stroke="var(--color-TradeCount)"
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Line
              dataKey={chartKeys[0]}
              type="linear"
              fill="var(--color-AvgPrice)"
              yAxisId="AvgPrice"
              stroke="var(--color-AvgPrice)"
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
