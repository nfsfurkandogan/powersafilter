import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import PowerAssistant from "@/components/PowerAssistant";
import SiteHeader from "@/components/SiteHeader";
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

          <footer className="site-footer">
            <div className="container footer-inner">
              <div className="footer-brand">
                <div className="footer-logo">
                  <Image
                    src="/logo.png"
                    alt="Powersa Filter"
                    width={743}
                    height={154}
                    quality={100}
                  />
                </div>
                <p>Filtre çözümlerinde güvenilir tercih.</p>
                <div className="footer-badges">
                  <span>Yağ</span>
                  <span>Yakıt</span>
                  <span>Hava</span>
                  <span>Polen</span>
                  <span>Hidrolik</span>
                </div>
              </div>
              <div className="footer-columns">
                <div>
                  <strong>Hızlı Menü</strong>
                  <div className="footer-links">
                    <a href="/">Ana Sayfa</a>
                    <a href="/urun-ara">Ürün Arama</a>
                    <a href="/hakkimizda">Hakkımızda</a>
                    <a href="/hizmetler">Hizmetler</a>
                  </div>
                </div>
                <div>
                  <strong>Katalog</strong>
                  <div className="footer-links">
                    <a href="/katalog">Katalog Merkezi</a>
                    <a href="/kalite">Kalite</a>
                    <a href="/subeler">Şubeler</a>
                  </div>
                </div>
                <div>
                  <strong>İletişim</strong>
                  <div className="footer-links">
                    <a href="/iletisim">İletişim sayfası</a>
                    <span>Telefon: —</span>
                    <span>E-posta: —</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="footer-bottom-inner">
                  <span>© 2026 Powersa Filter. Tüm hakları saklıdır.</span>
                  <span className="footer-credit">
                    Designed by{" "}
                    <a href="https://nfssoft.com" target="_blank" rel="noreferrer">
                      Nfs Soft
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </footer>
          <PowerAssistant />
        </div>
      </body>
    </html>
  );
}
