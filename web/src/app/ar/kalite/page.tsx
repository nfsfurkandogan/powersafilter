import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Powersa Filter | الجودة",
  description: "صور فلاتر باورسا ومعايير الجودة.",
};

const qualityImages = [
  {
    src: "/quality-1.png",
    title: "فلتر الزيت",
    alt: "صورة فلتر الزيت",
  },
  {
    src: "/quality-2.png",
    title: "فلتر الوقود",
    alt: "صورة فلتر الوقود",
  },
  {
    src: "/quality-3.png",
    title: "فلتر الهواء",
    alt: "صورة فلتر الهواء",
  },
  {
    src: "/quality-4.png",
    title: "فلتر المقصورة",
    alt: "صورة فلتر المقصورة",
  },
  {
    src: "/quality-5.png",
    title: "فلتر هيدروليك",
    alt: "صورة فلتر هيدروليك",
  },
  {
    src: "/quality-6.png",
    title: "إنتاج خاص",
    alt: "صورة فلتر إنتاج خاص",
  },
];

export default function QualityPageAr() {
  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero quality-hero">
        <div className="container page-hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">الجودة</span>
            <h1>ثقة في أداء الفلاتر ومعيار جودة في كل التفاصيل.</h1>
            <p>
              في هذه الصفحة نشارك صور فلاتر تم إنشاؤها باستخدام ChatGPT.
              تعكس كل صورة نهجنا في الشكل والملمس عبر مجموعات منتجاتنا.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/ar/urun-ara">
                بحث المنتجات
              </a>
              <a className="btn btn-ghost" href="/ar/katalog">
                مركز الكتالوج
              </a>
            </div>
          </div>
          <div className="page-hero-card quality-hero-card">
            <strong>إنتاج يركز على الجودة</strong>
            <p>المتانة والتوافق وكفاءة الترشيح على معيار واحد.</p>
            <p>تم اختيار الصور لمقارنة مجموعات المنتجات بسرعة.</p>
          </div>
        </div>
      </section>

      <section className="section quality-gallery">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>صور الفلاتر</h2>
              <p>صور فلاتر تم إنشاؤها باستخدام ChatGPT.</p>
            </div>
            <div className="section-badge">صور</div>
          </div>

          <div className="gallery-grid quality-grid">
            {qualityImages.map((item) => (
              <figure key={item.src} className="gallery-card quality-card">
                <div className="gallery-visual quality-visual">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1600}
                    height={1200}
                    quality={92}
                    sizes="(max-width: 1024px) 90vw, 360px"
                  />
                </div>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
