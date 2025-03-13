"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { Language, TranslationKey, translations } from "./translations";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<Language>("sl");

  // Initialize language from URL or localStorage
  useEffect(() => {
    const urlLang = pathname.split("/")[1] as Language;
    if (urlLang && ["sl", "en", "de"].includes(urlLang)) {
      setCurrentLanguage(urlLang);
    } else {
      const storedLang = localStorage.getItem("preferredLanguage") as Language;
      if (storedLang && ["sl", "en", "de"].includes(storedLang)) {
        setCurrentLanguage(storedLang);
        // Update URL to include language
        const newPath = `/${storedLang}${pathname}`;
        router.push(newPath);
      }
    }
  }, [pathname]);

  const setLanguage = useCallback(
    (lang: Language) => {
      setCurrentLanguage(lang);
      localStorage.setItem("preferredLanguage", lang);

      // Update URL to reflect language change
      const segments = pathname.split("/");
      if (segments[1] && ["sl", "en", "de"].includes(segments[1])) {
        segments[1] = lang;
      } else {
        segments.splice(1, 0, lang);
      }
      const newPath = segments.join("/");
      router.push(newPath);
    },
    [pathname, router]
  );

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[currentLanguage][key];
    },
    [currentLanguage]
  );

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
