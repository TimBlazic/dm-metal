import { Metadata } from "next";
import { projects } from "@/app/[lang]/data/projects";
import { notFound } from "next/navigation";
import ProjectPageClient from "./client-page";
import type { Language } from "@/lib/translations";

// Generate metadata for each page
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ referenca: string; lang: Language }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  // Počakamo na parametre
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const referenca = resolvedSearchParams.referenca || resolvedParams.referenca;

  if (!referenca || typeof referenca !== "string") {
    return {
      title: "Projekt ni najden | DM Metal",
      description: "Projekt, ki ga iščete, ne obstaja.",
    };
  }

  const id = Number.parseInt(referenca);
  if (isNaN(id)) {
    return {
      title: "Projekt ni najden | DM Metal",
      description: "Projekt, ki ga iščete, ne obstaja.",
    };
  }

  const project = projects.find((p) => p.id === id);
  if (!project) {
    return {
      title: "Projekt ni najden | DM Metal",
      description: "Projekt, ki ga iščete, ne obstaja.",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const languages: Language[] = ["sl", "en", "de"];
  const projectIds = projects.map((project) => project.id.toString());

  return projectIds.flatMap((referenca) =>
    languages.map((lang) => ({
      referenca,
      lang,
    }))
  );
}

export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ referenca: string; lang: Language }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const referenca = resolvedSearchParams.referenca || resolvedParams.referenca;

  if (!referenca || typeof referenca !== "string") {
    notFound();
  }

  const id = Number.parseInt(referenca);
  if (isNaN(id)) {
    notFound();
  }

  const project = projects.find((p) => p.id === id);
  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} params={resolvedParams} />;
}
