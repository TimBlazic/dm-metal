import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Industrijska hala",
    image: "/images/projects/project1.jpg",
    category: "Jeklene konstrukcije",
  },
  {
    id: 2,
    title: "Poslovna stavba",
    image: "/images/projects/project2.jpg",
    category: "Fasadni elementi",
  },
  {
    id: 3,
    title: "Stanovanjski objekt",
    image: "/images/projects/project3.jpg",
    category: "Jeklene hiše",
  },
  {
    id: 4,
    title: "Logistični center",
    image: "/images/projects/project4.jpg",
    category: "Jeklene konstrukcije",
  },
];

export function ProjectsShowcase() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("ourProjects")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/reference">
            <Button variant="outline" size="lg">
              {t("readMore")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
