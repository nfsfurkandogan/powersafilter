import Image from "next/image";

const services = [
  {
    id: "yag",
    title: "فلتر الزيت",
    subtitle: "حماية أساسية لعمر المحرك وأدائه.",
    image: {
      src: "/filters-oil@2x.png",
      alt: "فلتر زيت باورسا",
      width: 1738,
      height: 1746,
    },
    paragraphs: [
      "فلتر الزيت يحبس الشوائب ويحمي المحرك. اختيار الفلتر الصحيح يطيل عمر المكونات ويمنع فقدان الأداء.",
      "فلاتر الزيت من Powersa Filter توفر ترشيحاً موثوقاً عبر شرائح متعددة مع وصول سريع عبر كود المخزون والفئة.",
    ],
    bullets: ["كفاءة ترشيح عالية", "توافق واسع", "وصول سريع لكود المخزون"],
  },
  {
    id: "hava",
    title: "فلتر الهواء",
    subtitle: "تدفق هواء نظيف لعمل متوازن.",
    image: {
      src: "/filters-grid@2x.png",
      alt: "فلتر هواء باورسا",
      width: 1966,
      height: 1750,
    },
    paragraphs: [
      "فلتر الهواء يمنع الغبار من دخول المحرك ويرفع كفاءة الاحتراق. الهواء النظيف يحسن استهلاك الوقود ويحمي المحرك.",
      "فلاتر الهواء من Powersa Filter مناسبة للسيارات والقطاع التجاري والآليات الثقيلة.",
    ],
    bullets: ["تدفق هواء متوازن", "ترشيح يركز على الأداء", "خيارات بحسب نوع المركبة"],
  },
  {
    id: "yakit",
    title: "فلتر الوقود",
    subtitle: "أقصى نظافة وموثوقية في خط الوقود.",
    image: {
      src: "/filters-fuel@2x.png",
      alt: "فلتر وقود باورسا",
      width: 1916,
      height: 1858,
    },
    paragraphs: [
      "فلتر الوقود يمنع دخول الشوائب إلى النظام ويحمي الحاقنات والمضخات. الوقود النظيف أساسي للأداء والاعتمادية.",
      "فلاتر الوقود من Powersa Filter تدعم الوصول السريع للمنتج الصحيح عبر توافقات متعددة.",
    ],
    bullets: ["حماية قوية في خط الوقود", "حماية مكونات النظام", "مطابقة سريعة"],
  },
  {
    id: "polen",
    title: "فلتر المقصورة",
    subtitle: "ترشيح فعال لجودة هواء المقصورة.",
    image: {
      src: "/filters-cabin@2x.png",
      alt: "فلتر مقصورة باورسا",
      width: 1994,
      height: 1730,
    },
    paragraphs: [
      "فلتر المقصورة يحبس الغبار ومسببات الحساسية ويحسن راحة الركاب.",
      "فلاتر المقصورة من Powersa Filter توفر اختياراً سريعاً عبر التصنيفات وكود المخزون.",
    ],
    bullets: ["راحة داخل المقصورة", "تحكم بالغبار والحساسية", "اختيار سهل وسريع"],
  },
  {
    id: "hidrolik",
    title: "فلتر هيدروليك",
    subtitle: "ترشيح متين وموثوق لظروف العمل الشاقة.",
    image: {
      src: "/filters-hero@2x.png",
      alt: "فلاتر هيدروليك باورسا",
      width: 2858,
      height: 1818,
    },
    paragraphs: [
      "فلاتر الهيدروليك تزيل الملوثات من النظام وتدعم كفاءة المعدات. اختيار الفلتر الصحيح ضروري لطول عمر النظام.",
      "فلاتر الهيدروليك من Powersa Filter تقدم أداءً آمناً ببنية قوية وتوافق واسع.",
    ],
    bullets: ["متانة عالية", "توافق مع الأعمال الشاقة", "استمرارية للنظام"],
  },
];

export default function ServicesPageAr() {
  const base = "/ar";
  const link = (path: string) => `${base}${path}`;

  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">الخدمات</span>
            <h1>حلول سريعة وموثوقة لمجموعات الفلاتر.</h1>
            <p>
              توفر Powersa Filter نطاقاً واسعاً لفلاتر الزيت والهواء والوقود والمقصورة والهيدروليك.
              يمكنك الوصول للفلتر الصحيح بسرعة عبر محرك البحث.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                ابدأ البحث
              </a>
              <a className="btn btn-ghost" href={link("/katalog")}>
                عرض الكتالوج
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>اختيار سريع</strong>
              <p>بالكود والفئة للوصول الصحيح.</p>
            </div>
            <div>
              <strong>تغطية واسعة</strong>
              <p>حلول لمختلف القطاعات.</p>
            </div>
            <div>
              <strong>دعم مؤسسي</strong>
              <p>توجيه سريع حسب الحاجة.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>فئات الخدمات</h2>
              <p>راجع الفئات للتفاصيل.</p>
            </div>
            <div className="section-badge">الفئات</div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <a className="text-link" href={`#${service.id}`}>
                  الانتقال للتفاصيل
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-detail-section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-detail ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="service-copy">
                <span className="eyebrow">{service.title}</span>
                <h2>{service.subtitle}</h2>
                {service.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <div className="service-media">
                <div className="service-image">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    quality={95}
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </div>
                <ul>
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>اختر الفلتر الصحيح</h2>
              <p>
                استخدم محرك البحث للوصول السريع إلى المنتج الصحيح بالكود أو الفئة.
              </p>
            </div>
            <a className="btn btn-primary" href={link("/urun-ara")}>
              بحث المنتجات
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
