This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Get your own API KEYS required for the file and keep it in your .env.local

```
API_URL=Get it from stepzen once you run stepzen
NEXT_PUBLIC_STEPZEN_API_KEY=stepzen api key for this application
NEXT_PUBLIC_GPT_API_KEY=your OpenAi api key
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## What I used from this project

- React
- Typescript
- NextJs
- Tailwindcss
- Tremor UI
- Apollo-client
- Stepzen
- Graphql
- OpenAi API
- Weather Meteo API

## What I have learnt from this project

- Improve and gain more knowledge on typescript
- Knowledge of how to use APIs
- Learnt about Graphql
- Learnt about how I could use ChatGPT to generate answers
- Manage to brush up on my UI/UX skills


## Deploy on Vercel

Although I did manage to deploy my application to Vercel, I am using the free Vercel plan which is unable to run the application due to OpenAi taking more than 10 seconds to run it's function.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
