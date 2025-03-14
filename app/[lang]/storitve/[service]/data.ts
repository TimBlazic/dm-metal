export type Language = "sl" | "en" | "de";

export interface TranslatedText {
  sl: string;
  en: string;
  de: string;
}

export interface TranslatedStringArray {
  sl: string[];
  en: string[];
  de: string[];
}

export interface ServiceFeature {
  title: TranslatedText;
  items: TranslatedStringArray;
}

export interface ServiceSection {
  title: TranslatedText;
  content: TranslatedText;
}

export interface GalleryItem {
  image: string;
  alt: TranslatedText;
}

export interface ServiceContent {
  title: TranslatedText;
  description: TranslatedText;
  heroImage: string;
  sections: ServiceSection[];
  features: ServiceFeature[];
  gallery: GalleryItem[];
}

// Service data for different pages
export const servicesData: Record<string, ServiceContent> = {
  "projektiranje-in-inzeniring": {
    title: {
      sl: "Projektiranje in inženiring",
      en: "Design and Engineering",
      de: "Planung und Engineering",
    },
    description: {
      sl: "Celovite rešitve projektiranja in inženiringa za vaše projekte.",
      en: "Comprehensive design and engineering solutions for your projects.",
      de: "Umfassende Planungs- und Engineering-Lösungen für Ihre Projekte.",
    },
    heroImage: "projektiranje.jpeg",
    sections: [
      {
        title: {
          sl: "Projektiranje",
          en: "Design",
          de: "Planung",
        },
        content: {
          sl: "Naša ekipa izkušenih projektantov vam pomaga pri vseh fazah projektiranja.",
          en: "Our team of experienced designers helps you with all phases of design.",
          de: "Unser Team erfahrener Planer unterstützt Sie in allen Planungsphasen.",
        },
      },
      {
        title: {
          sl: "Inženiring",
          en: "Engineering",
          de: "Engineering",
        },
        content: {
          sl: "Nudimo celovite inženirske rešitve za zahtevne projekte.",
          en: "We offer comprehensive engineering solutions for demanding projects.",
          de: "Wir bieten umfassende Engineering-Lösungen für anspruchsvolle Projekte.",
        },
      },
    ],
    features: [
      {
        title: {
          sl: "Naše storitve",
          en: "Our Services",
          de: "Unsere Leistungen",
        },
        items: {
          sl: [
            "3D modeliranje",
            "Statični izračuni",
            "Tehnična dokumentacija",
            "Nadzor gradnje",
            "Svetovanje",
          ],
          en: [
            "3D modeling",
            "Static calculations",
            "Technical documentation",
            "Construction supervision",
            "Consulting",
          ],
          de: [
            "3D-Modellierung",
            "Statische Berechnungen",
            "Technische Dokumentation",
            "Bauüberwachung",
            "Beratung",
          ],
        },
      },
    ],
    gallery: [
      {
        image: "projektiranje.jpeg",
        alt: {
          sl: "3D model konstrukcije",
          en: "3D construction model",
          de: "3D-Konstruktionsmodell",
        },
      },
      {
        image: "projektiranje.jpeg",
        alt: {
          sl: "Tehnična dokumentacija",
          en: "Technical documentation",
          de: "Technische Dokumentation",
        },
      },
    ],
  },
  "jeklene-hise-in-nadstreski": {
    title: {
      sl: "Jeklene hiše in nadstreški",
      en: "Steel Houses and Canopies",
      de: "Stahlhäuser und Überdachungen",
    },
    description: {
      sl: "Gradnja jeklenih hiš in nadstreškov po meri z najsodobnejšimi materiali.",
      en: "Construction of custom steel houses and canopies with state-of-the-art materials.",
      de: "Bau von maßgefertigten Stahlhäusern und Überdachungen mit modernsten Materialien.",
    },
    heroImage: "dm-metal-jeklene-hise-in-nadstreski-storitev.jpeg",
    sections: [
      {
        title: {
          sl: "Jeklene hiše",
          en: "Steel Houses",
          de: "Stahlhäuser",
        },
        content: {
          sl: "Gradimo moderne jeklene hiše, ki združujejo funkcionalnost in estetiko.",
          en: "We build modern steel houses that combine functionality and aesthetics.",
          de: "Wir bauen moderne Stahlhäuser, die Funktionalität und Ästhetik vereinen.",
        },
      },
      {
        title: {
          sl: "Nadstreški",
          en: "Canopies",
          de: "Überdachungen",
        },
        content: {
          sl: "Izdelujemo nadstreške po meri za vse vrste objektov.",
          en: "We manufacture custom canopies for all types of buildings.",
          de: "Wir fertigen maßgeschneiderte Überdachungen für alle Arten von Gebäuden.",
        },
      },
    ],
    features: [
      {
        title: {
          sl: "Naše storitve",
          en: "Our Services",
          de: "Unsere Leistungen",
        },
        items: {
          sl: [
            "Projektiranje",
            "Izdelava",
            "Montaža",
            "Vzdrževanje",
            "Svetovanje",
          ],
          en: [
            "Design",
            "Manufacturing",
            "Installation",
            "Maintenance",
            "Consulting",
          ],
          de: ["Planung", "Herstellung", "Montage", "Wartung", "Beratung"],
        },
      },
    ],
    gallery: [
      {
        image: "dm-metal-jeklene-hise-in-nadstreski-storitev.jpeg",
        alt: {
          sl: "Moderna jeklena hiša",
          en: "Modern steel house",
          de: "Modernes Stahlhaus",
        },
      },
      {
        image: "dm-metal-jeklene-hise-in-nadstreski-storitev.jpeg",
        alt: {
          sl: "Nadstrešek po meri",
          en: "Custom canopy",
          de: "Maßgeschneiderte Überdachung",
        },
      },
    ],
  },
  "jeklene-konstrukcije": {
    title: {
      sl: "Jeklene konstrukcije",
      en: "Steel Constructions",
      de: "Stahlkonstruktionen",
    },
    description: {
      sl: "Projektiranje in izdelava jeklenih konstrukcij za industrijske in poslovne objekte.",
      en: "Design and manufacturing of steel constructions for industrial and business facilities.",
      de: "Planung und Herstellung von Stahlkonstruktionen für Industrie- und Geschäftsgebäude.",
    },
    heroImage: "dm-metal-jeklene-hise-in-nadstreski-storitev.jpeg",
    sections: [
      {
        title: {
          sl: "Industrijski objekti",
          en: "Industrial Facilities",
          de: "Industrieanlagen",
        },
        content: {
          sl: "Specializirani smo za projektiranje in izdelavo jeklenih konstrukcij za industrijske objekte.",
          en: "We specialize in designing and manufacturing steel constructions for industrial facilities.",
          de: "Wir sind spezialisiert auf die Planung und Herstellung von Stahlkonstruktionen für Industrieanlagen.",
        },
      },
      {
        title: {
          sl: "Poslovni objekti",
          en: "Business Facilities",
          de: "Geschäftsgebäude",
        },
        content: {
          sl: "Izdelujemo jeklene konstrukcije za poslovne objekte po meri.",
          en: "We manufacture custom steel constructions for business facilities.",
          de: "Wir fertigen maßgeschneiderte Stahlkonstruktionen für Geschäftsgebäude.",
        },
      },
    ],
    features: [
      {
        title: {
          sl: "Naše storitve",
          en: "Our Services",
          de: "Unsere Leistungen",
        },
        items: {
          sl: [
            "Projektiranje jeklenih konstrukcij",
            "Izdelava in montaža",
            "Antikorozijska zaščita",
            "Vzdrževanje",
            "Sanacije",
          ],
          en: [
            "Steel construction design",
            "Manufacturing and installation",
            "Anticorrosion protection",
            "Maintenance",
            "Renovations",
          ],
          de: [
            "Stahlkonstruktionsplanung",
            "Herstellung und Montage",
            "Korrosionsschutz",
            "Wartung",
            "Sanierungen",
          ],
        },
      },
    ],
    gallery: [
      {
        image: "dm-metal-jeklene-hise-in-nadstreski-storitev.jpeg",
        alt: {
          sl: "Jeklena konstrukcija industrijskega objekta",
          en: "Steel construction of industrial facility",
          de: "Stahlkonstruktion einer Industrieanlage",
        },
      },
      {
        image: "dm-metal-jeklene-hise-in-nadstreski-storitev.jpeg",
        alt: {
          sl: "Jeklena konstrukcija poslovnega objekta",
          en: "Steel construction of business facility",
          de: "Stahlkonstruktion eines Geschäftsgebäudes",
        },
      },
    ],
  },
  "fasadni-elementi": {
    title: {
      sl: "Fasadni elementi",
      en: "Facade Elements",
      de: "Fassadenelemente",
    },
    description: {
      sl: "Izdelava in montaža fasadnih elementov za sodobne objekte.",
      en: "Manufacturing and installation of facade elements for modern buildings.",
      de: "Herstellung und Montage von Fassadenelementen für moderne Gebäude.",
    },
    heroImage: "fasade-hero.jpeg",
    sections: [
      {
        title: {
          sl: "Fasadni sistemi",
          en: "Facade Systems",
          de: "Fassadensysteme",
        },
        content: {
          sl: "Ponujamo širok izbor fasadnih sistemov za različne vrste objektov.",
          en: "We offer a wide range of facade systems for different types of buildings.",
          de: "Wir bieten eine breite Auswahl an Fassadensystemen für verschiedene Gebäudetypen.",
        },
      },
      {
        title: {
          sl: "Montaža",
          en: "Installation",
          de: "Montage",
        },
        content: {
          sl: "Strokovna montaža fasadnih elementov z izkušeno ekipo.",
          en: "Professional installation of facade elements with an experienced team.",
          de: "Professionelle Montage von Fassadenelementen mit einem erfahrenen Team.",
        },
      },
    ],
    features: [
      {
        title: {
          sl: "Naše storitve",
          en: "Our Services",
          de: "Unsere Leistungen",
        },
        items: {
          sl: [
            "Aluminijaste fasade",
            "Steklene fasade",
            "Prezračevane fasade",
            "Montaža",
            "Vzdrževanje",
          ],
          en: [
            "Aluminum facades",
            "Glass facades",
            "Ventilated facades",
            "Installation",
            "Maintenance",
          ],
          de: [
            "Aluminiumfassaden",
            "Glasfassaden",
            "Hinterlüftete Fassaden",
            "Montage",
            "Wartung",
          ],
        },
      },
    ],
    gallery: [
      {
        image: "fasade-hero.jpeg",
        alt: {
          sl: "Steklena fasada",
          en: "Glass facade",
          de: "Glasfassade",
        },
      },
      {
        image: "fasade-hero.jpeg",
        alt: {
          sl: "Aluminijasta fasada",
          en: "Aluminum facade",
          de: "Aluminiumfassade",
        },
      },
    ],
  },
  "stresne-kritine": {
    title: {
      sl: "Strešne kritine",
      en: "Roofing Materials",
      de: "Dachmaterialien",
    },
    description: {
      sl: "Dobava in montaža kakovostnih strešnih kritin za vse vrste objektov.",
      en: "Supply and installation of quality roofing materials for all types of buildings.",
      de: "Lieferung und Montage von hochwertigen Dachmaterialien für alle Gebäudetypen.",
    },
    heroImage: "stresne-krtine.jpg",
    sections: [
      {
        title: {
          sl: "Vrste kritin",
          en: "Types of Roofing",
          de: "Dachtypen",
        },
        content: {
          sl: "Ponujamo širok izbor strešnih kritin za različne vrste objektov.",
          en: "We offer a wide range of roofing materials for different types of buildings.",
          de: "Wir bieten eine breite Auswahl an Dachmaterialien für verschiedene Gebäudetypen.",
        },
      },
      {
        title: {
          sl: "Montaža",
          en: "Installation",
          de: "Montage",
        },
        content: {
          sl: "Strokovna montaža strešnih kritin z izkušeno ekipo.",
          en: "Professional installation of roofing materials with an experienced team.",
          de: "Professionelle Montage von Dachmaterialien mit einem erfahrenen Team.",
        },
      },
    ],
    features: [
      {
        title: {
          sl: "Naše storitve",
          en: "Our Services",
          de: "Unsere Leistungen",
        },
        items: {
          sl: [
            "Pločevinaste kritine",
            "Izolacijski sistemi",
            "Montaža",
            "Vzdrževanje",
            "Svetovanje",
          ],
          en: [
            "Metal roofing",
            "Insulation systems",
            "Installation",
            "Maintenance",
            "Consulting",
          ],
          de: [
            "Metalldächer",
            "Isolationssysteme",
            "Montage",
            "Wartung",
            "Beratung",
          ],
        },
      },
    ],
    gallery: [
      {
        image: "stresne-krtine.jpg",
        alt: {
          sl: "Pločevinasta streha",
          en: "Metal roof",
          de: "Metalldach",
        },
      },
      {
        image: "stresne-krtine.jpg",
        alt: {
          sl: "Izolacijski sistem",
          en: "Insulation system",
          de: "Isolationssystem",
        },
      },
    ],
  },
  "krovski-program": {
    title: {
      sl: "Krovski program",
      en: "Roofing Program",
      de: "Dachprogramm",
    },
    description: {
      sl: "Celovite rešitve za strehe, od načrtovanja do izvedbe.",
      en: "Comprehensive roofing solutions, from planning to execution.",
      de: "Umfassende Dachlösungen, von der Planung bis zur Ausführung.",
    },
    heroImage: "stresne-krtine.jpg",
    sections: [
      {
        title: {
          sl: "Načrtovanje",
          en: "Planning",
          de: "Planung",
        },
        content: {
          sl: "Strokovno načrtovanje strešnih sistemov za optimalno funkcionalnost.",
          en: "Professional planning of roofing systems for optimal functionality.",
          de: "Professionelle Planung von Dachsystemen für optimale Funktionalität.",
        },
      },
      {
        title: {
          sl: "Izvedba",
          en: "Execution",
          de: "Ausführung",
        },
        content: {
          sl: "Kakovostna izvedba strešnih del z izkušeno ekipo.",
          en: "Quality execution of roofing works with an experienced team.",
          de: "Qualitativ hochwertige Ausführung von Dacharbeiten mit einem erfahrenen Team.",
        },
      },
    ],
    features: [
      {
        title: {
          sl: "Naše storitve",
          en: "Our Services",
          de: "Unsere Leistungen",
        },
        items: {
          sl: [
            "Načrtovanje streh",
            "Izbira materialov",
            "Montaža",
            "Vzdrževanje",
            "Svetovanje",
          ],
          en: [
            "Roof planning",
            "Material selection",
            "Installation",
            "Maintenance",
            "Consulting",
          ],
          de: [
            "Dachplanung",
            "Materialauswahl",
            "Montage",
            "Wartung",
            "Beratung",
          ],
        },
      },
    ],
    gallery: [
      {
        image: "stresne-krtine.jpg",
        alt: {
          sl: "Načrtovanje strehe",
          en: "Roof planning",
          de: "Dachplanung",
        },
      },
      {
        image: "stresne-krtine.jpg",
        alt: {
          sl: "Izvedba strešnih del",
          en: "Roofing works execution",
          de: "Ausführung von Dacharbeiten",
        },
      },
    ],
  },
  "najem-opreme": {
    title: {
      sl: "Najem opreme",
      en: "Equipment Rental",
      de: "Geräteverleih",
    },
    description: {
      sl: "Najem gradbene in druge opreme za vaše projekte.",
      en: "Rental of construction and other equipment for your projects.",
      de: "Vermietung von Bau- und anderen Geräten für Ihre Projekte.",
    },
    heroImage: "najem-hero.jpeg",
    sections: [
      {
        title: {
          sl: "Oprema",
          en: "Equipment",
          de: "Geräte",
        },
        content: {
          sl: "Širok izbor kakovostne opreme za najem.",
          en: "Wide selection of quality equipment for rent.",
          de: "Große Auswahl an hochwertigen Geräten zur Miete.",
        },
      },
      {
        title: {
          sl: "Storitve",
          en: "Services",
          de: "Dienstleistungen",
        },
        content: {
          sl: "Strokovno svetovanje in podpora pri najemu opreme.",
          en: "Professional advice and support for equipment rental.",
          de: "Professionelle Beratung und Unterstützung bei der Gerätemiete.",
        },
      },
    ],
    features: [
      {
        title: {
          sl: "Naša ponudba",
          en: "Our Offer",
          de: "Unser Angebot",
        },
        items: {
          sl: [
            "Gradbena oprema",
            "Dvižne platforme",
            "Transportna oprema",
            "Orodja",
            "Svetovanje",
          ],
          en: [
            "Construction equipment",
            "Lifting platforms",
            "Transport equipment",
            "Tools",
            "Consulting",
          ],
          de: [
            "Baugeräte",
            "Hebebühnen",
            "Transportgeräte",
            "Werkzeuge",
            "Beratung",
          ],
        },
      },
    ],
    gallery: [
      {
        image: "najem-hero.jpeg",
        alt: {
          sl: "Gradbena oprema",
          en: "Construction equipment",
          de: "Baugeräte",
        },
      },
      {
        image: "najem-hero.jpeg",
        alt: {
          sl: "Dvižna platforma",
          en: "Lifting platform",
          de: "Hebebühne",
        },
      },
    ],
  },
};
