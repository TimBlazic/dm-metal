import {
  Building,
  Layers,
  Home,
  Warehouse,
  PenTool,
  ChevronRight,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  className,
}: ServiceCardProps) {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building":
        return <Building className="h-10 w-10 text-red-600" />;
      case "Layers":
        return <Layers className="h-10 w-10 text-red-600" />;
      case "Home":
        return <Home className="h-10 w-10 text-red-600" />;
      case "Warehouse":
        return <Warehouse className="h-10 w-10 text-red-600" />;
      case "Roof":
        return <Home className="h-10 w-10 text-red-600" />; // Using Home as a substitute for Roof
      case "PenTool":
        return <PenTool className="h-10 w-10 text-red-600" />;
      case "Tool":
        return <Wrench className="h-10 w-10 text-red-600" />;
      default:
        return <Building className="h-10 w-10 text-red-600" />;
    }
  };

  return (
    <Card
      className={`border-none shadow-md hover:shadow-lg transition-shadow ${
        className || ""
      }`}
    >
      <CardHeader>{getIcon(icon)}</CardHeader>
      <CardContent>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={link}
          className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
        >
          {t("readMore")}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
