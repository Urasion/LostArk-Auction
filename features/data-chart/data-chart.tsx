'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
        <ChartContainer config={chartConfig} className="w-full max-h-200">
          <AreaChart
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
              reversed
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={48}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="AvgPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-AvgPrice)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-AvgPrice)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="TradeCount" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-TradeCount)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-TradeCount)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey={chartKeys[0]}
              type="linear"
              fill="url(#AvgPrice)"
              fillOpacity={0.4}
              stroke="var(--color-AvgPrice)"
            />
            <Area
              dataKey={chartKeys[1]}
              type="linear"
              fill="url(#TradeCount)"
              fillOpacity={0.4}
              stroke="var(--color-TradeCount)"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
