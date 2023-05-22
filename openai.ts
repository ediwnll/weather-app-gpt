import { Configuration, OpenAIApi } from "openai";

const openAiConfiguration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY,
});

const openai = new OpenAIApi(openAiConfiguration);

export default openai;
