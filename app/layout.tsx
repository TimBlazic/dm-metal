import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dm-metal.eu"),
  title: {
    template: "%s | DM Metal",
    default: "DM Metal - Profesionalna kovinska oprema",
  },
  description:
    "Specializirani za proizvodnjo visokokakovostne kovinske opreme. Inovativne rešitve po meri za vaše potrebe.",
  keywords: [
    "kovinska oprema",
    "proizvodnja",
    "metal",
    "slovenija",
    "industrija",
  ],
  authors: [{ name: "DM Metal" }],
  openGraph: {
    title: "DM Metal - Profesionalna kovinska oprema",
    description:
      "Specializirani za proizvodnjo visokokakovostne kovinske opreme",
    type: "website",
    locale: "sl_SI",
    siteName: "DM Metal",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dm-metal.eu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
