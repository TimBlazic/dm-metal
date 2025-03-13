import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[70vh] items-center justify-center text-center px-4">
      <div className="flex gap-3 justify-end">
        <Image
          src="/dm-metal-logo-2.jpg"
          alt="DM Metal Logo"
          width={100}
          height={100}
        />
        <h1 className="text-8xl font-bold text-red-600">404</h1>
      </div>
      <h2 className="text-2xl font-semibold mt-4 mb-6">Stran ni najdena</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Oprostite, stran, ki jo iščete, ne obstaja ali je bila premaknjena.
      </p>
      <Button asChild>
        <Link href="/">Nazaj na domačo stran</Link>
      </Button>
    </div>
  );
}
