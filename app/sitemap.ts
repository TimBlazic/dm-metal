import { MetadataRoute } from "next";

const languages = ["sl", "en", "de"];

const services = [
  "jeklene-konstrukcije",
  "fasadni-elementi",
  "stresne-kritine",
  "jeklene-hise-in-nadstreski",
  "krovski-program",
  "projektiranje-in-inzeniring",
  "najem",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dm-metal.eu";
  const currentDate = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add homepage entries for each language
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: lang === "sl" ? baseUrl : `${baseUrl}/${lang}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    });
  });

  // Add main pages for each language
  languages.forEach((lang) => {
    const langPrefix = lang === "sl" ? "" : `/${lang}`;

    // O podjetju
    sitemapEntries.push({
      url: `${baseUrl}${langPrefix}/o-podjetju`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Reference
    sitemapEntries.push({
      url: `${baseUrl}${langPrefix}/reference`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    // Kontakt
    sitemapEntries.push({
      url: `${baseUrl}${langPrefix}/kontakt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    // Services
    services.forEach((service) => {
      sitemapEntries.push({
        url: `${baseUrl}${langPrefix}/storitve/${service}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });

  return sitemapEntries;
}
