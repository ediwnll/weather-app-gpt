"use client";
import { Toggle, ToggleItem } from "@tremor/react";
import { useState } from "react";
import WeatherDataCards from "./WeatherDataCards";
import TempChart from "./TempChart";
import RainChart from "./RainChart";
import HumidityChart from "./HumidityChart";

type ToggleDataVsChartProps = {
  results: Root;
};

type ViewType = "Data" | "Chart";

export default function ToggleDataVsChart({ results }: ToggleDataVsChartProps) {
  const [showingData, setShowingData] = useState<ViewType>("Data");
  return (
    <>
      <div>
        <Toggle
          defaultValue="Data"
          onValueChange={(val) => setShowingData(val as ViewType)}
        >
          <ToggleItem value="Data" text="Data" />
          <ToggleItem value="Chart" text="Chart" />
        </Toggle>
      </div>

      {showingData === "Data" ? (
        <WeatherDataCards results={results} />
      ) : (
        <div className=" mt-10">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      )}
    </>
  );
}
