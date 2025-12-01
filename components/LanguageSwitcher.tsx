"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 bg-white/80 hover:bg-white shadow-sm transition"
    >
      {lang === "es" ? "ES / EN" : "EN / ES"}
    </button>
  );
}
