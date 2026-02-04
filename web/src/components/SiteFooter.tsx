"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const locales = ["tr", "en", "ka", "ar"] as const;

const labels = {
  tr: {
    tagline: "Filtre çözümlerinde güvenilir tercih.",
    quick: "Hızlı Menü",
    catalog: "Katalog",
    contact: "İletişim",
    home: "Ana Sayfa",
    search: "Ürün Arama",
    about: "Hakkımızda",
    services: "Hizmetler",
    catalogCenter: "Katalog Merkezi",
    quality: "Kalite",
    branches: "Şubeler",
    contactPage: "İletişim sayfası",
    phone: "Telefon: +90 442 000 00 00",
    email: "E-posta: info@powersafilter.com",
    rights: "© 2026 Powersa Filter. Tüm hakları saklıdır.",
    designed: "Designed by",
  },
  en: {
    tagline: "A reliable choice in filter solutions.",
    quick: "Quick Links",
    catalog: "Catalog",
    contact: "Contact",
    home: "Home",
    search: "Product Search",
    about: "About",
    services: "Services",
    catalogCenter: "Catalog Center",
    quality: "Quality",
    branches: "Branches",
    contactPage: "Contact page",
    phone: "Phone: +90 442 000 00 00",
    email: "Email: info@powersafilter.com",
    rights: "© 2026 Powersa Filter. All rights reserved.",
    designed: "Designed by",
  },
  ka: {
    tagline: "საიმედო არჩევანი ფილტრების გადაწყვეტილებებში.",
    quick: "სწრაფი ბმულები",
    catalog: "კატალოგი",
    contact: "კონტაქტი",
    home: "მთავარი",
    search: "პროდუქტის ძიება",
    about: "ჩვენ შესახებ",
    services: "სერვისები",
    catalogCenter: "კატალოგის ცენტრი",
    quality: "ხარისხი",
    branches: "ფილიალები",
    contactPage: "საკონტაქტო გვერდი",
    phone: "ტელეფონი: +90 442 000 00 00",
    email: "ელ.ფოსტა: info@powersafilter.com",
    rights: "© 2026 Powersa Filter. ყველა უფლება დაცულია.",
    designed: "Designed by",
  },
  ar: {
    tagline: "خيار موثوق في حلول الفلاتر.",
    quick: "روابط سريعة",
    catalog: "الكتالوج",
    contact: "اتصل بنا",
    home: "الرئيسية",
    search: "بحث المنتجات",
    about: "من نحن",
    services: "خدماتنا",
    catalogCenter: "مركز الكتالوج",
    quality: "الجودة",
    branches: "الفروع",
    contactPage: "صفحة الاتصال",
    phone: "الهاتف: +90 442 000 00 00",
    email: "البريد: info@powersafilter.com",
    rights: "© 2026 Powersa Filter. جميع الحقوق محفوظة.",
    designed: "Designed by",
  },
} as const;

function getLocale(pathname: string) {
  const match = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  return match || "tr";
}

export default function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocale(pathname || "/");
  const t = labels[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  const link = (path: string) => `${base}${path}`;

  return (
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
          <p>{t.tagline}</p>
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
            <strong>{t.quick}</strong>
            <div className="footer-links">
              <a href={link("/")}>{t.home}</a>
              <a href={link("/urun-ara")}>{t.search}</a>
              <a href={link("/hakkimizda")}>{t.about}</a>
              <a href={link("/hizmetler")}>{t.services}</a>
            </div>
          </div>
          <div>
            <strong>{t.catalog}</strong>
            <div className="footer-links">
              <a href={link("/katalog")}>{t.catalogCenter}</a>
              <a href={link("/kalite")}>{t.quality}</a>
              <a href={link("/subeler")}>{t.branches}</a>
            </div>
          </div>
          <div>
            <strong>{t.contact}</strong>
            <div className="footer-links">
              <a href={link("/iletisim")}>{t.contactPage}</a>
              <span>{t.phone}</span>
              <span>{t.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <span>{t.rights}</span>
            <span className="footer-credit">
              {t.designed} {" "}
              <a href="https://nfssoft.com" target="_blank" rel="noreferrer">
                Nfs Soft
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
