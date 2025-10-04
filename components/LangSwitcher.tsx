"use client";

import { useTranslation } from "@/lib/i18n";

/**
 * Language switcher component.  Displays RU/EN buttons and updates the
 * locale when clicked.  The active language is highlighted using the
 * primary red colour.  This component must run in the client because it
 * interacts with state.
 */
export default function LangSwitcher() {
  const { locale, setLocale } = useTranslation();
  return (
    <div className="flex items-center space-x-2 text-sm font-bold">
      {(
        ["ru", "en"] as const
      ).map((code) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          className={
            code === locale
              ? "text-[var(--red)] underline"
              : "text-[var(--muted)] hover:text-[var(--text)]"
          }
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}