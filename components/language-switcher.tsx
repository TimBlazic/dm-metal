"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/language-context";
import { Language } from "@/lib/translations";

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "sl", name: "Slovenščina", flag: "🇸🇮" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
  };

  const currentFlag = languages.find(
    (lang) => lang.code === currentLanguage
  )?.flag;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10 group relative"
        >
          <span className="mr-2">{currentFlag}</span>
          <span className="group-hover:opacity-100 transition-opacity duration-200">
            {languages.find((lang) => lang.code === currentLanguage)?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer"
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
