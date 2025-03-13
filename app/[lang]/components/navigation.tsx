"use client";

import Image from "next/image";
import { Mail, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage } from "@/lib/language-context";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const { t } = useLanguage();
  const params = useParams();
  const lang = params.lang as string;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-zinc-800 text-white py-2 px-4 md:px-6 scroll">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a
                href="tel:+38668123567"
                className="hover:text-red-400 transition-colors"
              >
                +386 68 123 567
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a
                href="mailto:damjan@dmmetal.eu"
                className="hover:text-red-400 transition-colors"
              >
                damjan@dmmetal.eu
              </a>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="/dm-metal-logo.png"
              alt="DM Metal Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href={`/${lang}`}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${lang}/o-podjetju`}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${lang}/reference`}
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              {t("references")}
            </Link>
            <Link href={`/${lang}/kontakt`}>
              <Button variant="default" className="bg-red-600 hover:bg-red-700">
                {t("inquiry")}
              </Button>
            </Link>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container py-6 space-y-6 border-t">
            <Link
              href={`/${lang}`}
              className="block text-base font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href={`/${lang}/o-podjetju`}
              className="block text-base font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${lang}/reference`}
              className="block text-base font-medium hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("references")}
            </Link>
            <Link
              href={`/${lang}/kontakt`}
              onClick={() => setIsMenuOpen(false)}
              className="block pt-2"
            >
              <Button
                variant="default"
                className="w-full bg-red-600 hover:bg-red-700 text-base py-6"
              >
                {t("inquiry")}
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
