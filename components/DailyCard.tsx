"use client";
import { Card, Metric, Text, Color } from "@tremor/react";

type Props = {
  title: string;
  temperature: string;
  wmocode: string;
  color?: Color;
};

function DailyCard({ title, temperature, color, wmocode }: Props) {
  return (
    <Card decoration="top" decorationColor={color} className="min-h-[148px]">
      <Text>{title}</Text>
      <Metric>{temperature}</Metric>
      <Text>{wmocode}</Text>
    </Card>
  );
}

export default DailyCard;
