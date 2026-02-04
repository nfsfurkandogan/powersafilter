import Image from "next/image";
import WelcomeModal from "@/components/WelcomeModal";

export default function HomeAr() {
  const base = "/ar";
  const link = (path: string) => `${base}${path}`;

  return (
    <div className="rtl" dir="rtl">
      <section className="hero-banner">
        <div className="container hero-banner-inner">
          <div className="hero-banner-copy">
            <span className="hero-tag">Powersa Filter</span>
            <h1>نتائج سريعة ودقيقة لحلول الفلاتر المؤسسية.</h1>
            <p>
              اعثر على المنتج المناسب خلال ثوانٍ عبر كود المخزون ورمز المُصنِّع
              وفلاتر الفئات.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                بحث الكتالوج
              </a>
              <a className="btn btn-ghost" href={link("/hizmetler")}>
                عرض الخدمات
              </a>
            </div>
            <div className="hero-strip">
              <span>زيت</span>
              <span>وقود</span>
              <span>هواء</span>
              <span>مقصورة</span>
              <span>هيدروليك</span>
            </div>
          </div>

          <div className="hero-banner-visual">
            <div className="hero-banner-frame" />
            <Image
              className="hero-pack-primary"
              src="/powersa-pack-1.png"
              alt="علب منتجات باورسا"
              width={1536}
              height={1024}
              quality={95}
              priority
              sizes="(max-width: 1024px) 88vw, 640px"
            />
            <Image
              className="hero-pack-secondary"
              src="/powersa-pack-2.png"
              alt="تشكيلة منتجات باورسا"
              width={1378}
              height={912}
              quality={95}
              sizes="(max-width: 1024px) 78vw, 520px"
            />
            <div className="hero-banner-badge">فلتر أصلي</div>
          </div>
        </div>
      </section>

      <section className="section filter-gallery">
        <div className="container gallery-grid">
          <figure className="gallery-card float-1">
            <div className="gallery-visual photo">
              <Image
                src="/featured-1.png"
                alt="فلتر الزيت"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>فلتر الزيت</figcaption>
          </figure>
          <figure className="gallery-card float-2">
            <div className="gallery-visual photo">
              <Image
                src="/featured-2.png"
                alt="فلتر الوقود"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>فلتر الوقود</figcaption>
          </figure>
          <figure className="gallery-card float-3">
            <div className="gallery-visual photo">
              <Image
                src="/featured-3.png"
                alt="فلتر المقصورة"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>فلتر المقصورة</figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-search">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>مركز البحث عن المنتجات</h2>
              <p>ابحث بسرعة بكود المخزون أو المُصنِّع أو الفئة.</p>
            </div>
            <div className="section-badge">الكتالوج</div>
          </div>
          <div className="home-search-card">
            <div className="home-search-copy">
              <span className="eyebrow">بحث الكتالوج</span>
              <h3>اعثر على الفلتر المناسب خلال ثوانٍ.</h3>
              <p>
                نتائج دقيقة مع فلاتر كود المخزون والمُصنِّع والفئة. للبحث التفصيلي
                انتقل إلى صفحة الكتالوج.
              </p>
            </div>
            <div className="home-search-panel">
              <div className="home-search-actions">
                <a className="btn btn-primary" href={link("/urun-ara")}>
                  الانتقال إلى بحث الكتالوج
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>خدماتنا</h2>
              <p>تصفح مجموعات فلاترنا من هنا.</p>
            </div>
            <div className="section-badge">الخدمات</div>
          </div>
          <div className="service-grid">
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3c3 4 6 7 6 11a6 6 0 1 1-12 0c0-4 3-7 6-11z" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>فلتر الزيت</h3>
                  <p>ترشيح عالٍ لحماية المحرك والأداء.</p>
                  <a className="text-link" href={link("/hizmetler#yag")}>
                    عرض التفاصيل
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 12h16M4 7h10M4 17h6" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>فلتر الهواء</h3>
                  <p>تدفق هواء نظيف لعمل أكثر كفاءة.</p>
                  <a className="text-link" href={link("/hizmetler#hava")}>
                    عرض التفاصيل
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v18M5 12h14" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>فلتر الوقود</h3>
                  <p>نظافة قصوى في خطوط الوقود.</p>
                  <a className="text-link" href={link("/hizmetler#yakit")}>
                    عرض التفاصيل
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 4v16M4 12h16M7 7l10 10M7 17l10-10" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>فلتر المقصورة</h3>
                  <p>ترشيح فعال لجودة هواء المقصورة.</p>
                  <a className="text-link" href={link("/hizmetler#polen")}>
                    عرض التفاصيل
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="6" y="9" width="12" height="10" rx="2" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>فلتر هيدروليك</h3>
                  <p>حماية قوية لظروف العمل الشاقة.</p>
                  <a className="text-link" href={link("/hizmetler#hidrolik")}>
                    عرض التفاصيل
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section quality-highlight">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>معايير الجودة والسلامة</h2>
              <p>نشارك نهج الجودة بالتفصيل في صفحة مستقلة.</p>
            </div>
            <div className="section-badge">الجودة</div>
          </div>
          <div className="quality-highlight-card">
            <div>
              <h3>ثقة قصوى في الترشيح.</h3>
              <p>اطلع على صفحة الجودة للمتانة والكفاءة العالية وتغطية واسعة.</p>
            </div>
            <a className="btn btn-primary" href={link("/kalite")}>
              اذهب إلى صفحة الجودة
            </a>
          </div>
        </div>
      </section>

      <section id="branches" className="section branches-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>فروعنا</h2>
              <p>يمكننا تحديث معلومات التواصل عند تزويدنا بها.</p>
            </div>
            <div className="section-badge">الفروع</div>
          </div>
          <div className="branch-grid">
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-batum.png"
                  alt="فرع باتومي جورجيا"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>باتومي، جورجيا</h3>
              <p>أرسل بيانات الفرع وسنقوم بنشرها هنا.</p>
              <div className="branch-meta">
                <span>العنوان: —</span>
                <span>الهاتف: —</span>
                <span>الدوام: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-trabzon.png"
                  alt="فرع طرابزون"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>طرابزون</h3>
              <p>أرسل بيانات الفرع وسنقوم بنشرها هنا.</p>
              <div className="branch-meta">
                <span>العنوان: —</span>
                <span>الهاتف: —</span>
                <span>الدوام: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-samsun.png"
                  alt="فرع سامسون"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>سامسون</h3>
              <p>أرسل بيانات الفرع وسنقوم بنشرها هنا.</p>
              <div className="branch-meta">
                <span>العنوان: —</span>
                <span>الهاتف: —</span>
                <span>الدوام: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-erzurum.png"
                  alt="فرع أرضروم المركزي"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>أرضروم المركز</h3>
              <p>أرسل بيانات الفرع وسنقوم بنشرها هنا.</p>
              <div className="branch-meta">
                <span>العنوان: —</span>
                <span>الهاتف: —</span>
                <span>الدوام: —</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section gallery-section compact">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>منكم</h2>
              <p>استخدامات حقيقية لمرشحات باورسا في الميدان.</p>
            </div>
            <div className="section-badge">المعرض</div>
          </div>
          <div className="gallery-mosaic">
            <div className="gallery-tile gallery-large">
              <Image
                src="/from-you-1.png"
                alt="صورة من موقع العمل"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 640px"
              />
              <div className="gallery-caption">
                <strong>قوة في الميدان</strong>
                <span>خدمة ومستودعات</span>
              </div>
            </div>
            <div className="gallery-stack">
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-2.png"
                  alt="صورة خدمة ومنتج"
                  width={2048}
                  height={1536}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-3.png"
                  alt="التغليف والشحن"
                  width={1536}
                  height={1024}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WelcomeModal />
    </div>
  );
}
