import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import StatCard from "@/components/StatCard";
import DailyCard from "@/components/DailyCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { wmoTable } from "@/components/WMOTable";
import TempChart from "@/components/TempChart";
import ToggleButton from "@/components/toggleButton";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;
  console.log(results);
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
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} long={long} lat={lat} results={results} />
      <div className="flex-1 p-5">
        {/* Change Graph */}
        <div className="p-5">
          <div className=" pb-5">
            <h2 className="text-xl font-bold">Today's Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at{" "}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>
          <div className="m-2 mb-9">
            {/* Callout Card for GPT */}
            <CalloutCard message="This is where GPT summary is available" />
          </div>
          <ToggleButton />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
              color="amber"
            />
            <StatCard
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
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
                <CalloutCard
                  message="UV index is  high today, wear SPF!"
                  warning
                />
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
          <hr className="mb-5" />
          <div className="space-y-3"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
