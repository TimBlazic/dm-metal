"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navigation from "@/app/[lang]/components/navigation";
import Footer from "@/app/[lang]/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              Domov
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-gray-900">O podjetju</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex gap-12 items-center">
            <div className="relative h-[300px] w-[300px]">
              <Image
                src="/dm-metal-logo-2.jpg"
                alt="DM Metal delavnica"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                O podjetju DM-Metal
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Izpolnjujemo zahteve in pričakovanja svojih zahtevnih strank pri
                projektiranju in postavitvi športnih, skladiščnih in proizvodnih
                objektov ter izvedbi ostalih namenskih gradenj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">10+ let izkušenj</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <p className="text-gray-700">
                    Vodilno podjetje na področju jeklenih konstrukcij v
                    Sloveniji
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <p className="text-gray-700">
                    Uspešno izvedeni projekti po vsej Evropi
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <p className="text-gray-700">
                    Stalno vlaganje v razvoj in izobraževanje
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Zakaj DM-Metal?</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <p className="text-gray-700">
                    Celostna izvedba od ideje do končnega izdelka
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <p className="text-gray-700">
                    Najsodobnejša tehnologija in oprema
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <p className="text-gray-700">Izkušena ekipa strokovnjakov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vrednote Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Naše vrednote
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col h-full">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-600">
                    Inovativnost
                  </h3>
                </div>
                <p className="text-gray-700">
                  Nenehno iščemo nove rešitve in pristope k projektom. Sledimo
                  najnovejšim tehnologijam in standardom v industriji.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col h-full">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-600">
                    Zanesljivost
                  </h3>
                </div>
                <p className="text-gray-700">
                  Držimo se dogovorjenih rokov in zagotavljamo najvišjo kakovost
                  izvedbe. Naše stranke se lahko zanesejo na nas.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col h-full">
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
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-600">
                    Partnerstvo
                  </h3>
                </div>
                <p className="text-gray-700">
                  Z našimi strankami gradimo dolgotrajne odnose. Njihov uspeh je
                  naš uspeh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="bg-red-600 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Začnimo sodelovati
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Iščete zanesljivega partnerja za vaš naslednji projekt?
              Kontaktirajte nas za brezplačno svetovanje in ponudbo.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
