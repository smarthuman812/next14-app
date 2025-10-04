import { NextRequest, NextResponse } from "next/server";
import { createInvoice } from "@/lib/plisio";

/**
 * POST /api/payment
 *
 * Creates a new Plisio invoice for the provided amount and currency.  The
 * request body must be JSON with `amount` (number) and `currency` (string)
 * fields.  Optional fields such as `orderName` and `orderNumber` may also
 * be specified.  Returns the JSON response from Plisio which includes
 * `id` and `invoice_url` among other details.  On error a 500 response
 * containing an `error` message is returned.
 */
export async function POST(request: NextRequest) {
  try {
    const { amount, currency } = await request.json();
    if (!amount || !currency) {
      return NextResponse.json(
        { error: "Missing amount or currency" },
        { status: 400 }
      );
    }
    const invoice = await createInvoice({ amount, currency });
    return NextResponse.json(invoice);
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}