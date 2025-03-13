"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/app/[lang]/components/service-card";
import ProjectsShowcase from "@/app/[lang]/components/projects-showcase";
import { useLanguage } from "@/lib/language-context";
import { useParams } from "next/navigation";
import Navigation from "./components/navigation";

export default function Home() {
  const { t } = useLanguage();
  const params = useParams();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="relative h-[600px]">
            <Image
              src={`/dm-metal-hero.jpeg`}
              alt="DM Metal Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                {t("heroTitle")}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
                {t("heroSubtitle")}
              </p>
              <div className="flex flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/reference">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 min-w-[140px] sm:min-w-[160px]"
                  >
                    {t("ourProjects")}
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 min-w-[140px] sm:min-w-[160px]"
                >
                  {t("contactUs")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("ourServices")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("servicesSubtitle")}
              </p>
            </div>

            <div className="grid gap-8">
              {/* Layout za velike zaslone (3-2-2) */}
              <div className="hidden lg:grid  gap-8">
                <div className="grid grid-cols-3 gap-8">
                  <ServiceCard
                    title={t("steelConstructions")}
                    description={t("steelConstructionsDesc")}
                    icon="Building"
                    link={`/${params.lang}/storitve/jeklene-konstrukcije`}
                  />
                  <ServiceCard
                    title={t("facadeElements")}
                    description={t("facadeElementsDesc")}
                    icon="Layers"
                    link={`/${params.lang}/storitve/fasadni-elementi`}
                  />
                  <ServiceCard
                    title={t("roofing")}
                    description={t("roofingDesc")}
                    icon="Home"
                    link={`/${params.lang}/storitve/stresne-kritine`}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
                  <ServiceCard
                    title={t("steelHouses")}
                    description={t("steelHousesDesc")}
                    icon="Warehouse"
                    link={`/${params.lang}/storitve/jeklene-hise-in-nadstreski`}
                  />
                  <ServiceCard
                    title={t("roofingProgram")}
                    description={t("roofingProgramDesc")}
                    icon="Roof"
                    link={`/${params.lang}/storitve/stresni-program`}
                  />
                  <ServiceCard
                    title={t("engineering")}
                    description={t("engineeringDesc")}
                    icon="PenTool"
                    link={`/${params.lang}/storitve/projektiranje-in-inzeniring`}
                  />
                  <ServiceCard
                    title={t("equipmentRental")}
                    description={t("equipmentRentalDesc")}
                    icon="Tool"
                    link={`/${params.lang}/storitve/najem-opreme`}
                  />
                </div>
              </div>

              {/* Layout za srednje in mobilne zaslone (2-2-2-1) */}
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ServiceCard
                  title={t("steelConstructions")}
                  description={t("steelConstructionsDesc")}
                  icon="Building"
                  link={`/${params.lang}/storitve/jeklene-konstrukcije`}
                />
                <ServiceCard
                  title={t("facadeElements")}
                  description={t("facadeElementsDesc")}
                  icon="Layers"
                  link={`/${params.lang}/storitve/fasadni-elementi`}
                />
                <ServiceCard
                  title={t("roofing")}
                  description={t("roofingDesc")}
                  icon="Home"
                  link={`/${params.lang}/storitve/stresne-kritine`}
                />
                <ServiceCard
                  title={t("steelHouses")}
                  description={t("steelHousesDesc")}
                  icon="Warehouse"
                  link={`/${params.lang}/storitve/jeklene-hise-in-nadstreski`}
                />
                <ServiceCard
                  title={t("roofingProgram")}
                  description={t("roofingProgramDesc")}
                  icon="Roof"
                  link={`/${params.lang}/storitve/krovski-program`}
                />
                <ServiceCard
                  title={t("engineering")}
                  description={t("engineeringDesc")}
                  icon="PenTool"
                  link={`/${params.lang}/storitve/projektiranje-in-inzeniring`}
                />
                <ServiceCard
                  title={t("equipmentRental")}
                  description={t("equipmentRentalDesc")}
                  icon="Tool"
                  link={`/${params.lang}/storitve/najem`}
                  className="sm:col-span-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative py-16 bg-gray-800">
          <div className="container relative px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {t("byTheNumbers")}
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Projekti */}
              <div className="text-center p-8 rounded-2xl bg-gray-900/50">
                <div className="text-6xl font-bold text-red-600 mb-3">100+</div>
                <div className="text-xl font-medium mb-2 text-white">
                  {t("successfulProjects")}
                </div>
                <div className="text-base text-gray-400">
                  {t("inLastYears")}
                </div>
              </div>
              {/* Kvadratura */}
              <div className="text-center p-8 rounded-2xl bg-gray-900/50">
                <div className="text-6xl font-bold text-red-600 mb-3">
                  50.000m²
                </div>
                <div className="text-xl font-medium mb-2 text-white">
                  {t("constructionsBuilt")}
                </div>
                <div className="text-base text-gray-400">{t("yearly")}</div>
              </div>
              {/* Izkušnje */}
              <div className="text-center p-8 rounded-2xl bg-gray-900/50">
                <div className="text-6xl font-bold text-red-600 mb-3">10+</div>
                <div className="text-xl font-medium mb-2 text-white">
                  {t("yearsExperience")}
                </div>
                <div className="text-base text-gray-400">{t("inMarket")}</div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {t("numbersSpeak")}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <ProjectsShowcase />

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[200px] w-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/dm-metal-logo-no-background.png"
                  alt="About DM Metal"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("aboutCompany")}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t("aboutCompanyDesc1")}
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  {t("aboutCompanyDesc2")}
                </p>
                <Link href="/o-podjetju">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    {t("readMore")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t("needSteelConstructions")}
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              {t("ctaDescription")}
            </p>
            <Link href={`/${params.lang}/kontakt`}>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-red-600 hover:bg-white/90"
              >
                {t("sendInquiry")}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Image
                src={`/dm-metal-logo-no-background.png`}
                alt="DM Metal Logo"
                width={160}
                height={50}
                className="mb-6"
              />
              <p className="text-zinc-400 mb-6">
                Specializirani za kovinske konstrukcije, jeklene hiše in
                industrijsko opremo.
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
                    href={`/${params.lang}/storitve/jeklene-konstrukcije`}
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("steelConstructions")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fasadni-elementi"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("facadeElements")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stresne-kritine"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("roofing")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jeklene-hise-in-nadstreski"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("steelHouses")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/krovski-program"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("roofingProgram")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projektiranje-in-inzeniring"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("engineering")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/najem"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("equipmentRental")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hitre povezave</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-400 hover:text-white">
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/o-podjetju"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reference"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("references")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="text-zinc-400 hover:text-white"
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t("workingHours")}
              </h3>
              <ul className="space-y-2 text-zinc-400">
                <li>Pon - Pet: 7:00 - 15:00</li>
                <li>Sob - Ned: Zaprto</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
