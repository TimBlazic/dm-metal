"use client";

import NavigationWrapper from "@/app/[lang]/components/navigation-wrapper";
import Footer from "@/app/[lang]/components/footer";
import { useLanguage } from "@/lib/language-context";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationWrapper />
      <div className="mt-16">
        {/* Hero Section */}
        <section className="py-24 bg-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">{t("contact")}</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {t("contactDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Naslov Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <MapPin className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t("address")}
                </h3>
                <div className="text-gray-600 text-center">
                  <p>DM Metal d.o.o.</p>
                  <p>Šentjanž pri Dravogradu 145</p>
                  <p>2373 Šentjanž pri Dravogradu</p>
                  <p>{t("country")}</p>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="https://maps.google.com/?q=46.567789939820436,15.033787255376817"
                    target="_blank"
                    className="inline-flex items-center text-red-600 hover:text-red-700"
                  >
                    {t("openOnMap")}
                    <MapPin className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Delovni čas Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <Clock className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t("workingHours")}
                </h3>
                <div className="text-gray-600 text-center">
                  <p className="mb-2">{t("mondayFriday")}</p>
                  <p className="font-semibold mb-4">7:00 - 15:00</p>
                  <p>{t("saturdaySunday")}</p>
                  <p>{t("closed")}</p>
                </div>
              </div>

              {/* Kontakt Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <Phone className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t("contact")}
                </h3>
                <div className="text-center">
                  <p className="mb-2 text-gray-600">{t("phone")}</p>
                  <p className="text-red-600 font-semibold mb-4">
                    +386 68 123 567
                  </p>
                  <p className="text-gray-600 mb-2">{t("email")}</p>
                  <a
                    href="mailto:damjan@dm-metal.eu"
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    damjan@dmmetal.eu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
