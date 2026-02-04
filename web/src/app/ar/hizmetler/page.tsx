import Image from "next/image";

const services = [
  {
    id: "yag",
    title: "فلتر الزيت",
    subtitle: "حماية أساسية لعمل المحرك طويل الأمد بكفاءة.",
    image: {
      src: "/filters-oil@2x.png",
      alt: "فلتر زيت باورسا",
      width: 1738,
      height: 1746,
    },
    paragraphs: [
      "يُصفّي فلتر الزيت الجزيئات والملوثات من زيت المحرك ويحميه. اختيار الفلتر الصحيح يطيل عمر مكونات المحرك ويمنع فقدان الأداء.",
      "فلاتر الزيت من باورسا توفر ترشيحًا موثوقًا مع تنوع يناسب مختلف فئات المركبات. يمكن الوصول للمنتج الصحيح بسرعة عبر كود المخزون وفلاتر الفئة.",
    ],
    bullets: [
      "كفاءة ترشيح عالية",
      "توافق واسع للمنتجات",
      "وصول سريع عبر كود المخزون",
    ],
  },
  {
    id: "hava",
    title: "فلتر الهواء",
    subtitle: "يدعم أداء المحرك بتدفق هواء نظيف.",
    image: {
      src: "/filters-grid@2x.png",
      alt: "فلتر هواء باورسا",
      width: 1966,
      height: 1750,
    },
    paragraphs: [
      "فلتر الهواء يلتقط الغبار والجزيئات قبل دخولها للمحرك، ما يحسن كفاءة الاحتراق ويقلل الاستهلاك.",
      "فلاتر الهواء من باورسا توفر خيارات للركاب والتجاري والخدمة الشاقة لتجد الفلتر المناسب بسرعة.",
    ],
    bullets: ["تدفق هواء متوازن", "ترشيح يركز على الأداء", "خيارات حسب نوع المركبة"],
  },
  {
    id: "yakit",
    title: "فلتر الوقود",
    subtitle: "نظافة قصوى وموثوقية في خط الوقود.",
    image: {
      src: "/filters-fuel@2x.png",
      alt: "فلتر وقود باورسا",
      width: 1916,
      height: 1858,
    },
    paragraphs: [
      "فلتر الوقود يزيل الشوائب التي قد تصل للنظام، ويحمي البخاخات والمضخات. الوقود النظيف ضروري للأداء والاعتمادية.",
      "فلاتر الوقود من باورسا تغطي العديد من الشركات والموديلات لسرعة الوصول للمنتج الصحيح.",
    ],
    bullets: ["حماية قوية لخط الوقود", "يحمي مكونات النظام", "مطابقة سريعة للمنتج"],
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
      "فلتر المقصورة يحجز الغبار والمواد المسببة للحساسية داخل السيارة، مما يحسن راحة القيادة.",
      "فلاتر المقصورة من باورسا توفر بنية فئات واضحة وبحثًا سريعًا.",
    ],
    bullets: ["راحة داخل المقصورة", "تحكم بالغبار والحساسية", "اختيار سريع وسهل"],
  },
  {
    id: "hidrolik",
    title: "فلتر هيدروليك",
    subtitle: "ترشيح متين وموثوق في ظروف الخدمة الشاقة.",
    image: {
      src: "/filters-hero@2x.png",
      alt: "فلاتر هيدروليك باورسا",
      width: 2858,
      height: 1818,
    },
    paragraphs: [
      "فلاتر الهيدروليك تزيل الملوثات من الأنظمة الهيدروليكية وتدعم كفاءة المعدات. اختيار الفلتر الصحيح أساسي لعمر النظام.",
      "فلاتر الهيدروليك من باورسا تقدم أداءً آمنًا بفضل بنيتها المتينة وتنوع الاستخدامات.",
    ],
    bullets: ["متانة عالية", "ملاءمة للخدمة الشاقة", "يدعم استمرارية النظام"],
  },
];

export default function ServicesPageAr() {
  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">خدماتنا</span>
            <h1>حلول سريعة وموثوقة لمجموعات فلاتر المنتجات.</h1>
            <p>
              توفر Powersa Filter نطاقًا واسعًا من فلاتر الزيت والهواء والوقود
              والمقصورة والهيدروليك. وبمحرك البحث يمكن الوصول سريعًا إلى الفلتر المناسب.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/ar/urun-ara">
                ابدأ البحث عن المنتجات
              </a>
              <a className="btn btn-ghost" href="/ar/katalog">
                عرض الكتالوج
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>اختيار سريع</strong>
              <p>المنتج الصحيح عبر كود المخزون والفئة.</p>
            </div>
            <div>
              <strong>تغطية واسعة</strong>
              <p>حلول فلاتر تناسب مختلف القطاعات.</p>
            </div>
            <div>
              <strong>دعم مؤسسي</strong>
              <p>توجيه سريع بحسب الاحتياج.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>تصنيفات الخدمات</h2>
              <p>راجع العناوين للتفاصيل الكاملة.</p>
            </div>
            <div className="section-badge">الفئات</div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <a className="text-link" href={`#${service.id}`}>
                  عرض التفاصيل
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
              <h2>اختر الفلتر المناسب</h2>
              <p>
                استخدم محرك البحث لتصفية حسب كود المخزون أو الفئة للوصول السريع
                إلى المنتج الصحيح.
              </p>
            </div>
            <a className="btn btn-primary" href="/ar/urun-ara">
              بحث المنتجات
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
