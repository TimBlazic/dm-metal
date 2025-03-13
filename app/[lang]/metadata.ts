import { Metadata } from "next";
import { translations } from "@/lib/translations";
import { Language, TranslationKey } from "@/lib/translations";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const lang = (params.lang || "sl") as Language;
  const t = (key: TranslationKey) => translations[lang][key];

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}
