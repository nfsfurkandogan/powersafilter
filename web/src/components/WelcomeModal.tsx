"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const labels = {
  tr: {
    eyebrow: "Powersa Filter",
    title: "Sitemize hoşgeldiniz!",
    body: "Maskotumuz size eşlik ediyor. Katalog arama ile doğru filtreyi saniyeler içinde bulun.",
    primary: "Kataloğa Git",
    home: "Ana sayfa",
    close: "Kapat",
    mascotAlt: "Powersa maskotu",
  },
  ar: {
    eyebrow: "Powersa Filter",
    title: "مرحبًا بكم في موقعنا!",
    body: "تميمتنا ترافقكم. اعثر على الفلتر المناسب خلال ثوانٍ عبر بحث الكتالوج.",
    primary: "اذهب إلى الكتالوج",
    home: "الصفحة الرئيسية",
    close: "إغلاق",
    mascotAlt: "تميمة باورسا",
  },
} as const;

function getLocale(pathname: string) {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "tr";
}

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const locale = getLocale(pathname || "/");
  const t = labels[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  const link = (path: string) => `${base}${path}`;

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const dismiss = () => {
    setOpen(false);
  };

  return (
    <div className="welcome-modal-backdrop" onClick={dismiss}>
      <div
        className="welcome-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="welcome-modal-hero">
          <Image
            className="welcome-mascot"
            src="/mascot.png"
            alt={t.mascotAlt}
            width={1200}
            height={900}
            quality={95}
            priority
          />
          <div className="welcome-copy">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 id="welcome-title">{t.title}</h2>
            <p>{t.body}</p>
            <div className="welcome-actions">
              <a className="btn btn-primary" href={link("/urun-ara")} onClick={dismiss}>
                {t.primary}
              </a>
              <a className="btn btn-ghost" href={link("/")} onClick={dismiss}>
                {t.home}
              </a>
              <button className="btn btn-ghost" type="button" onClick={dismiss}>
                {t.close}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
