import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import PowerAssistant from "@/components/PowerAssistant";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PerformancePatch from "@/components/PerformancePatch";

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexSansHeading = IBM_Plex_Sans({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Powersa Filter | Ürün Arama",
  description:
    "Powersa Filter ürün arama motoru ile stok kodu, üretici kodu ve kategori bazlı filtreleme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${plexSans.variable} ${plexSansHeading.variable} antialiased`}
      >
        <div className="page">
          <PerformancePatch />
          <SiteHeader />

          <main>{children}</main>

          <SiteFooter />
          <PowerAssistant />
        </div>
      </body>
    </html>
  );
}
