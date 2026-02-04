export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">İletişim</span>
            <h1>Sizinle hızlıca iletişime geçelim.</h1>
            <p>
              Şube, ürün ve iş birliği talepleriniz için bize ulaşabilirsiniz.
              Formu doldurun, en kısa sürede geri dönüş yapalım.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>Merkez</strong>
              <p>Adres: Yakutiye, Erzurum</p>
              <p>Telefon: +90 442 000 00 00</p>
              <p>E-posta: info@powersafilter.com</p>
            </div>
            <div>
              <strong>Hızlı Dönüş</strong>
              <p>24 saat içinde ilk dönüş hedefi.</p>
            </div>
            <div>
              <strong>Kurumsal Destek</strong>
              <p>Şube ve bayi taleplerini önceliklendiririz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Merkez Ofis</h3>
              <p>Adres: Yakutiye, Erzurum</p>
              <p>Telefon: +90 442 000 00 00</p>
              <p>E-posta: info@powersafilter.com</p>
            </div>
            <div className="contact-card">
              <h3>Şubeler</h3>
              <p>Gürcistan Batum</p>
              <p>Trabzon</p>
              <p>Samsun</p>
              <p>Merkez Erzurum</p>
            </div>
            <div className="contact-card">
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi - Cumartesi: 09:00 - 18:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <label htmlFor="name">Ad Soyad</label>
              <input id="name" name="name" type="text" placeholder="Adınız Soyadınız" />
            </div>
            <div className="input-group">
              <label htmlFor="company">Firma</label>
              <input id="company" name="company" type="text" placeholder="Firma adı" />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-posta</label>
              <input id="email" name="email" type="email" placeholder="ornek@firma.com" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Telefon</label>
              <input id="phone" name="phone" type="tel" placeholder="+90 5xx xxx xx xx" />
            </div>
            <div className="input-group wide">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Talebinizi kısaca paylaşın"
              />
            </div>
            <div className="contact-actions">
              <button className="btn btn-primary" type="submit">
                Gönder
              </button>
              <button className="btn btn-ghost" type="reset">
                Temizle
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
