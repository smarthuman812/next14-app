export async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    // Ensure JSON headers are always sent when a body is present.
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  });
  if (!res.ok) {
    // Attempt to parse error body when available.
    let message: string;
    try {
      const data = await res.json();
      message = data?.error || res.statusText;
    } catch {
      message = res.statusText;
    }
    throw new Error(message);
  }
  return (await res.json()) as T;
}