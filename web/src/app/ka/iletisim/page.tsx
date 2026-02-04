export default function ContactPageKa() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">კონტაქტი</span>
            <h1>დავუკავშირდეთ სწრაფად.</h1>
            <p>
              ფილიალის, პროდუქტის ან პარტნიორობის მოთხოვნებისთვის დაგვიკავშირდით.
              შეავსეთ ფორმა და მაქსიმალურად სწრაფად დაგიბრუნდებით.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>ცენტრალური ოფისი</strong>
              <p>მისამართი: იაკუთიე, ერზრუმი</p>
              <p>ტელეფონი: +90 442 000 00 00</p>
              <p>ელ.ფოსტა: info@powersafilter.com</p>
            </div>
            <div>
              <strong>სწრაფი პასუხი</strong>
              <p>პირველი პასუხის მიზანი 24 საათში.</p>
            </div>
            <div>
              <strong>კორპორატიული მხარდაჭერა</strong>
              <p>ფილიალისა და დილერის მოთხოვნები პრიორიტეტულია.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>ცენტრალური ოფისი</h3>
              <p>მისამართი: იაკუთიე, ერზრუმი</p>
              <p>ტელეფონი: +90 442 000 00 00</p>
              <p>ელ.ფოსტა: info@powersafilter.com</p>
            </div>
            <div className="contact-card">
              <h3>ფილიალები</h3>
              <p>გურჯისტანი ბათუმი</p>
              <p>ტრაბზონი</p>
              <p>სამსუნი</p>
              <p>ერზრუმი ცენტრი</p>
            </div>
            <div className="contact-card">
              <h3>სამუშაო საათები</h3>
              <p>ორშაბათი - შაბათი: 09:00 - 18:00</p>
              <p>კვირა: დახურულია</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <label htmlFor="name">სახელი და გვარი</label>
              <input id="name" name="name" type="text" placeholder="თქვენი სახელი" />
            </div>
            <div className="input-group">
              <label htmlFor="company">კომპანია</label>
              <input id="company" name="company" type="text" placeholder="კომპანიის სახელი" />
            </div>
            <div className="input-group">
              <label htmlFor="email">ელ.ფოსტა</label>
              <input id="email" name="email" type="email" placeholder="name@company.com" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">ტელეფონი</label>
              <input id="phone" name="phone" type="tel" placeholder="+90 5xx xxx xx xx" />
            </div>
            <div className="input-group wide">
              <label htmlFor="message">შეტყობინება</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="მოკლედ აღწერეთ თქვენი მოთხოვნა"
              />
            </div>
            <div className="contact-actions">
              <button className="btn btn-primary" type="submit">
                გაგზავნა
              </button>
              <button className="btn btn-ghost" type="reset">
                გასუფთავება
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
