# Next14 App

A minimal **Next.js 14** project using the App Router and strict TypeScript. It provides three API routes (`/api/ping`, `/api/echo`, `/api/telegram`) and a simple frontend with buttons to exercise those endpoints.

## Features

- **App Router & TypeScript**: Built with Next.js 14 using the modern App Router.
- **API Routes**: Implemented in the `/app/api` directory.
  - `GET /api/ping` – returns a JSON object with a timestamp and the deployment region.
  - `POST /api/echo` – echoes back any JSON body you send.
  - `POST /api/telegram` – checks a secret in the `x-telegram-secret` header and returns `401` if it doesn't match.
- **Simple UI**: The home page has buttons to call each API and display the responses.

## Prerequisites

- Node.js 18 or newer
- [pnpm](https://pnpm.io/) installed globally (`npm install -g pnpm`)

## Installation

Clone the repository and install the dependencies:

```bash
pnpm install
```

## Running Locally

Copy the example environment file and set your secret:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set `TELEGRAM_WEBHOOK_SECRET` to a value of your choice. If you want the **Telegram Test** button on the frontend to succeed, also set `NEXT_PUBLIC_TELEGRAM_WEBHOOK_SECRET` to the same value (variables prefixed with `NEXT_PUBLIC_` are exposed to the browser).

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. You can interact with the buttons to test the API routes. Logs appear in the panel below the buttons.

### Available Scripts

- **`pnpm dev`** – Start the Next.js development server.
- **`pnpm build`** – Create an optimized production build.
- **`pnpm start`** – Run the production build.
- **`pnpm typecheck`** – Run the TypeScript compiler in `--noEmit` mode to verify types.

## Testing Endpoints with `curl`

You can manually call the API routes without the UI:

### Ping

```bash
curl -s http://localhost:3000/api/ping
```

### Echo

```bash
curl -s -X POST http://localhost:3000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"hello":1337}'
```

### Telegram

```bash
# Without header → returns 401
curl -i -X POST http://localhost:3000/api/telegram

# With correct header
curl -s -X POST http://localhost:3000/api/telegram \
  -H "x-telegram-secret: <your_secret>" \
  -H "Content-Type: application/json" \
  -d '{}'
```

Replace `<your_secret>` with the value of `TELEGRAM_WEBHOOK_SECRET` in your `.env.local` file.

## Deployment on Vercel

1. Push this project to your Git repository (e.g. GitHub or GitLab).
2. Log in to [Vercel](https://vercel.com/) and create a new project by importing your repository.
3. During setup, set an environment variable named **`TELEGRAM_WEBHOOK_SECRET`** in the project settings (and **`NEXT_PUBLIC_TELEGRAM_WEBHOOK_SECRET`** if you want the frontend test to work).
4. Click **Deploy**. Vercel will detect the Next.js app, install dependencies using pnpm, build, and deploy.

After deployment, your API routes will be accessible under `/api` on your Vercel domain.