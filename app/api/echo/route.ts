import { NextResponse } from 'next/server';

/**
 * POST /api/echo
 *
 * Accepts a JSON body and echoes it back in the response.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body' },
      { status: 400 }
    );
  }
}