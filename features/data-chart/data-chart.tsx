'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
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
  chartConfig: Record<
    keyof Omit<TData, 'Date' | 'diffAvgPrice' | 'diffTradeCount'>,
    config
  >;
}
export function Chart<TData extends { Date: string }>({
  chartTitle,
  chartDescription,
  chartData,
  chartConfig,
}: ChartProps<TData>) {
  const chartKeys = Object.keys(chartConfig);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
      }}
      className="min-w-0"
    >
      <Card className="w-full h-full ">
        <CardHeader>
          <CardTitle>{chartTitle}</CardTitle>
          <CardDescription>{chartDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-62.5 w-full xl:h-[40vh]"
          >
            <ComposedChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="Date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
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
                width={40}
                tick={{ fontSize: 11 }}
              />
              <YAxis
                yAxisId={'TradeCount'}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                padding={{ top: 150 }}
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
                  fontSize={10}
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
    </motion.div>
  );
}
