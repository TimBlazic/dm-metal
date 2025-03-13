"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/app/[lang]/components/navigation";
import Footer from "@/app/[lang]/components/footer";
import { projects } from "@/app/[lang]/data/projects";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/language-context";

const categories = [
  { id: "all", name: "Vsi projekti" },
  { id: "jeklene-konstrukcije", name: "Jeklene konstrukcije" },
  { id: "fasadni-elementi", name: "Fasadni elementi" },
  { id: "jeklene-hise-in-nadstreski", name: "Jeklene hiše in nadstreški" },
  { id: "stresne-kritine", name: "Strešne kritine" },
];

export default function ReferencePage() {
  const params = useParams();
  const { t } = useLanguage();
  const lang = params.lang as string;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState("all");

  // Funkcija za filtriranje projektov glede na iskalni niz in kategorijo
  const filterProjects = (query: string, category: string) => {
    let filtered = projects;

    // Filtriranje po iskalnem nizu
    if (query) {
      const searchLower = query.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.location.toLowerCase().includes(searchLower) ||
          project.categoryName.toLowerCase().includes(searchLower)
      );
    }

    // Filtriranje po kategoriji
    if (category !== "all") {
      filtered = filtered.filter((project) => project.category === category);
    }

    setFilteredProjects(filtered);
  };

  // Posodobi filtre ob spremembi iskalnega niza ali kategorije
  useEffect(() => {
    filterProjects(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

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
            <span className="font-medium text-gray-900">{t("references")}</span>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-600/10 p-3 rounded-lg">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {t("references")}
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            {t("referencesDescription")}
          </p>
        </div>
      </div>

      {/* Filters and Projects */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={(value) => setActiveCategory(value)}
            className="w-full"
          >
            <div className="flex flex-col gap-4">
              {/* Mobilni select */}
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="md:hidden w-full px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Iskalno polje */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Iskanje projektov..."
                  className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                />
              </div>

              {/* Desktop zavihki */}
              <div className="hidden md:block">
                <TabsList className="bg-white border h-auto p-1 shadow-sm">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            <div className="mt-8">
              <TabsContent value="all">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              {categories.slice(1).map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects
                      .filter((project) => project.category === category.id)
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Ni najdenih projektov za vaše iskanje. Poskusite z drugimi
                ključnimi besedami.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Želite sodelovati z nami?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Kontaktirajte nas za brezplačno svetovanje in ponudbo. Naša ekipa
            vam bo pomagala najti optimalno rešitev za vaš projekt.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-red-600 hover:bg-white/90"
          >
            Pošljite povpraševanje
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    location: string;
    category: string;
    categoryName: string;
    description: string;
    image: string;
    year: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const params = useParams();
  const lang = params.lang as string;

  return (
    <Link
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
          {project.categoryName}
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
  );
}
