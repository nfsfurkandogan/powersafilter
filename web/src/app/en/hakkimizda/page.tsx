import Image from "next/image";

export default function AboutPageEn() {
  const base = "/en";
  const link = (path: string) => `${base}${path}`;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">About</span>
            <h1>Powersa Filter delivers the right filter fast and reliably.</h1>
            <p>
              Serving automotive, commercial, and heavy-duty segments, Powersa Filter
              offers a search experience, strong stock data, and clear product
              categories that help customers move fast.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                Start Product Search
              </a>
              <a className="btn btn-ghost" href={link("/hizmetler")}>
                View Services
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>Wide Product Portfolio</strong>
              <p>Solutions for different vehicle types.</p>
            </div>
            <div>
              <strong>Fast & Clear Selection</strong>
              <p>Quick search by code and category.</p>
            </div>
            <div>
              <strong>Corporate Trust</strong>
              <p>Long-term partnership approach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-visuals">
        <div className="container about-visuals-inner">
          <div className="about-visual-main">
            <Image
              src="/featured-2.png"
              alt="Powersa products in service"
              width={2048}
              height={1536}
              quality={90}
              sizes="(max-width: 1024px) 90vw, 620px"
            />
            <div className="about-visual-badge">Strong Solutions in the Field</div>
          </div>
          <div className="about-visual-stack">
            <div className="about-visual-card">
              <Image
                src="/featured-1.png"
                alt="Powersa shelf"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <div className="about-visual-card">
              <Image
                src="/from-you-3.png"
                alt="Powersa packaging"
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
              <h2>Corporate Summary</h2>
              <p>Strong portfolio and fast access focused infrastructure.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <strong>18,000+</strong>
              <span>Products</span>
            </div>
            <div className="stat-card">
              <strong>5</strong>
              <span>Filter groups</span>
            </div>
            <div className="stat-card">
              <strong>4</strong>
              <span>Active branches</span>
            </div>
            <div className="stat-card">
              <strong>24 Hours</strong>
              <span>Fast response target</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-split">
        <div className="container about-split-inner">
          <div className="about-split-copy">
            <span className="eyebrow">Operational Power</span>
            <h2>Infrastructure that matches the right product quickly.</h2>
            <p>
              Our catalog search and manufacturer-based filtering speeds up stock
              code verification so teams reach the right product in minimum time.
            </p>
            <ul>
              <li>Stock code and manufacturer code matching</li>
              <li>Clear category structure</li>
              <li>Fast response to field needs</li>
            </ul>
          </div>
          <div className="about-split-visual">
            <Image
              src="/from-you-1.png"
              alt="Powersa delivery process"
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
              <h2>Who We Are</h2>
              <p>Powersa Filter delivers filter solutions tailored to industry needs.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <p>
                We aim to connect you with the right product quickly through a powerful
                search engine and clear categories. Our goal is to manage all filter
                needs from a single reliable center.
              </p>
            </div>
            <div className="info-card">
              <p>
                With a wide range of oil, air, fuel, cabin, and hydraulic filters, we
                provide consistent performance for daily use and heavy-duty conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Mission & Vision</h2>
              <p>A quality, speed, and trust focused approach.</p>
            </div>
            <div className="section-badge">Corporate</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Mission</h3>
              <p>
                Deliver the right filter fast, protect vehicle performance, and ensure
                continuity for customer operations.
              </p>
            </div>
            <div className="info-card">
              <h3>Vision</h3>
              <p>
                Build sustainable value as a trusted and accessible brand in filter
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Our Values</h2>
              <p>The core principles shaping our way of work.</p>
            </div>
            <div className="section-badge">Values</div>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <h3>Reliability</h3>
              <p>We standardize quality and deliver sustainable solutions.</p>
            </div>
            <div className="value-card">
              <h3>Speed</h3>
              <p>We optimize processes for fast access to the right product.</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>We present product information clearly and accessibly.</p>
            </div>
            <div className="value-card">
              <h3>Partnership</h3>
              <p>We build long-term, strong ties with our customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section scope-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Product Scope</h2>
              <p>We offer filter groups tailored to your needs.</p>
            </div>
            <div className="section-badge">Scope</div>
          </div>
          <div className="scope-grid">
            <span>Oil Filter</span>
            <span>Air Filter</span>
            <span>Fuel Filter</span>
            <span>Cabin Filter</span>
            <span>Hydraulic Filter</span>
            <span>Special Filter Solutions</span>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Find the right product now</h2>
              <p>
                Use the product search engine to reach the right product quickly with
                stock code or category-based filtering.
              </p>
            </div>
            <a className="btn btn-primary" href={link("/urun-ara")}>
              Product Search
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
