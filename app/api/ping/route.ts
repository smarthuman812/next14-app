import { NextResponse } from 'next/server';

/**
 * GET /api/ping
 *
 * Responds with a basic heartbeat including a timestamp and the Vercel region.
 */
export async function GET() {
  const ts = new Date().toISOString();
  const region = process.env.VERCEL_REGION ?? 'local';
  return NextResponse.json({ ok: true, ts, region });
}