import crypto from "crypto";

/**
 * Verify the signature of Telegram WebApp initData and return the parsed
 * arguments.  Telegram signs query parameters using a hash constructed
 * from a HMAC-SHA256 digest of the concatenated key/value pairs.  See
 * https://core.telegram.org/bots/webapps#initializing-mini-apps for the
 * algorithm.
 *
 * @param initData The raw init data string received from the client (the
 * querystring following the `?` in window.location.search).
 * @param botToken Your bot's token (used to derive the secret key).
 * @throws Will throw if the provided hash does not match Telegram's.
 */
export function verifyTelegramInitData(initData: string, botToken: string) {
  const params = new URLSearchParams(initData);
  const hash = params.get("hash");
  if (!hash) {
    throw new Error("initData missing hash");
  }
  // Build the data check string: sort keys (except hash) and join them as key=value lines.
  const keyValues: string[] = [];
  params.forEach((value, key) => {
    if (key === "hash") return;
    keyValues.push(`${key}=${value}`);
  });
  keyValues.sort((a, b) => a.localeCompare(b));
  const dataCheckString = keyValues.join("\n");
  // Derive the secret key from the bot token
  const secret = crypto
    .createHmac("sha256", "WebAppData")
    .update(botToken)
    .digest();
  // Compute expected hash
  const expected = crypto
    .createHmac("sha256", secret)
    .update(dataCheckString)
    .digest("hex");
  if (expected !== hash) {
    throw new Error("initData verification failed");
  }
  // Convert URLSearchParams to object
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}