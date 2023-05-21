import CalloutCard from "./CalloutCard";
import DailyCard from "./DailyCard";
import StatCard from "./StatCard";
import { wmoTable } from "./WMOTable";

type WeatherDataCardsProps = {
  results: Root;
};

export default function WeatherDataCards({ results }: WeatherDataCardsProps) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dailyCards = results?.daily.time.slice(1).map((time) => ({
    weekday: new Date(time).getDay(),
    temperature: results.daily.temperature_2m_max.slice(1),
    weathercode: results.daily.weathercode.slice(1),
  }));

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
        <StatCard
          title="Maximum Temperature"
          metric={`${
            results.daily.temperature_2m_max[0]?.toFixed(1) ??
            "No data available"
          }`}
          color="amber"
        />
        <StatCard
          title="Minimum Temperature"
          metric={`${
            results.daily.temperature_2m_min[0]?.toFixed(1) ??
            "No data available"
          }`}
          color="blue"
        />
        <div>
          <StatCard
            title="UV Index"
            metric={results.daily.uv_index_max[0].toFixed(1)}
            color="neutral"
          />
          {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 &&
            Number(results.daily.uv_index_max[0].toFixed(1)) < 7 && (
              <CalloutCard
                message="UV index is rather high today, do consider wearing SPF!"
                warning
              />
            )}
          {Number(results.daily.uv_index_max[0].toFixed(1)) >= 7 && (
            <CalloutCard message="UV index is  high today, wear SPF!" warning />
          )}
        </div>

        <div className="flex space-x-3">
          <StatCard
            title="Wind Speed"
            metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
            color="cyan"
          />

          <StatCard
            title="Wind Direction"
            metric={`${results.current_weather.winddirection.toFixed(1)}°`}
            color="fuchsia"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-6 ">
        {dailyCards.map((daily, index) => {
          return (
            <div className="m-2 mb-4" key={index}>
              <DailyCard
                title={days[daily.weekday]}
                temperature={`${Number(daily.temperature[index])}°`}
                wmocode={wmoTable[daily.weathercode[index]]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
