import { NextResponse } from 'next/server';

// Read the secret once at module scope. If the environment variable
// is not defined, fall back to undefined so that requests will be rejected.
const TELEGRAM_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET;

/**
 * POST /api/telegram
 *
 * Checks that the incoming request has the correct `x-telegram-secret` header.
 * If the header is missing or does not match the configured secret, a 401 is returned.
 * Otherwise a simple success response is sent. No additional Telegram logic is executed.
 */
export async function POST(request: Request) {
  const headerSecret = request.headers.get('x-telegram-secret');

  if (!TELEGRAM_SECRET || !headerSecret || headerSecret !== TELEGRAM_SECRET) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json({ ok: true });
}