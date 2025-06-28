"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { Experience } from "@/lib/experiences";
import { calculateValue, cn } from "@/lib/utils";

type ExperienceChartProps = {
  experiences: Experience[];
};

export function ExperienceChart({ experiences }: ExperienceChartProps) {
  const chartData = experiences.map((exp) => {
    const category = exp.category.toLowerCase();
    return {
      name: exp.name,
      value: Number(calculateValue(exp).toFixed(2)),
      category: exp.category,
      fill:
        category === "shopping" || category === "dining"
          ? `var(--chart-${category})`
          : "var(--chart-other)",
    };
  });

  const chartConfig = {
    value: { label: "Value", color: "var(--chart-5)" },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      className={cn("h-[calc(var(--count)*50px)] w-full")}
      config={chartConfig}
      style={
        {
          "--count": chartData.length,
        } as React.CSSProperties
      }
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{ right: 16 }}
      >
        <YAxis
          axisLine={false}
          dataKey="name"
          domain={[0, 25]}
          hide
          tickLine={false}
          tickMargin={10}
          type="category"
        />
        <XAxis dataKey="value" hide type="number" />
        <ChartTooltip
          content={<ChartTooltipContent indicator="line" />}
          cursor={false}
        />
        <Bar dataKey="value" radius={5}>
          <LabelList
            className="fill-white"
            dataKey="name"
            fontSize={12}
            offset={8}
            position="insideLeft"
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
