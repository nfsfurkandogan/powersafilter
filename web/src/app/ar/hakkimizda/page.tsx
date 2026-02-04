import Image from "next/image";

export default function AboutPageAr() {
  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">من نحن</span>
            <h1>باورسا فلتر تقدم الفلتر المناسب بسرعة وبموثوقية.</h1>
            <p>
              تقدم Powersa Filter حلول فلاتر لقطاعات السيارات والتجاري والخدمة الشاقة.
              مع تجربة بحث تسهّل اختيار المنتج ومعلومات مخزون قوية وفئات واضحة تمنح
              العملاء سرعة وثقة.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/ar/urun-ara">
                ابدأ البحث عن المنتجات
              </a>
              <a className="btn btn-ghost" href="/ar/hizmetler">
                عرض الخدمات
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>محفظة منتجات واسعة</strong>
              <p>حلول تناسب أنواع المركبات المختلفة.</p>
            </div>
            <div>
              <strong>اختيار سريع وواضح</strong>
              <p>بحث سريع يعتمد على الكود والفئة.</p>
            </div>
            <div>
              <strong>ثقة مؤسسية</strong>
              <p>نهج شراكة طويلة الأمد.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-visuals">
        <div className="container about-visuals-inner">
          <div className="about-visual-main">
            <Image
              src="/featured-2.png"
              alt="منتجات باورسا في الخدمة"
              width={2048}
              height={1536}
              quality={90}
              sizes="(max-width: 1024px) 90vw, 620px"
            />
            <div className="about-visual-badge">حلول قوية في الميدان</div>
          </div>
          <div className="about-visual-stack">
            <div className="about-visual-card">
              <Image
                src="/featured-1.png"
                alt="رف منتجات باورسا"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <div className="about-visual-card">
              <Image
                src="/from-you-3.png"
                alt="تغليف باورسا"
                width={1536}
                height={1024}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-stats">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>لمحة مؤسسية</h2>
              <p>بنية تحتية تركز على محفظة قوية وسهولة الوصول.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <strong>18,000+</strong>
              <span>محفظة منتجات</span>
            </div>
            <div className="stat-card">
              <strong>5</strong>
              <span>مجموعات فلاتر</span>
            </div>
            <div className="stat-card">
              <strong>4</strong>
              <span>فروع نشطة</span>
            </div>
            <div className="stat-card">
              <strong>24 ساعة</strong>
              <span>هدف استجابة سريع</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-split">
        <div className="container about-split-inner">
          <div className="about-split-copy">
            <span className="eyebrow">قوة التشغيل</span>
            <h2>بنية تحتية تطابق المنتج الصحيح بسرعة.</h2>
            <p>
              نظام البحث في الكتالوج والتصفية حسب المُصنّع يسرّع التحقق من كود المخزون.
              وهكذا يصل الفريق للمنتج الصحيح بأقل وقت.
            </p>
            <ul>
              <li>مطابقة كود المخزون وكود المُصنّع</li>
              <li>هيكل فئات واضح</li>
              <li>استجابة سريعة لاحتياجات الميدان</li>
            </ul>
          </div>
          <div className="about-split-visual">
            <Image
              src="/from-you-1.png"
              alt="عملية تسليم منتجات باورسا"
              width={2048}
              height={1536}
              quality={90}
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>من نحن</h2>
              <p>تقدم Powersa Filter حلول فلاتر مخصصة لاحتياجات القطاع.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <p>
                نهدف إلى تسهيل اختيار المنتج عبر محرك بحث وفئات واضحة، لتصل إلى المنتج
                الصحيح بسرعة. غايتنا تمكينكم من إدارة كل احتياجات الفلاتر من مركز واحد بثقة.
              </p>
            </div>
            <div className="info-card">
              <p>
                نقدم مجموعة واسعة من فلاتر الزيت والهواء والوقود والمقصورة والهيدروليك
                لأداء ثابت في الاستخدام اليومي وفي ظروف الخدمة الشاقة.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>الرسالة والرؤية</h2>
              <p>نهج قائم على الجودة والسرعة والثقة.</p>
            </div>
            <div className="section-badge">مؤسسي</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>الرسالة</h3>
              <p>
                تقديم الفلتر الصحيح بأسرع طريقة لحماية أداء المركبات وضمان استمرارية
                عمليات عملائنا.
              </p>
            </div>
            <div className="info-card">
              <h3>الرؤية</h3>
              <p>
                أن نكون علامة موثوقة ومفضلة في حلول الفلاتر، ونخلق قيمة مستدامة في القطاع.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>قيمنا</h2>
              <p>المبادئ الأساسية التي تحدد طريقة عملنا.</p>
            </div>
            <div className="section-badge">القيم</div>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <h3>الموثوقية</h3>
              <p>نحوّل الجودة إلى معيار ثابت ونقدم حلولًا مستدامة.</p>
            </div>
            <div className="value-card">
              <h3>السرعة</h3>
              <p>نحسّن عملياتنا للوصول السريع إلى المنتج الصحيح.</p>
            </div>
            <div className="value-card">
              <h3>الشفافية</h3>
              <p>نعرض معلومات المنتجات بشكل واضح وسهل الوصول.</p>
            </div>
            <div className="value-card">
              <h3>الشراكة</h3>
              <p>نبني علاقات طويلة الأمد وقوية مع عملائنا.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section scope-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>نطاق المنتجات</h2>
              <p>نوفر مجموعات الفلاتر المناسبة لاحتياجاتك في مكان واحد.</p>
            </div>
            <div className="section-badge">النطاق</div>
          </div>
          <div className="scope-grid">
            <span>فلتر الزيت</span>
            <span>فلتر الهواء</span>
            <span>فلتر الوقود</span>
            <span>فلتر المقصورة</span>
            <span>فلتر هيدروليك</span>
            <span>حلول فلاتر خاصة</span>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>اعثر على المنتج الذي تبحث عنه الآن</h2>
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
