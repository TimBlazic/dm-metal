"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects, type Project } from "@/app/[lang]/data/projects";
import { useLanguage } from "@/lib/language-context";
import { useParams } from "next/navigation";

function getRandomProjects(count: number): Project[] {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function groupProjects(
  projectsList: Project[],
  groupSize: number
): Project[][] {
  return projectsList.reduce((acc: Project[][], curr: Project, i: number) => {
    const groupIndex = Math.floor(i / groupSize);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(curr);
    return acc;
  }, []);
}

export default function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const params = useParams();
  const lang = params.lang as string;

  // Začetni projekti so prvi projekti v vrstnem redu (za SSR)
  const initialProjects = useMemo(() => {
    return groupProjects(projects.slice(0, 6), 3);
  }, []);

  // Naključni projekti se generirajo samo na klientu
  const [randomProjects, setRandomProjects] = useState(initialProjects);

  useEffect(() => {
    setMounted(true);
    setRandomProjects(groupProjects(getRandomProjects(6), 3));
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === randomProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? randomProjects.length - 1 : prevIndex - 1
    );
  };

  // Pridobimo samo prva dva projekta za mobilni prikaz
  const mobileProjects = useMemo(() => {
    return randomProjects[0]?.slice(0, 2) || [];
  }, [randomProjects]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("ourProjects")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projectsSubtitle")}
          </p>
        </div>

        {/* Mobilni prikaz (dva projekta) */}
        <div className="md:hidden space-y-6">
          {mobileProjects.map((project) => (
            <Link
              key={project.id}
              href={`/${lang}/reference/${project.id}`}
              className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={`/images/reference/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover"
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
                  <span className="text-sm text-gray-600">{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
          <div className="text-center mt-8">
            <Link href={`/${lang}/reference`}>
              <Button className="bg-red-600 hover:bg-red-700 w-full">
                {t("viewAllProjects")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop prikaz (slider) */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {randomProjects.map((projectGroup, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-6">
                    {projectGroup.map((project) => (
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
                          <h3 className="font-bold text-xl mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 mb-4">
                            {project.description}
                          </p>
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
                </div>
              ))}
            </div>
          </div>

          {mounted && randomProjects.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white rounded-full shadow-lg"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">{t("previousPage")}</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white rounded-full shadow-lg"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">{t("nextPage")}</span>
              </Button>
            </>
          )}

          <div className="flex justify-center mt-8 space-x-2">
            {randomProjects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === activeIndex ? "bg-red-600" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">
                  {t("goToPage")} {index + 1}
                </span>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`/${lang}/reference`}>
              <Button className="bg-red-600 hover:bg-red-700">
                {t("viewAllProjects")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
