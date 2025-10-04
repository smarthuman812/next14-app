import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/request
 *
 * Accepts a JSON payload containing fields from the request form and forwards
 * the content as a message to a configured Telegram chat.  Requires the
 * environment variables `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` to be
 * defined.  Returns an object indicating whether the message was sent
 * successfully or not.  Does not perform any further validation beyond
 * checking required fields are present.
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const required = [
    "projectLinks",
    "budget",
    "audience",
    "geo",
    "product",
    "description",
  ];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Telegram integration is not configured" },
      { status: 500 }
    );
  }
  // Construct a human readable message with basic formatting
  const text = `*New EVILS request*\n\n` +
    `🔗 *Links*: ${body.projectLinks}\n` +
    `💰 *Budget*: ${body.budget}\n` +
    `🎯 *Audience*: ${body.audience}\n` +
    `🌍 *Geo*: ${body.geo}\n` +
    `📦 *Product*: ${body.product}\n` +
    `📝 *Description*: ${body.description}`;
  const telegramResp = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    }
  );
  const data = await telegramResp.json();
  if (!data.ok) {
    return NextResponse.json(
      { error: "Failed to send request to Telegram", details: data },
      { status: 500 }
    );
  }
  return NextResponse.json({ ok: true });
}