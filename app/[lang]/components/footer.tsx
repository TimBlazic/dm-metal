"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useParams } from "next/navigation";

export default function Footer() {
  const { t } = useLanguage();
  const params = useParams();
  const lang = params.lang as string;

  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/dm-metal-logo-no-background.png"
              alt="DM Metal Logo"
              width={160}
              height={50}
              className="mb-6"
            />
            <p className="text-zinc-400 mb-6">
              {t("footerCompanyDescription")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-zinc-400">
                  Šentjanž pri Dravogradu 145
                  <br />
                  2373 Šentjanž pri Dravogradu
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-3" />
                <a
                  href="tel:+38668123567"
                  className="text-zinc-400 hover:text-white"
                >
                  +386 68 123 567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-3" />
                <a
                  href="mailto:damjan@dmmetal.eu"
                  className="text-zinc-400 hover:text-white"
                >
                  damjan@dmmetal.eu
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/storitve/jeklene-konstrukcije`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("steelConstructions")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/storitve/fasadni-elementi`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("facadeElements")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/storitve/stresne-kritine`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("roofing")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/storitve/jeklene-hise-in-nadstreski`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("steelHouses")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/storitve/krovski-program`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("roofingProgram")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/storitve/projektiranje-in-inzeniring`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("engineering")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/storitve/najem`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("equipmentRental")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/o-podjetju`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/reference`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("references")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/kontakt`}
                  className="text-zinc-400 hover:text-white"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("workingHours")}</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>{t("mondayFriday")}: 7:00 - 15:00</li>
              <li>
                {t("saturdaySunday")}: {t("closed")}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          <p>
            © {new Date().getFullYear()} DM Metal d.o.o.{" "}
            {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
