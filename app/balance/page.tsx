"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

/**
 * Balance status page.  After returning from Plisio the invoice id can be
 * passed as a query parameter.  This page polls the `/api/payment/status`
 * endpoint until the invoice is paid or expired and then redirects back
 * to the dashboard.  It provides a simple status indicator to the user.
 */
export default function BalanceStatusPage() {
  const params = useSearchParams();
  const router = useRouter();
  const { t } = useTranslation();
  const id = params.get("id");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let interval: NodeJS.Timeout;
    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/payment/status?id=${id}`);
        const data = await res.json();
        if (data.status) {
          setStatus(data.status);
          if (data.status === "success" || data.status === "paid") {
            clearInterval(interval);
            // Redirect back to dashboard after a short delay
            setTimeout(() => router.push("/dashboard"), 2000);
          }
          if (data.status === "cancelled" || data.status === "expired") {
            clearInterval(interval);
          }
        }
      } catch (err: any) {
        setError(err?.message ?? "Ошибка запроса статуса");
      }
    };
    // Initial fetch
    fetchStatus();
    // Poll every 5 seconds
    interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, [id, router]);

  if (!id) {
    return (
      <div className="py-20 text-center">
        <p>Идентификатор счёта не указан.</p>
      </div>
    );
  }
  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold mb-6">
          {t("dashboard.balance")} #{id}
        </h1>
        {status ? (
          <p className="text-xl mb-4">Статус: {status}</p>
        ) : (
          <p className="text-xl mb-4">Проверяем статус оплаты…</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-sm text-[var(--muted)] mt-4">
          После подтверждения платежа вы будете перенаправлены обратно в кабинет.
        </p>
      </div>
    </section>
  );
}