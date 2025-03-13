// Client component
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/app/[lang]/components/navigation";
import Footer from "@/app/[lang]/components/footer";
import { projects, type Project } from "@/app/[lang]/data/projects";
import { useLanguage } from "@/lib/language-context";
import { servicesData, type ServiceContent, type Language } from "./data";

function getRandomProjects(
  category: string,
  count: number,
  excludeId?: number,
  onlyFromCategory: boolean = true
): Project[] {
  let filteredProjects = onlyFromCategory
    ? projects.filter((p) => p.category === category && p.id !== excludeId)
    : projects.filter((p) => p.id !== excludeId);

  const shuffled = [...filteredProjects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

interface ServicePageProps {
  params: {
    service: string;
    lang: Language;
  };
  serviceData: ServiceContent;
}

export default function ServicePageClient({
  params,
  serviceData,
}: ServicePageProps) {
  const { t } = useLanguage();
  const lang = params.lang as Language;

  // Early return if params or serviceData are missing
  if (!params?.service || !params?.lang || !serviceData) {
    console.error("Missing required props:", { params, serviceData });
    return null;
  }

  // Get category based on service
  const categoryMap: Record<string, string> = {
    "jeklene-konstrukcije": "jeklene-konstrukcije",
    "fasadni-elementi": "fasadni-elementi",
    "jeklene-hise-in-nadstreski": "jeklene-hise-in-nadstreski",
    "stresne-kritine": "stresne-kritine",
    "stresni-program": "stresne-kritine",
    "najem-opreme": "jeklene-konstrukcije",
    "projektiranje-in-inzeniring": "jeklene-konstrukcije",
  };

  const category = categoryMap[params.service] || "jeklene-konstrukcije";
  const topProjects = getRandomProjects(category, 2, undefined, true);
  const bottomProjects = getRandomProjects(category, 3, undefined, false);

  // Early return if no service data
  if (!serviceData || !serviceData.title || !serviceData.description) {
    console.log("Client component - Invalid service data:", serviceData);
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="container px-4 md:px-6 py-12">
          <h1 className="text-3xl font-bold text-red-600">
            {t("serviceNotFound")}
          </h1>
          <p className="mt-4 text-gray-600">
            {t("serviceNotFoundDescription")}
          </p>
          <Link href={`/${params.lang}`} className="mt-6 inline-block">
            <Button
              variant="outline"
              className="bg-red-600 text-white hover:bg-red-700"
            >
              {t("backToHome")}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Debug output */}
      <div style={{ display: "none" }}>
        Debug Client: {params.service} - {serviceData.title[lang]}
      </div>
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href={`/${params.lang}`} className="hover:text-red-600">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-gray-900">
              {serviceData.title[lang]}
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section with Visual Distinction */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white border-b">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                {t("services")}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {serviceData.title[lang]}
              </h1>
              <p className="text-lg text-gray-700">
                {serviceData.description[lang]}
              </p>
              <Button className="bg-red-600 hover:bg-red-700">
                {t("sendInquiry")}
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <div className="aspect-square md:aspect-[4/3]">
                <Image
                  src={`/images/storitve/${serviceData.heroImage}`}
                  alt={serviceData.title[lang]}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2">
            {serviceData.sections?.map((section, index) => (
              <div key={index} className="mb-12 border-l-4 border-red-600 pl-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  {section.title[lang]}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {section.content[lang]}
                </p>
              </div>
            ))}

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {serviceData.features?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2 border-gray-200">
                    {feature.title[lang]}
                  </h2>
                  <ul className="space-y-3">
                    {feature.items[lang]?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mt-1 mr-3">
                          <div className="h-2 w-2 rounded-full bg-red-600"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div className="mt-12">
              <div className="flex items-center mb-6">
                <div className="h-px flex-1 bg-gray-200"></div>
                <h2 className="text-2xl font-bold px-4">
                  {t("similarProjects")}
                </h2>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
                {topProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/${params.lang}/reference/${project.id}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-56">
                      <Image
                        src={`/images/reference/${project.image}`}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          console.error(
                            "Error loading project image:",
                            project.image
                          );
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/dm-metal-hero.jpeg";
                        }}
                      />
                      <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                        {project.categoryName}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="inline-flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-transform">
                        {t("readMore")}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center my-8">
                <Link href={`/${params.lang}/projekti`}>
                  <Button className="bg-red-600 hover:bg-red-700">
                    {t("viewAllProjects")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA */}
            <div className="bg-red-600 text-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">{t("contactUs")}</h3>
              <p className="mb-6">{t("ctaDescription")}</p>
              <Link href={`/${params.lang}/kontakt`}>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-white hover:bg-white/10"
                >
                  {t("contactUs")}
                </Button>
              </Link>
            </div>

            {/* Other Services */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">{t("services")}</h3>
              <ul className="space-y-3">
                {Object.entries(servicesData)
                  .filter(([key]) => key !== params.service)
                  .map(([key, service]) => (
                    <li key={key}>
                      <Link
                        href={`/${params.lang}/storitve/${key}`}
                        className="flex items-center text-gray-700 hover:text-red-600 py-2 px-3 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 text-red-600" />
                        {service.title[lang]}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

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
              <div className="text-base text-gray-400">{t("inLastYears")}</div>
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

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("allProjects")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bottomProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={`/images/reference/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      console.error(
                        "Error loading project image:",
                        project.image
                      );
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/dm-metal-hero.jpeg";
                    }}
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                    {project.categoryName}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="inline-flex items-center text-red-600 font-medium group-hover:translate-x-1 transition-transform">
                    {t("readMore")}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`/${params.lang}/projekti`}>
              <Button className="bg-red-600 hover:bg-red-700">
                {t("viewAllProjects")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
