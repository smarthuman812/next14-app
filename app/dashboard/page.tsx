"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { FaWallet, FaChartLine, FaPuzzlePiece } from "react-icons/fa";
import Image from "next/image";

interface UserData {
  id?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
}

/**
 * Dashboard page.  Displays the logged in user's telegram information (if
 * available), current balance and quick actions such as topping up via
 * Plisio.  Also shows placeholder cards for analytics and integrations.  In
 * a Telegram Mini App context the `initData` can be read from
 * `window.Telegram.WebApp.initData` and verified via our API.
 */
export default function DashboardPage() {
  const { t } = useTranslation();
  const [user, setUser] = useState<UserData | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // On mount attempt to verify telegram initData if present
  useEffect(() => {
    const initData = (window as any).Telegram?.WebApp?.initData;
    if (initData) {
      fetch("/api/telegram/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initData }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            setUser(data.user);
          }
        })
        .catch((err) => {
          console.warn("Telegram verification failed", err);
        });
    }
  }, []);

  // Handler to create a new invoice via our payment API
  const handleTopUp = async () => {
    setLoading(true);
    setError(null);
    try {
      // For demo purposes we top up a fixed amount of 10 USDT
      const resp = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 10, currency: "USDT" }),
      });
      const data = await resp.json();
      if (data.invoice_url) {
        // Redirect to Plisio hosted payment page
        window.location.href = data.invoice_url;
      } else {
        setError(data.error ?? "Не удалось создать счёт.");
      }
    } catch (err: any) {
      setError(err?.message ?? "Ошибка при создании счёта");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {t("dashboard.welcome")} {user?.first_name ?? user?.username ?? "Guest"}
        </h1>
        {/* Balance card */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-inner shadow-[var(--glow)] p-6 flex flex-col items-center space-y-4">
            <FaWallet className="w-8 h-8 text-[var(--red-500)]" />
            <h3 className="text-xl font-bold uppercase text-[var(--red-500)]">
              {t("dashboard.balance")}
            </h3>
            <p className="text-3xl font-semibold">{balance.toFixed(2)} USDT</p>
            <button
              onClick={handleTopUp}
              disabled={loading}
              className="relative mt-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--red-500)] text-white font-semibold uppercase tracking-wide hover:bg-[var(--red)] transition-colors disabled:opacity-50"
            >
              {loading ? "…" : t("dashboard.topup")}
            </button>
          </div>
          {/* Analytics card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-inner shadow-[var(--glow)] p-6 flex flex-col items-center space-y-4">
            <FaChartLine className="w-8 h-8 text-[var(--red-500)]" />
            <h3 className="text-xl font-bold uppercase text-[var(--red-500)]">
              {t("dashboard.analytics")}
            </h3>
            <p className="text-sm text-[var(--muted)] text-center">
              {/* Placeholder text */}
              {"Подключите Telegram MiniApp, чтобы смотреть аналитику."}
            </p>
          </div>
          {/* Integrations card */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-inner shadow-[var(--glow)] p-6 flex flex-col items-center space-y-4">
            <FaPuzzlePiece className="w-8 h-8 text-[var(--red-500)]" />
            <h3 className="text-xl font-bold uppercase text-[var(--red-500)]">
              {t("dashboard.integrations")}
            </h3>
            <p className="text-sm text-[var(--muted)] text-center">
              {"Интеграции скоро появятся."}
            </p>
          </div>
        </div>
        {error && (
          <p className="text-center text-sm text-red-500 mt-4">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}