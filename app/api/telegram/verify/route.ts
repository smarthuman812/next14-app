import { NextRequest, NextResponse } from "next/server";
import { verifyTelegramInitData } from "@/lib/tg";

/**
 * POST /api/telegram/verify
 *
 * Verifies Telegram WebApp initData using the bot token configured in the
 * environment.  The request body must contain an `initData` string.  On
 * successful verification the parsed key/value pairs are returned.  When
 * verification fails a 401 error is returned.
 */
export async function POST(req: NextRequest) {
  try {
    const { initData } = await req.json();
    if (!initData) {
      return NextResponse.json(
        { error: "initData is required" },
        { status: 400 }
      );
    }
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    if (!botToken) {
      return NextResponse.json(
        { error: "Missing TELEGRAM_BOT_TOKEN" },
        { status: 500 }
      );
    }
    const user = verifyTelegramInitData(initData, botToken);
    return NextResponse.json({ ok: true, user });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Verification failed" },
      { status: 401 }
    );
  }
}