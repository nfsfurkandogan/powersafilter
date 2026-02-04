"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const locales = ["tr", "en", "ka", "ar"] as const;

const labels = {
  tr: {
    home: "Ana Sayfa",
    search: "Ürün Ara",
    about: "Hakkımızda",
    services: "Hizmetler",
    quality: "Kalite",
    catalog: "Katalog",
    branches: "Şubeler",
    contact: "İletişim",
    cta: "Hemen Ara",
    language: "Dil",
  },
  en: {
    home: "Home",
    search: "Search",
    about: "About",
    services: "Services",
    quality: "Quality",
    catalog: "Catalog",
    branches: "Branches",
    contact: "Contact",
    cta: "Search Now",
    language: "Language",
  },
  ka: {
    home: "მთავარი",
    search: "პროდუქტის ძიება",
    about: "ჩვენ შესახებ",
    services: "სერვისები",
    quality: "ხარისხი",
    catalog: "კატალოგი",
    branches: "ფილიალები",
    contact: "კონტაქტი",
    cta: "ახლავე მოძებნე",
    language: "ენა",
  },
  ar: {
    home: "الرئيسية",
    search: "بحث المنتجات",
    about: "من نحن",
    services: "خدماتنا",
    quality: "الجودة",
    catalog: "الكتالوج",
    branches: "الفروع",
    contact: "اتصل بنا",
    cta: "ابحث الآن",
    language: "اللغة",
  },
} as const;

function getLocale(pathname: string) {
  const match = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  return match || "tr";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocale(pathname || "/");
  const t = labels[locale];
  const homeHref = locale === "tr" ? "/" : `/${locale}`;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={homeHref}>
          <Image
            className="brand-logo"
            src="/logo.png"
            alt="Powersa Filter"
            width={743}
            height={154}
            quality={100}
            priority
          />
        </a>
        <nav className="nav-shell">
          <a className="nav-link" href={homeHref}>
            {t.home}
          </a>
          <a className="nav-link highlight" href="/urun-ara">
            {t.search}
          </a>
          <a className="nav-link" href="/hakkimizda">
            {t.about}
          </a>
          <a className="nav-link" href="/hizmetler">
            {t.services}
          </a>
          <a className="nav-link" href="/kalite">
            {t.quality}
          </a>
          <a className="nav-link" href="/katalog">
            {t.catalog}
          </a>
          <a className="nav-link" href="/subeler">
            {t.branches}
          </a>
          <a className="nav-link" href="/iletisim">
            {t.contact}
          </a>
          <div className="lang-switcher">
            <span>{t.language}</span>
            <select
              aria-label={t.language}
              value={locale}
              onChange={(event) => {
                const next = event.target.value;
                const target = next === "tr" ? "/" : `/${next}`;
                window.location.href = target;
              }}
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="ka">KA</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </nav>
        <a className="btn btn-primary small" href="/urun-ara">
          {t.cta}
        </a>
      </div>
    </header>
  );
}
