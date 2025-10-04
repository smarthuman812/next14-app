import qs from "querystring";

/**
 * Helper functions for interacting with the Plisio payment gateway.  These
 * functions are thin wrappers around the Plisio REST API and expect the
 * environment variable `PLISIO_API_KEY` to be defined in the server
 * environment.  See https://plisio.net/documentation/api for the
 * specification.
 */

const API_BASE = "https://plisio.net/api/v1";

interface CreateInvoiceOptions {
  amount: number;
  currency: string;
  orderNumber?: string;
  orderName?: string;
  email?: string;
  callbackUrl?: string;
  description?: string;
}

/**
 * Create a new invoice with Plisio.  On success the API returns a
 * description of the invoice including its id and payment URL.  See
 * https://plisio.net/documentation/api#invoices-create for details.
 */
export async function createInvoice(options: CreateInvoiceOptions) {
  const apiKey = process.env.PLISIO_API_KEY;
  if (!apiKey) {
    throw new Error("Missing PLISIO_API_KEY");
  }
  const body = qs.stringify({
    api_key: apiKey,
    amount: options.amount,
    currency: options.currency,
    order_number: options.orderNumber ?? `evils-${Date.now()}`,
    order_name: options.orderName ?? "EVILS topup",
    email: options.email ?? "",
    callback_url: options.callbackUrl ?? "",
    description: options.description ?? "",
  });
  const response = await fetch(`${API_BASE}/invoices/new`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!response.ok) {
    throw new Error(`Plisio responded with ${response.status}`);
  }
  return response.json();
}

/**
 * Fetch the status of an existing invoice by its id.  The id is the
 * `invoice_id` property returned from the createInvoice call.  See
 * https://plisio.net/documentation/api#invoices for more information.
 */
export async function getInvoiceStatus(invoiceId: string) {
  const apiKey = process.env.PLISIO_API_KEY;
  if (!apiKey) {
    throw new Error("Missing PLISIO_API_KEY");
  }
  const response = await fetch(
    `${API_BASE}/invoices/${invoiceId}?api_key=${apiKey}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error(`Plisio responded with ${response.status}`);
  }
  return response.json();
}