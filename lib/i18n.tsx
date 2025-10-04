"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Simple internationalisation provider and hook for the EVILS app.
 *
 * Text strings are organised in JSON files under the `locales` directory.  At
 * runtime the provider selects the appropriate dictionary based on the
 * currently chosen locale and exposes a translation function `t` that
 * performs dotted-path lookup into the dictionary.  If no translation is
 * found the key itself is returned, making it easy to spot missing entries
 * during development.
 */

export type Locale = "en" | "ru";

interface I18nContextType {
  locale: Locale;
  /**
   * Translate a dotted key path into a string.  For example, calling
   * `t('nav.home')` will resolve to the `nav.home` entry of the current
   * dictionary.  Missing keys return the key path itself.
   */
  t: (key: string) => string;
  /**
   * Update the current locale.  This will persist to localStorage and update
   * the `<html lang>` attribute accordingly.
   */
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Import the dictionaries synchronously.  Because Next.js' webpack handles
// JSON imports natively this adds very little overhead at build time and
// ensures translations are available immediately when the provider is
// rendered.  Additional locales can be added by extending this record.
const dictionaries: Record<Locale, any> = {
  en: require("@/locales/en/common.json"),
  ru: require("@/locales/ru/common.json"),
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialise locale from localStorage if available, otherwise default to EN.
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("evils_locale") as Locale | null;
      return stored ?? "en";
    }
    return "en";
  });

  // Persist locale and update the document's lang attribute whenever it changes.
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("evils_locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

  // Translation function: look up dotted keys in the current dictionary.
  const t = (key: string): string => {
    const dict = dictionaries[locale];
    return key.split(".").reduce((obj: any, segment) => {
      return obj && obj[segment] !== undefined ? obj[segment] : undefined;
    }, dict) ?? key;
  };

  const contextValue: I18nContextType = {
    locale,
    t,
    setLocale,
  };

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
};

/**
 * Hook to access the internationalisation context.  Returns the current
 * locale, the translation function and a setter for updating the locale.
 */
export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}