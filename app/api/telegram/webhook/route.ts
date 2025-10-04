import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/telegram/webhook
 *
 * Dummy endpoint to handle incoming Telegram webhook events.  In a
 * production deployment this route would be configured as the webhook
 * endpoint for your bot.  For the purposes of this template the route
 * simply logs the incoming update and returns a 200 response.
 */
export async function POST(req: NextRequest) {
  const update = await req.json();
  // In a real implementation you might process different types of updates
  // here (messages, callback queries, etc.) and respond accordingly.
  console.log("Received Telegram update", JSON.stringify(update));
  return NextResponse.json({ ok: true });
}