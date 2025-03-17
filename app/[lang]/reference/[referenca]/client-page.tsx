"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Building2,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/app/[lang]/components/navigation";
import Footer from "@/app/[lang]/components/footer";
import { projects, type Project } from "@/app/[lang]/data/projects";
import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/lib/translations";
import { useState, useMemo } from "react";

interface ProjectPageClientProps {
  project: Project;
  params: {
    referenca: string;
    lang: Language;
  };
}

export default function ProjectPageClient({
  project,
  params,
}: ProjectPageClientProps) {
  const { t } = useLanguage();
  const lang = params.lang;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure all images have the correct path prefix
  const allImages = (project.gallery || [project.image]).map((img) =>
    img.startsWith("/images/reference/") ? img : `/images/reference/${img}`
  );

  // Memoize random projects to prevent re-shuffling on every render
  const randomProjects = useMemo(
    () =>
      projects
        .filter((p) => p.id !== project.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3),
    [project.id] // Only re-compute if project.id changes
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href={`/${lang}`} className="hover:text-red-600">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={`/${lang}/reference`} className="hover:text-red-600">
              {t("references")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-gray-900">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <article className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    console.error(
                      "Error loading reference image:",
                      allImages[currentImageIndex]
                    );
                    const target = e.target as HTMLImageElement;
                    target.src = "/dm-metal-hero.jpeg";
                  }}
                />
                {allImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                      onClick={previousImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`Pojdi na sliko ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categoryNames.map((categoryName, index) => (
                    <Badge key={index} className="bg-red-600 hover:bg-red-700">
                      {categoryName}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-gray-700">
                  {project.fullDescription || project.description}
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{project.year}</span>
                </div>
                {project.client && (
                  <div className="flex items-center text-gray-600">
                    <Building2 className="h-5 w-5 mr-2" />
                    <span>{project.client}</span>
                  </div>
                )}
              </div>

              {project.services && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    {t("services")}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  {t("sendInquiry")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Random Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("ourProjects")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomProjects.map((project) => (
              <Link
                key={project.id}
                href={`/${lang}/reference/${project.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={`/images/reference/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                    {project.categoryNames[0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <span className="text-sm text-gray-600">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${lang}/reference`}>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                {t("viewAllProjects")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
