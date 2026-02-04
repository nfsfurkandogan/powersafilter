export default function ContactPageEn() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">Contact</span>
            <h1>Let’s get in touch quickly.</h1>
            <p>
              Reach us for branch, product, or partnership requests. Fill out the
              form and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>Head Office</strong>
              <p>Address: Yakutiye, Erzurum</p>
              <p>Phone: +90 442 000 00 00</p>
              <p>Email: info@powersafilter.com</p>
            </div>
            <div>
              <strong>Fast Response</strong>
              <p>First response target within 24 hours.</p>
            </div>
            <div>
              <strong>Corporate Support</strong>
              <p>We prioritize branch and dealership requests.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Head Office</h3>
              <p>Address: Yakutiye, Erzurum</p>
              <p>Phone: +90 442 000 00 00</p>
              <p>Email: info@powersafilter.com</p>
            </div>
            <div className="contact-card">
              <h3>Branches</h3>
              <p>Georgia Batumi</p>
              <p>Trabzon</p>
              <p>Samsun</p>
              <p>Erzurum Center</p>
            </div>
            <div className="contact-card">
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 09:00 - 18:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />
            </div>
            <div className="input-group">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="Company name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="name@company.com" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+90 5xx xxx xx xx" />
            </div>
            <div className="input-group wide">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share your request briefly"
              />
            </div>
            <div className="contact-actions">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
              <button className="btn btn-ghost" type="reset">
                Clear
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
