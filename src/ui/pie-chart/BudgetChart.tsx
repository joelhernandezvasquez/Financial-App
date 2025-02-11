"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { Card,CardContent} from "@/components/ui/card";
import { ChartConfig,ChartContainer, ChartTooltip,ChartTooltipContent} from "@/components/ui/chart"
import { BudgetPieData } from "@/lib/definitions";
import style from './style.module.css';

interface Props{
  chartData:BudgetPieData[],
  currentBalance:number
}

const chartConfig = {
  counts: {
    label: "Counts",
  },
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--green_clr))",
  },
  bills: {
    label: "Bills",
    color: "hsl(var(--cyan_clr))",
  },
  dining: {
    label: "Dining out",
    color: "hsl(var(--yellow_clr))",
  },
  personal: {
    label: "Personal Care",
    color: "hsl(var(--navy_clr))",
  }
} satisfies ChartConfig

export function BudgetChart({chartData,currentBalance}:Props) {
  const totalCounts = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [chartData])
  
  return (
    <Card className={`${"flex flex-col"} ${style.card}`}>
      
      <CardContent className={`${"flex-1 "} ${style.card_content}`}>
        <ChartContainer
          config={chartConfig}
          className={`${'mx-auto aspect-square'} ${style.chart_container}`}
        >
          <PieChart width={250} height={250}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="financial"
              innerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className={style.current_balance}
                        >
                        
                          ${currentBalance}
                        </tspan>

                         <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 32}
                          className="fill-muted-foreground"
                        >
                          of ${totalCounts.toLocaleString()} limits
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
