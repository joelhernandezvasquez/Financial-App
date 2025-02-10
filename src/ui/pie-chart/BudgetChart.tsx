"use client";

import * as React from "react";
import style from './style.module.css';
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { budget: "entertainment", count: 50, fill: "#277C78" },
    { budget: "bills", count: 750, fill: "#82C9D7" },
    { budget: "dining", count: 75, fill: "#F2CDAC" },
    { budget: "personal care", count: 100, fill: "#626070" },
  ];
 
const chartConfig = {
  limit: {
    label: "Limits",
  },
  entertainment: {
    label: "Entertainment",
    color: "#277C78",
  },
  bills: {
    label: "Bills",
    color: "#82C9D7",
  },
  dining: {
    label: "Dining out",
    color: "#F2CDAC",
  },
  personal: {
    label: "Personal Care",
    color: "#626070",
  }
} satisfies ChartConfig

export function BudgetChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])
  
  const currentBalance = 338;

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
                          of ${totalVisitors.toLocaleString()} limits
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
