import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Act like you are an expert in weather and presenting to audience in front of you. Be energetic and also confident.
            State the city you are providing a summary for. Then give a summary of the weather for today only. Make it easy for the viewer to understand 
            and know what to prepare for the weather conditions. Use the uv_index data provided to provide UV advice.
            Assume the data came from your team and not the user`,
      },
      {
        role: "user",
        content: `Hi there, can i get a summary of today's weather, use the following information to get the weather data:
        ${JSON.stringify(weatherData)}`,
      },
    ],
  });
  const { data } = response;
  console.log("Data is", data);
  return NextResponse.json(data.choices[0].message);
}
