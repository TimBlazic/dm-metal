"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage } from "@/lib/language-context";
import { useParams } from "next/navigation";

export default function Navigation() {
  const { t } = useLanguage();
  const params = useParams();
  const lang = params.lang as string;

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
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
    </>
  );
}
