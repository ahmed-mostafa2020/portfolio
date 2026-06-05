"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

// ========================================
// Types
// ========================================
export type Locale = "en" | "ar";
export type Theme = "dark" | "light";

type Messages = typeof en;

interface I18nContextType {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string | string[];
  dir: "ltr" | "rtl";
  theme: Theme;
  toggleTheme: () => void;
}

// ========================================
// Message Map
// ========================================
const messagesMap: Record<Locale, Messages> = { en, ar };

// ========================================
// Helper: deep access by dot-path
// ========================================
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return path; // fallback: return the key itself
  }, obj);
}

// ========================================
// Context
// ========================================
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// ========================================
// Provider
// ========================================
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("portfolio-theme", next);
      return next;
    });
  }, []);

  const messages = messagesMap[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  }, []);

  const t = useCallback(
    (path: string): string | string[] => {
      const value = getNestedValue(messages as unknown as Record<string, unknown>, path);
      if (Array.isArray(value)) return value as string[];
      if (typeof value === "string") return value;
      return path;
    },
    [messages]
  );

  return (
    <I18nContext.Provider value={{ locale, messages, setLocale, t, dir, theme, toggleTheme }}>
      {children}
    </I18nContext.Provider>
  );
}

// ========================================
// Hook
// ========================================
export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
