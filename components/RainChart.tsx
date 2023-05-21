"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function RainChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: `${hour} H`,
    "Rain Chance": results.hourly.precipitation_probability[i],
  }));

  const percentFormatter = (percent: number) => `${percent} %`;

  return (
    <Card className="mt-10">
      <Title>Chances of Rain</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Rain Chance"]}
        colors={["sky"]}
        minValue={0}
        maxValue={100}
        valueFormatter={percentFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default RainChart;
