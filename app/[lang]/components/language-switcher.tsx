"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState("sl")

  const languages = [
    { code: "sl", name: "Slovenščina", flag: "🇸🇮" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code)
    // Here you would implement the actual language change logic
  }

  const currentFlag = languages.find((lang) => lang.code === currentLanguage)?.flag

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
          <span className="mr-2">{currentFlag}</span>
          <span className="hidden sm:inline">{languages.find((lang) => lang.code === currentLanguage)?.name}</span>
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
  )
}

