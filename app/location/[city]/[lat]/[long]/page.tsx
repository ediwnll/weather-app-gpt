import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import InformationPanel from "@/components/InformationPanel";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import ToggleDataVsChart from "@/components/ToggleDataVsChart";
import getBasePath from "@/lib/getBasePath";
import cleanWeatherData from "@/lib/cleanWeatherData";

export const revalidate = 60; // revalidate this page every 60 seconds

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
      timezone: "auto",
    },
  });

  const results: Root = data.myQuery;

  const weatherDataToSend = cleanWeatherData(results, city);

  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weatherData: weatherDataToSend,
    }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} long={long} lat={lat} results={results} />
      <div className="flex-1 p-5">
        {/* Change Graph */}
        <div className="p-5">
          <div className=" pb-5">
            <h2 className="text-xl font-bold">Today Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at{" "}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>
          <div className="m-2 mb-9">
            {/* Callout Card for GPT */}
            <CalloutCard message={content} />
          </div>

          <ToggleDataVsChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
