import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageClient from "./client-page";
import { servicesData, type Language } from "./data";

// Generate metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; lang: Language }>;
}): Promise<Metadata> {
  // Wait for params to be resolved
  const resolvedParams = await params;
  const { service, lang } = resolvedParams;

  const serviceData = servicesData[service];

  if (!serviceData) {
    return {
      title: "Storitev ni najdena | DM Metal",
      description: "Storitev, ki jo iščete, ne obstaja.",
    };
  }

  // Generate alternate language URLs
  const alternates = {
    canonical: `https://dm-metal.eu/${lang}/storitve/${service}`,
    languages: {
      sl: `https://dm-metal.eu/sl/storitve/${service}`,
      en: `https://dm-metal.eu/en/storitve/${service}`,
      de: `https://dm-metal.eu/de/storitve/${service}`,
    },
  };

  // Get service title and description in current language
  const title = serviceData.title[lang];
  const description = serviceData.description[lang];

  return {
    title: `${title} | DM Metal`,
    description,
    alternates,
    openGraph: {
      title: `${title} | DM Metal`,
      description,
      type: "website",
      locale: lang === "sl" ? "sl_SI" : lang === "en" ? "en_US" : "de_DE",
      alternateLocale: ["sl_SI", "en_US", "de_DE"],
      siteName: "DM Metal",
      images: [
        {
          url: `https://dm-metal.eu/images/storitve/${serviceData.heroImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | DM Metal`,
      description,
      images: [`https://dm-metal.eu/images/storitve/${serviceData.heroImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-site-verification",
      yandex: "your-yandex-verification",
    },
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  const languages: Language[] = ["sl", "en", "de"];
  const services = Object.keys(servicesData);

  return services.flatMap((service) =>
    languages.map((lang) => ({
      service,
      lang,
    }))
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string; lang: Language }>;
}) {
  // Wait for params to be resolved
  const resolvedParams = await params;

  const serviceData = servicesData[resolvedParams.service];
  if (serviceData) {
    console.log(
      "Server component - Service title:",
      serviceData.title[resolvedParams.lang]
    );
  }

  // If service doesn't exist, return 404
  if (!serviceData) {
    console.log("Server component - Service not found, returning 404");
    notFound();
  }

  // Pass the service data and params to the client component
  return (
    <>
      {/* Debug output */}
      <div style={{ display: "none" }}>
        Debug Server: {resolvedParams.service} -{" "}
        {serviceData.title[resolvedParams.lang]}
      </div>
      <ServicePageClient
        serviceData={serviceData}
        params={{
          service: resolvedParams.service,
          lang: resolvedParams.lang,
        }}
      />
    </>
  );
}
