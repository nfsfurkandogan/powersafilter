import Image from "next/image";

export default function HomeEn() {
  return (
    <>
      <section className="hero-banner">
        <div className="container hero-banner-inner">
          <div className="hero-banner-copy">
            <span className="hero-tag">Powersa Filter</span>
            <h1>Fast and accurate results for corporate filter solutions.</h1>
            <p>
              Find the right product in seconds with stock code, manufacturer, and
              category filters.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Catalog Search
              </a>
              <a className="btn btn-ghost" href="/hizmetler">
                View Services
              </a>
            </div>
            <div className="hero-strip">
              <span>Oil</span>
              <span>Fuel</span>
              <span>Air</span>
              <span>Cabin</span>
              <span>Hydraulic</span>
            </div>
          </div>

          <div className="hero-banner-visual">
            <div className="hero-banner-frame" />
            <Image
              className="hero-pack-primary"
              src="/powersa-pack-1.png"
              alt="Powersa product boxes"
              width={1536}
              height={1024}
              quality={95}
              priority
              sizes="(max-width: 1024px) 88vw, 640px"
            />
            <Image
              className="hero-pack-secondary"
              src="/powersa-pack-2.png"
              alt="Powersa product range"
              width={1378}
              height={912}
              quality={95}
              sizes="(max-width: 1024px) 78vw, 520px"
            />
            <div className="hero-banner-badge">Original Filter</div>
          </div>
        </div>
      </section>

      <section className="section filter-gallery">
        <div className="container gallery-grid">
          <figure className="gallery-card float-1">
            <div className="gallery-visual photo">
              <Image
                src="/featured-1.png"
                alt="Oil filter"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>Oil Filter</figcaption>
          </figure>
          <figure className="gallery-card float-2">
            <div className="gallery-visual photo">
              <Image
                src="/featured-2.png"
                alt="Fuel filter"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>Fuel Filter</figcaption>
          </figure>
          <figure className="gallery-card float-3">
            <div className="gallery-visual photo">
              <Image
                src="/featured-3.png"
                alt="Cabin filter"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>Cabin Filter</figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-search">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Product Search Center</h2>
              <p>Search quickly by stock code, manufacturer, or category.</p>
            </div>
            <div className="section-badge">Catalog</div>
          </div>
          <div className="home-search-card">
            <div className="home-search-copy">
              <span className="eyebrow">Catalog Search</span>
              <h3>Find the right filter in seconds.</h3>
              <p>
                Get precise results with stock code, manufacturer, and category
                filters. Use the catalog page for detailed search.
              </p>
            </div>
            <div className="home-search-panel">
              <div className="home-search-field">
                <label htmlFor="home-search-input-en">Product / Stock / Manufacturer</label>
                <input
                  id="home-search-input-en"
                  type="text"
                  placeholder="e.g., WK735, P502478, Fuel Filter..."
                />
              </div>
              <div className="home-search-actions">
                <a className="btn btn-primary" href="/urun-ara">
                  Catalog Search
                </a>
                <a className="btn btn-ghost" href="/urun-ara">
                  Detailed Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="section catalog-highlight">
        <div className="container highlight-inner">
          <div className="highlight-copy">
            <span className="eyebrow">Catalog Search Center</span>
            <h2>Product search is the key area.</h2>
            <p>Designed for fast, clear, and professional results.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Catalog Search Page
              </a>
              <a className="btn btn-ghost" href="/hizmetler">
                Our Services
              </a>
            </div>
          </div>
          <div className="highlight-card">
            <div>
              <strong>Smart Matching</strong>
              <p>Fast results by stock code, manufacturer code, and name.</p>
            </div>
            <div>
              <strong>Category Filters</strong>
              <p>Clear selection for oil, air, fuel, cabin, and hydraulic filters.</p>
            </div>
            <div>
              <strong>Professional Interface</strong>
              <p>Corporate look, fast workflow, reliable information stream.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Our Services</h2>
              <p>Explore our filter product groups here.</p>
            </div>
            <div className="section-badge">Services</div>
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
                  <h3>Oil Filter</h3>
                  <p>High filtration for engine protection and performance.</p>
                  <a className="text-link" href="/hizmetler#yag">
                    View details
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
                  <h3>Air Filter</h3>
                  <p>Clean airflow for efficient and healthy operation.</p>
                  <a className="text-link" href="/hizmetler#hava">
                    View details
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
                  <h3>Fuel Filter</h3>
                  <p>Maximum cleanliness in fuel lines.</p>
                  <a className="text-link" href="/hizmetler#yakit">
                    View details
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
                  <h3>Cabin Filter</h3>
                  <p>Effective filtration for cabin air quality.</p>
                  <a className="text-link" href="/hizmetler#polen">
                    View details
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
                  <h3>Hydraulic Filter</h3>
                  <p>Strong protection for heavy-duty conditions.</p>
                  <a className="text-link" href="/hizmetler#hidrolik">
                    View details
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
              <h2>Quality & Safety Standards</h2>
              <p>We share our detailed quality approach on a dedicated page.</p>
            </div>
            <div className="section-badge">Quality</div>
          </div>
          <div className="quality-highlight-card">
            <div>
              <h3>Maximum confidence in filtration.</h3>
              <p>
                See the quality page for durability, high efficiency, and wide
                coverage.
              </p>
            </div>
            <a className="btn btn-primary" href="/kalite">
              Go to Quality Page
            </a>
          </div>
        </div>
      </section>

      <section id="branches" className="section branches-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Our Branches</h2>
              <p>We can update contact details as you share them.</p>
            </div>
            <div className="section-badge">Branches</div>
          </div>
          <div className="branch-grid">
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-batum.png"
                  alt="Georgia Batumi branch"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Georgia Batumi</h3>
              <p>Share branch contact details, we will publish here.</p>
              <div className="branch-meta">
                <span>Address: —</span>
                <span>Phone: —</span>
                <span>Hours: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-trabzon.png"
                  alt="Trabzon branch"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Trabzon</h3>
              <p>Share branch contact details, we will publish here.</p>
              <div className="branch-meta">
                <span>Address: —</span>
                <span>Phone: —</span>
                <span>Hours: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-samsun.png"
                  alt="Samsun branch"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Samsun</h3>
              <p>Share branch contact details, we will publish here.</p>
              <div className="branch-meta">
                <span>Address: —</span>
                <span>Phone: —</span>
                <span>Hours: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-erzurum.png"
                  alt="Erzurum central branch"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Erzurum Center</h3>
              <p>Share branch contact details, we will publish here.</p>
              <div className="branch-meta">
                <span>Address: —</span>
                <span>Phone: —</span>
                <span>Hours: —</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section gallery-section compact">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>From You</h2>
              <p>Real-world use of Powersa filters in the field.</p>
            </div>
            <div className="section-badge">Gallery</div>
          </div>
          <div className="gallery-mosaic">
            <div className="gallery-tile gallery-large">
              <Image
                src="/from-you-1.png"
                alt="Field workspace photo"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 640px"
              />
              <div className="gallery-caption">
                <strong>Strong in the field</strong>
                <span>Service and warehouse use</span>
              </div>
            </div>
            <div className="gallery-stack">
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-2.png"
                  alt="Service and product photo"
                  width={2048}
                  height={1536}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-3.png"
                  alt="Packaging and shipment"
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
    </>
  );
}
