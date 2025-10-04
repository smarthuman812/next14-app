import { NextRequest, NextResponse } from "next/server";
import { getInvoiceStatus } from "@/lib/plisio";

/**
 * GET /api/payment/status
 *
 * Query the status of an existing Plisio invoice.  The query string must
 * contain an `id` parameter corresponding to the invoice identifier.
 * Returns the JSON payload from Plisio or a 400/500 error if missing
 * parameters or remote failure.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      { error: "Missing invoice id" },
      { status: 400 }
    );
  }
  try {
    const status = await getInvoiceStatus(id);
    return NextResponse.json(status);
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}