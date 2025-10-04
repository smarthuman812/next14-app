"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/lib/i18n";

/**
 * Request page.  Presents a multi-field form for prospective clients to
 * describe their project.  On submission the form data is posted to our
 * /api/request endpoint which forwards the details to Telegram.  Basic
 * client‑side validation ensures required fields are not empty.
 */
export default function RequestPage() {
  const { t } = useTranslation();
  const params = useSearchParams();
  const plan = params.get("plan") ?? "";
  const [form, setForm] = useState({
    projectLinks: "",
    budget: "",
    audience: "",
    geo: "",
    product: "",
    description: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic required fields validation
    if (
      !form.projectLinks ||
      !form.budget ||
      !form.audience ||
      !form.geo ||
      !form.product ||
      !form.description ||
      !form.consent
    ) {
      setMessage("Пожалуйста, заполните все поля и согласитесь на обработку данных.");
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan }),
      });
      const data = await res.json();
      if (data.ok) {
        setMessage("Спасибо! Ваша заявка отправлена.");
        setForm({
          projectLinks: "",
          budget: "",
          audience: "",
          geo: "",
          product: "",
          description: "",
          consent: false,
        });
      } else {
        setMessage(data.error ?? "Произошла ошибка. Попробуйте позже.");
      }
    } catch (err) {
      setMessage("Произошла ошибка при отправке формы.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("request.title")}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 border border-[var(--border)] rounded-2xl p-6 bg-[var(--panel)] shadow-inner shadow-[var(--glow)]"
        >
          {/* Project Links */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="projectLinks">
              {t("request.fields.projectLinks")}
            </label>
            <textarea
              id="projectLinks"
              name="projectLinks"
              value={form.projectLinks}
              onChange={handleChange}
              className="p-2 rounded-md bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--red-500)]"
              rows={3}
            />
          </div>
          {/* Budget */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="budget">
              {t("request.fields.budget")}
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="p-2 rounded-md bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--red-500)]"
            />
          </div>
          {/* Audience */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="audience">
              {t("request.fields.audience")}
            </label>
            <input
              type="text"
              id="audience"
              name="audience"
              value={form.audience}
              onChange={handleChange}
              className="p-2 rounded-md bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--red-500)]"
            />
          </div>
          {/* Geo */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="geo">
              {t("request.fields.geo")}
            </label>
            <input
              type="text"
              id="geo"
              name="geo"
              value={form.geo}
              onChange={handleChange}
              className="p-2 rounded-md bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--red-500)]"
            />
          </div>
          {/* Product */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="product">
              {t("request.fields.product")}
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={form.product}
              onChange={handleChange}
              className="p-2 rounded-md bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--red-500)]"
            />
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold" htmlFor="description">
              {t("request.fields.description")}
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="p-2 rounded-md bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--red-500)]"
              rows={4}
            />
          </div>
          {/* Consent */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="w-4 h-4 text-[var(--red-500)] focus:ring-[var(--red-500)] border border-[var(--border)] rounded"
            />
            <label htmlFor="consent" className="text-sm">
              {t("request.fields.consent")}
            </label>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[var(--red-500)] text-white font-semibold uppercase tracking-wide hover:bg-[var(--red)] transition-colors disabled:opacity-50"
          >
            {loading ? "…" : t("request.submit")}
          </button>
          {message && <p className="text-center text-sm mt-2">{message}</p>}
        </form>
      </div>
    </section>
  );
}