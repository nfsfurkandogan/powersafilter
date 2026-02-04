export default function ContactPageAr() {
  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">اتصل بنا</span>
            <h1>دعنا نتواصل معك سريعًا.</h1>
            <p>
              يمكنك التواصل بشأن الفروع والمنتجات والشراكات. املأ النموذج وسنعاودك
              بأقرب وقت.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>المركز</strong>
              <p>العنوان: ياكوتيه، أرضروم</p>
              <p>الهاتف: +90 442 000 00 00</p>
              <p>البريد: info@powersafilter.com</p>
            </div>
            <div>
              <strong>استجابة سريعة</strong>
              <p>هدف الرد الأول خلال 24 ساعة.</p>
            </div>
            <div>
              <strong>دعم مؤسسي</strong>
              <p>نمنح طلبات الفروع والوكلاء أولوية.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>المكتب الرئيسي</h3>
              <p>العنوان: ياكوتيه، أرضروم</p>
              <p>الهاتف: +90 442 000 00 00</p>
              <p>البريد: info@powersafilter.com</p>
            </div>
            <div className="contact-card">
              <h3>الفروع</h3>
              <p>باتومي، جورجيا</p>
              <p>طرابزون</p>
              <p>سامسون</p>
              <p>أرضروم المركز</p>
            </div>
            <div className="contact-card">
              <h3>ساعات العمل</h3>
              <p>الاثنين - السبت: 09:00 - 18:00</p>
              <p>الأحد: مغلق</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <label htmlFor="name">الاسم الكامل</label>
              <input id="name" name="name" type="text" placeholder="الاسم الكامل" />
            </div>
            <div className="input-group">
              <label htmlFor="company">الشركة</label>
              <input id="company" name="company" type="text" placeholder="اسم الشركة" />
            </div>
            <div className="input-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@company.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">الهاتف</label>
              <input id="phone" name="phone" type="tel" placeholder="+90 5xx xxx xx xx" />
            </div>
            <div className="input-group wide">
              <label htmlFor="message">الرسالة</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="شارك طلبك باختصار"
              />
            </div>
            <div className="contact-actions">
              <button className="btn btn-primary" type="submit">
                إرسال
              </button>
              <button className="btn btn-ghost" type="reset">
                مسح
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
