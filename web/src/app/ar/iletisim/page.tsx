export default function ContactPageAr() {
  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">اتصل بنا</span>
            <h1>لنبدأ التواصل بسرعة.</h1>
            <p>
              تواصل معنا لطلبات الفروع أو المنتجات أو الشراكات. املأ النموذج وسنرد
              عليك في أقرب وقت ممكن.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>المكتب الرئيسي</strong>
              <p>العنوان: ياكوتية، أرضروم</p>
              <p>الهاتف: +90 442 000 00 00</p>
              <p>البريد: info@powersafilter.com</p>
            </div>
            <div>
              <strong>استجابة سريعة</strong>
              <p>هدفنا الرد الأول خلال 24 ساعة.</p>
            </div>
            <div>
              <strong>دعم مؤسسي</strong>
              <p>نعطي أولوية لطلبات الفروع والوكلاء.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>المكتب الرئيسي</h3>
              <p>العنوان: ياكوتية، أرضروم</p>
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
              <input id="name" name="name" type="text" placeholder="اسمك" />
            </div>
            <div className="input-group">
              <label htmlFor="company">الشركة</label>
              <input id="company" name="company" type="text" placeholder="اسم الشركة" />
            </div>
            <div className="input-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input id="email" name="email" type="email" placeholder="name@company.com" />
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
                placeholder="اشرح طلبك باختصار"
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
