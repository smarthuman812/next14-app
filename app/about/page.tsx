"use client";

import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-4xl font-bold uppercase text-[var(--red-500)]">
          {t("about.title")}
        </h1>
        <p className="text-lg text-[var(--muted)] whitespace-pre-line">
          {t("about.content")}
        </p>
      </div>
    </section>
  );
}