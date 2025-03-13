import {
  Construction,
  Home,
  Warehouse,
  Wrench,
  Hammer,
  Truck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon:
    | "construction"
    | "facade"
    | "roofing"
    | "house"
    | "program"
    | "engineering"
    | "rental";
}

const iconMap = {
  construction: Construction,
  facade: Warehouse,
  roofing: Home,
  house: Home,
  program: Hammer,
  engineering: Wrench,
  rental: Truck,
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary/10 rounded-full mb-4">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
