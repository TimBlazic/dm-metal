export type Language = "sl" | "en" | "de";

export type TranslationKey =
  | "contact"
  | "message"
  | "name"
  | "company"
  | "email"
  | "phone"
  | "services"
  | "optional"
  | "send"
  | "address"
  | "workingHours"
  | "siteTitle"
  | "siteDescription"
  | "contactTitle"
  | "contactDescription"
  | "homeTitle"
  | "homeDescription"
  | "aboutTitle"
  | "aboutDescription"
  | "servicesTitle"
  | "servicesDescription"
  | "referencesTitle"
  | "referencesDescription"
  | "home"
  | "about"
  | "references"
  | "inquiry"
  | "heroTitle"
  | "heroSubtitle"
  | "ourProjects"
  | "contactUs"
  | "ourServices"
  | "servicesSubtitle"
  | "steelConstructions"
  | "steelConstructionsDesc"
  | "facadeElements"
  | "facadeElementsDesc"
  | "roofing"
  | "roofingDesc"
  | "steelHouses"
  | "steelHousesDesc"
  | "roofingProgram"
  | "roofingProgramDesc"
  | "engineering"
  | "engineeringDesc"
  | "equipmentRental"
  | "equipmentRentalDesc"
  | "byTheNumbers"
  | "successfulProjects"
  | "inLastYears"
  | "constructionsBuilt"
  | "yearly"
  | "yearsExperience"
  | "inMarket"
  | "numbersSpeak"
  | "aboutCompany"
  | "aboutCompanyDesc1"
  | "aboutCompanyDesc2"
  | "readMore"
  | "needSteelConstructions"
  | "ctaDescription"
  | "sendInquiry"
  | "projectsSubtitle"
  | "viewAllProjects"
  | "previousPage"
  | "nextPage"
  | "goToPage"
  | "quickLinks"
  | "allRightsReserved"
  | "serviceNotFound"
  | "backToHome"
  | "serviceNotFoundDescription"
  | "country"
  | "openOnMap"
  | "mondayFriday"
  | "saturdaySunday"
  | "closed"
  | "footerCompanyDescription";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  sl: {
    contact: "Kontakt",
    message: "Sporočilo",
    name: "Ime in priimek",
    company: "Podjetje",
    email: "E-pošta",
    phone: "Telefon",
    services: "Storitve",
    optional: "neobvezno",
    send: "Pošlji",
    address: "Naslov",
    workingHours: "Delovni čas",
    siteTitle: "DM Metal - Kovinske konstrukcije in jeklene hiše",
    siteDescription:
      "Specializirani za kovinske konstrukcije, jeklene hiše in industrijsko opremo. Kakovostne rešitve po meri za vaše projekte.",
    contactTitle: "Kontaktirajte nas | DM Metal",
    contactDescription:
      "Stopite v stik z nami za vse informacije o naših storitvah. Naša ekipa vam je na voljo za vsa vprašanja in svetovanje.",
    homeTitle: "DM Metal - Vodilni proizvajalec kovinskih konstrukcij",
    homeDescription:
      "Odkrijte našo ponudbo kakovostnih kovinskih konstrukcij, jeklenih hiš in industrijske opreme. Inovativne rešitve po meri.",
    aboutTitle: "O nas | DM Metal",
    aboutDescription:
      "Spoznajte našo zgodbo, vrednote in predanost kakovosti. Več kot 20 let izkušenj v kovinski industriji.",
    servicesTitle: "Naše storitve | DM Metal",
    servicesDescription:
      "Celovita ponudba storitev: kovinske konstrukcije, jeklene hiše in industrijska oprema. Prilagojene rešitve za vaše potrebe.",
    referencesTitle: "Reference | DM Metal",
    referencesDescription:
      "Oglejte si naše uspešno zaključene projekte. Kakovost in zanesljivost, potrjena s strani zadovoljnih strank.",
    home: "Domov",
    about: "O podjetju",
    references: "Reference",
    inquiry: "Povpraševanje",
    heroTitle: "Jeklene konstrukcije po meri",
    heroSubtitle:
      "Zanesljiv partner za vaše kovinske konstrukcije in inženiring",
    ourProjects: "Naši projekti",
    contactUs: "Kontaktirajte nas",
    ourServices: "Naše storitve",
    servicesSubtitle:
      "Ponujamo celovite rešitve na področju kovinskih konstrukcij, fasadnih elementov in inženiringa",
    steelConstructions: "Jeklene konstrukcije",
    steelConstructionsDesc:
      "Načrtovanje in izdelava jeklenih konstrukcij za industrijske, poslovne in stanovanjske objekte.",
    facadeElements: "Fasadni elementi",
    facadeElementsDesc:
      "Izdelava in montaža fasadnih elementov, ki združujejo estetiko in funkcionalnost.",
    roofing: "Strešne kritine",
    roofingDesc:
      "Kakovostne strešne kritine za vse vrste objektov z dolgo življenjsko dobo.",
    steelHouses: "Jeklene hiše in nadstreški",
    steelHousesDesc:
      "Sodobne jeklene hiše in nadstreški po meri, prilagojeni vašim potrebam.",
    roofingProgram: "Krovski program",
    roofingProgramDesc:
      "Celovite krovske storitve z uporabo najkakovostnejših materialov.",
    engineering: "Projektiranje in inženiring",
    engineeringDesc:
      "Strokovno projektiranje in inženiring za optimalne rešitve vaših projektov.",
    equipmentRental: "Najem opreme",
    equipmentRentalDesc:
      "Profesionalna oprema za najem - gradbeni odri, dvigala in druga specializirana oprema.",
    byTheNumbers: "DM Metal v številkah",
    successfulProjects: "Uspešnih projektov",
    inLastYears: "v zadnjih 10 letih",
    constructionsBuilt: "Izdelanih konstrukcij",
    yearly: "letno",
    yearsExperience: "Let izkušenj",
    inMarket: "na trgu",
    numbersSpeak:
      "Naše številke govorijo same zase. Z vsakim projektom rastemo in se razvijamo, da lahko našim strankam ponudimo najboljše rešitve v kovinski industriji.",
    aboutCompany: "O podjetju DM Metal",
    aboutCompanyDesc1:
      "Podjetje DM Metal d.o.o. je specializirano za izdelavo jeklenih konstrukcij, fasadnih elementov in strešnih kritin. Z dolgoletnimi izkušnjami in strokovnim znanjem zagotavljamo kakovostne rešitve za naše stranke.",
    aboutCompanyDesc2:
      "Naša ekipa izkušenih strokovnjakov je predana kakovosti, zanesljivosti in inovativnosti pri vsakem projektu, ne glede na njegovo velikost.",
    readMore: "Več o nas",
    needSteelConstructions: "Potrebujete kovinske konstrukcije?",
    ctaDescription:
      "Kontaktirajte nas za brezplačno svetovanje in ponudbo. Naša ekipa vam bo pomagala najti optimalno rešitev za vaš projekt.",
    sendInquiry: "Pošljite povpraševanje",
    projectsSubtitle: "Oglejte si izbor naših projektov in referenc",
    viewAllProjects: "Oglejte si vse projekte",
    previousPage: "Prejšnja stran",
    nextPage: "Naslednja stran",
    goToPage: "Pojdi na stran",
    quickLinks: "Hitre povezave",
    allRightsReserved: "Vse pravice pridržane.",
    serviceNotFound: "Storitev ni bila najdena",
    backToHome: "Nazaj na domačo stran",
    serviceNotFoundDescription:
      "Storitev, ki jo iščete, ne obstaja. Prosimo, preverite URL naslov ali se vrnite na domačo stran.",
    country: "Slovenija",
    openOnMap: "Odpri na zemljevidu",
    mondayFriday: "Ponedeljek - Petek",
    saturdaySunday: "Sobota - Nedelja",
    closed: "Zaprto",
    footerCompanyDescription:
      "Specializirani za kovinske konstrukcije, jeklene hiše in industrijsko opremo.",
  },
  en: {
    contact: "Contact",
    message: "Message",
    name: "Name and surname",
    company: "Company",
    email: "Email",
    phone: "Phone",
    services: "Services",
    optional: "optional",
    send: "Send",
    address: "Address",
    workingHours: "Working Hours",
    siteTitle: "DM Metal - Metal Constructions and Steel Houses",
    siteDescription:
      "Specialized in metal constructions, steel houses, and industrial equipment. Quality custom solutions for your projects.",
    contactTitle: "Contact Us | DM Metal",
    contactDescription:
      "Get in touch with us for information about our services. Our team is available for all inquiries and consultations.",
    homeTitle: "DM Metal - Leading Manufacturer of Metal Constructions",
    homeDescription:
      "Discover our range of quality metal constructions, steel houses, and industrial equipment. Innovative custom solutions.",
    aboutTitle: "About Us | DM Metal",
    aboutDescription:
      "Learn about our story, values, and commitment to quality. Over 20 years of experience in the metal industry.",
    servicesTitle: "Our Services | DM Metal",
    servicesDescription:
      "Comprehensive service offering: metal constructions, steel houses, and industrial equipment. Tailored solutions for your needs.",
    referencesTitle: "References | DM Metal",
    referencesDescription:
      "View our successfully completed projects. Quality and reliability confirmed by satisfied customers.",
    home: "Home",
    about: "About",
    references: "References",
    inquiry: "Inquiry",
    heroTitle: "Custom Steel Constructions",
    heroSubtitle:
      "Your reliable partner for metal constructions and engineering",
    ourProjects: "Our Projects",
    contactUs: "Contact Us",
    ourServices: "Our Services",
    servicesSubtitle:
      "We offer comprehensive solutions in metal constructions, facade elements, and engineering",
    steelConstructions: "Steel Constructions",
    steelConstructionsDesc:
      "Design and manufacturing of steel constructions for industrial, commercial, and residential buildings.",
    facadeElements: "Facade Elements",
    facadeElementsDesc:
      "Manufacturing and installation of facade elements that combine aesthetics and functionality.",
    roofing: "Roofing",
    roofingDesc:
      "Quality roofing solutions for all types of buildings with long service life.",
    steelHouses: "Steel Houses and Canopies",
    steelHousesDesc:
      "Modern custom steel houses and canopies, tailored to your needs.",
    roofingProgram: "Roofing Program",
    roofingProgramDesc:
      "Comprehensive roofing services using the highest quality materials.",
    engineering: "Design and Engineering",
    engineeringDesc:
      "Professional design and engineering for optimal solutions to your projects.",
    equipmentRental: "Equipment Rental",
    equipmentRentalDesc:
      "Professional equipment rental - scaffolding, lifts, and other specialized equipment.",
    byTheNumbers: "DM Metal in Numbers",
    successfulProjects: "Successful Projects",
    inLastYears: "in the last 10 years",
    constructionsBuilt: "Constructions Built",
    yearly: "yearly",
    yearsExperience: "Years Experience",
    inMarket: "in the market",
    numbersSpeak:
      "Our numbers speak for themselves. With each project, we grow and develop to offer our customers the best solutions in the metal industry.",
    aboutCompany: "About DM Metal",
    aboutCompanyDesc1:
      "DM Metal d.o.o. specializes in the manufacture of steel constructions, facade elements, and roofing. With years of experience and expertise, we provide quality solutions for our customers.",
    aboutCompanyDesc2:
      "Our team of experienced professionals is committed to quality, reliability, and innovation in every project, regardless of its size.",
    readMore: "Read More",
    needSteelConstructions: "Need Steel Constructions?",
    ctaDescription:
      "Contact us for free consultation and quotation. Our team will help you find the optimal solution for your project.",
    sendInquiry: "Send Inquiry",
    projectsSubtitle: "View a selection of our projects and references",
    viewAllProjects: "View all projects",
    previousPage: "Previous page",
    nextPage: "Next page",
    goToPage: "Go to page",
    quickLinks: "Quick Links",
    allRightsReserved: "All rights reserved.",
    serviceNotFound: "Service not found",
    backToHome: "Back to home",
    serviceNotFoundDescription:
      "The service you are looking for does not exist. Please check the URL or return to the home page.",
    country: "Slovenia",
    openOnMap: "Open on map",
    mondayFriday: "Monday - Friday",
    saturdaySunday: "Saturday - Sunday",
    closed: "Closed",
    footerCompanyDescription:
      "Specialized in metal constructions, steel houses and industrial equipment.",
  },
  de: {
    contact: "Kontakt",
    message: "Nachricht",
    name: "Vor- und Nachname",
    company: "Firma",
    email: "E-Mail",
    phone: "Telefon",
    services: "Dienstleistungen",
    optional: "optional",
    send: "Senden",
    address: "Adresse",
    workingHours: "Öffnungszeiten",
    siteTitle: "DM Metal - Metallkonstruktionen und Stahlhäuser",
    siteDescription:
      "Spezialisiert auf Metallkonstruktionen, Stahlhäuser und Industrieausrüstung. Qualitativ hochwertige Lösungen für Ihre Projekte.",
    contactTitle: "Kontaktieren Sie uns | DM Metal",
    contactDescription:
      "Kontaktieren Sie uns für Informationen über unsere Dienstleistungen. Unser Team steht Ihnen für alle Anfragen zur Verfügung.",
    homeTitle: "DM Metal - Führender Hersteller von Metallkonstruktionen",
    homeDescription:
      "Entdecken Sie unser Angebot an hochwertigen Metallkonstruktionen, Stahlhäusern und Industrieausrüstung. Innovative Lösungen nach Maß.",
    aboutTitle: "Über uns | DM Metal",
    aboutDescription:
      "Erfahren Sie mehr über unsere Geschichte, Werte und unser Engagement für Qualität. Über 20 Jahre Erfahrung in der Metallindustrie.",
    servicesTitle: "Unsere Dienstleistungen | DM Metal",
    servicesDescription:
      "Umfassendes Dienstleistungsangebot: Metallkonstruktionen, Stahlhäuser und Industrieausrüstung. Maßgeschneiderte Lösungen für Ihre Bedürfnisse.",
    referencesTitle: "Referenzen | DM Metal",
    referencesDescription:
      "Sehen Sie sich unsere erfolgreich abgeschlossenen Projekte an. Qualität und Zuverlässigkeit, bestätigt durch zufriedene Kunden.",
    home: "Startseite",
    about: "Über uns",
    references: "Referenzen",
    inquiry: "Anfrage",
    heroTitle: "Maßgeschneiderte Stahlkonstruktionen",
    heroSubtitle:
      "Ihr zuverlässiger Partner für Metallkonstruktionen und Engineering",
    ourProjects: "Unsere Projekte",
    contactUs: "Kontaktieren Sie uns",
    ourServices: "Unsere Dienstleistungen",
    servicesSubtitle:
      "Wir bieten umfassende Lösungen im Bereich Metallkonstruktionen, Fassadenelemente und Engineering",
    steelConstructions: "Stahlkonstruktionen",
    steelConstructionsDesc:
      "Planung und Herstellung von Stahlkonstruktionen für Industrie-, Gewerbe- und Wohngebäude.",
    facadeElements: "Fassadenelemente",
    facadeElementsDesc:
      "Herstellung und Montage von Fassadenelementen, die Ästhetik und Funktionalität vereinen.",
    roofing: "Dacheindeckungen",
    roofingDesc:
      "Qualitativ hochwertige Dacheindeckungen für alle Gebäudetypen mit langer Lebensdauer.",
    steelHouses: "Stahlhäuser und Überdachungen",
    steelHousesDesc:
      "Moderne Stahlhäuser und Überdachungen nach Maß, angepasst an Ihre Bedürfnisse.",
    roofingProgram: "Dachdeckerprogramm",
    roofingProgramDesc:
      "Umfassende Dachdeckerarbeiten mit Verwendung hochwertigster Materialien.",
    engineering: "Planung und Engineering",
    engineeringDesc:
      "Professionelle Planung und Engineering für optimale Lösungen Ihrer Projekte.",
    equipmentRental: "Geräteverleih",
    equipmentRentalDesc:
      "Professionelle Gerätevermietung - Gerüste, Hebebühnen und andere Spezialausrüstung.",
    byTheNumbers: "DM Metal in Zahlen",
    successfulProjects: "Erfolgreiche Projekte",
    inLastYears: "in den letzten 10 Jahren",
    constructionsBuilt: "Gebaute Konstruktionen",
    yearly: "jährlich",
    yearsExperience: "Jahre Erfahrung",
    inMarket: "am Markt",
    numbersSpeak:
      "Unsere Zahlen sprechen für sich. Mit jedem Projekt wachsen und entwickeln wir uns weiter, um unseren Kunden die besten Lösungen in der Metallindustrie bieten zu können.",
    aboutCompany: "Über DM Metal",
    aboutCompanyDesc1:
      "DM Metal d.o.o. ist spezialisiert auf die Herstellung von Stahlkonstruktionen, Fassadenelementen und Dacheindeckungen. Mit langjähriger Erfahrung und Fachwissen bieten wir qualitativ hochwertige Lösungen für unsere Kunden.",
    aboutCompanyDesc2:
      "Unser Team erfahrener Fachleute setzt sich für Qualität, Zuverlässigkeit und Innovation bei jedem Projekt ein, unabhängig von seiner Größe.",
    readMore: "Mehr erfahren",
    needSteelConstructions: "Benötigen Sie Metallkonstruktionen?",
    ctaDescription:
      "Kontaktieren Sie uns für eine kostenlose Beratung und ein Angebot. Unser Team hilft Ihnen, die optimale Lösung für Ihr Projekt zu finden.",
    sendInquiry: "Anfrage senden",
    projectsSubtitle:
      "Sehen Sie sich eine Auswahl unserer Projekte und Referenzen an",
    viewAllProjects: "Alle Projekte ansehen",
    previousPage: "Vorherige Seite",
    nextPage: "Nächste Seite",
    goToPage: "Gehe zu Seite",
    quickLinks: "Schnellzugriff",
    allRightsReserved: "Alle Rechte vorbehalten.",
    serviceNotFound: "Dienst nicht gefunden",
    backToHome: "Zurück zur Startseite",
    serviceNotFoundDescription:
      "Der gesuchte Dienst existiert nicht. Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.",
    country: "Slovenia",
    openOnMap: "Offen bei Zamjevid",
    mondayFriday: "Montag - Freitag",
    saturdaySunday: "Samstag - Sonntag",
    closed: "geschlossen",
    footerCompanyDescription:
      "Spezialisiert auf Metallkonstruktionen, Stahlhäuser und Industrieausrüstung.",
  },
};
