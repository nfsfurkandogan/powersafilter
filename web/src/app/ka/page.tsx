import Image from "next/image";
import WelcomeModal from "@/components/WelcomeModal";

export default function HomeKa() {
  const base = "/ka";
  const link = (path: string) => `${base}${path}`;

  return (
    <>
      <section className="hero-banner">
        <div className="container hero-banner-inner">
          <div className="hero-banner-copy">
            <span className="hero-tag">Powersa Filter</span>
            <h1>კორპორატიული ფილტრაციის გადაწყვეტილებებში სწრაფი და ზუსტი შედეგი.</h1>
            <p>
              საწყობი კოდით, მწარმოებლისა და კატეგორიის ფილტრებით სწორი პროდუქტი
              წამებში იპოვეთ.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                კატალოგის ძიება
              </a>
              <a className="btn btn-ghost" href={link("/hizmetler")}>
                სერვისების ნახვა
              </a>
            </div>
            <div className="hero-strip">
              <span>ზეთი</span>
              <span>საწვავი</span>
              <span>ჰაერი</span>
              <span>კაბინი</span>
              <span>ჰიდრავლიკა</span>
            </div>
          </div>

          <div className="hero-banner-visual">
            <div className="hero-banner-frame" />
            <Image
              className="hero-pack-primary"
              src="/powersa-pack-1.png"
              alt="Powersa პროდუქტის ყუთები"
              width={1536}
              height={1024}
              quality={95}
              priority
              sizes="(max-width: 1024px) 88vw, 640px"
            />
            <Image
              className="hero-pack-secondary"
              src="/powersa-pack-2.png"
              alt="Powersa პროდუქტის ასორტიმენტი"
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
                alt="ზეთის ფილტრი"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>ზეთის ფილტრი</figcaption>
          </figure>
          <figure className="gallery-card float-2">
            <div className="gallery-visual photo">
              <Image
                src="/featured-2.png"
                alt="საწვავის ფილტრი"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>საწვავის ფილტრი</figcaption>
          </figure>
          <figure className="gallery-card float-3">
            <div className="gallery-visual photo">
              <Image
                src="/featured-3.png"
                alt="კაბინის ფილტრი"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>კაბინის ფილტრი</figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-search">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>პროდუქტის ძიების ცენტრი</h2>
              <p>სწრაფი ძიება საწყობი კოდით, მწარმოებლით ან კატეგორიით.</p>
            </div>
            <div className="section-badge">კატალოგი</div>
          </div>
          <div className="home-search-card">
            <div className="home-search-copy">
              <span className="eyebrow">კატალოგის ძიება</span>
              <h3>სწორი ფილტრი წამებში იპოვეთ.</h3>
              <p>
                ზუსტი შედეგები საწყობი კოდის, მწარმოებლისა და კატეგორიის
                ფილტრებით. დეტალური ძიებისთვის გადადით კატალოგის გვერდზე.
              </p>
            </div>
            <div className="home-search-panel">
              <div className="home-search-actions">
                <a className="btn btn-primary" href={link("/urun-ara")}>
                  კატალოგის ძიების გვერდი
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WelcomeModal />

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>ჩვენი სერვისები</h2>
              <p>აქ შეგიძლიათ გაეცნოთ ჩვენი ფილტრების ჯგუფებს.</p>
            </div>
            <div className="section-badge">სერვისები</div>
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
                  <h3>ზეთის ფილტრი</h3>
                  <p>ძრავის დაცვა და მაღალი ფილტრაცია.</p>
                  <a className="text-link" href={link("/hizmetler#yag")}>
                    დეტალები
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
                  <h3>ჰაერის ფილტრი</h3>
                  <p>სუფთა ჰაერის ნაკადი ეფექტური მუშაობისთვის.</p>
                  <a className="text-link" href={link("/hizmetler#hava")}>
                    დეტალები
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
                  <h3>საწვავის ფილტრი</h3>
                  <p>საწვავის ხაზებში მაქსიმალური სისუფთავე.</p>
                  <a className="text-link" href={link("/hizmetler#yakit")}>
                    დეტალები
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
                  <h3>კაბინის ფილტრი</h3>
                  <p>კაბინის ჰაერის ხარისხის ეფექტური ფილტრაცია.</p>
                  <a className="text-link" href={link("/hizmetler#polen")}>
                    დეტალები
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
                  <h3>ჰიდრავლიკის ფილტრი</h3>
                  <p>ძლიერი დაცვა მძიმე პირობებში.</p>
                  <a className="text-link" href={link("/hizmetler#hidrolik")}>
                    დეტალები
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
              <h2>ხარისხისა და საიმედოობის სტანდარტები</h2>
              <p>დეტალურ ხარისხის მიდგომას ცალკე გვერდზე ვაზიარებთ.</p>
            </div>
            <div className="section-badge">ხარისხი</div>
          </div>
          <div className="quality-highlight-card">
            <div>
              <h3>ფილტრაციაში მაქსიმალური ნდობა.</h3>
              <p>
                გაიცანით ხარისხის გვერდი — გამძლეობა, მაღალი ეფექტურობა და ფართო მოცვა.
              </p>
            </div>
            <a className="btn btn-primary" href={link("/kalite")}>
              ხარისხის გვერდზე გადასვლა
            </a>
          </div>
        </div>
      </section>

      <section id="branches" className="section branches-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>ჩვენი ფილიალები</h2>
              <p>საკონტაქტო ინფორმაციას მიღებისთანავე განვაახლებთ.</p>
            </div>
            <div className="section-badge">ფილიალები</div>
          </div>
          <div className="branch-grid">
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-batum.png"
                  alt="ბათუმის ფილიალი"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>გურჯისტანი ბათუმი</h3>
              <p>ფილიალის საკონტაქტო მონაცემები გამოგვიგზავნეთ, აქ დავამატებთ.</p>
              <div className="branch-meta">
                <span>მისამართი: —</span>
                <span>ტელეფონი: —</span>
                <span>საათები: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-trabzon.png"
                  alt="ტრაბზონის ფილიალი"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>ტრაბზონი</h3>
              <p>ფილიალის საკონტაქტო მონაცემები გამოგვიგზავნეთ, აქ დავამატებთ.</p>
              <div className="branch-meta">
                <span>მისამართი: —</span>
                <span>ტელეფონი: —</span>
                <span>საათები: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-samsun.png"
                  alt="სამსუნის ფილიალი"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>სამსუნი</h3>
              <p>ფილიალის საკონტაქტო მონაცემები გამოგვიგზავნეთ, აქ დავამატებთ.</p>
              <div className="branch-meta">
                <span>მისამართი: —</span>
                <span>ტელეფონი: —</span>
                <span>საათები: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-erzurum.png"
                  alt="ერზრუმის ცენტრალური ფილიალი"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>ერზრუმი ცენტრი</h3>
              <p>ფილიალის საკონტაქტო მონაცემები გამოგვიგზავნეთ, აქ დავამატებთ.</p>
              <div className="branch-meta">
                <span>მისამართი: —</span>
                <span>ტელეფონი: —</span>
                <span>საათები: —</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section gallery-section compact">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>თქვენგან მიღებული</h2>
              <p>Powersa ფილტრების რეალური გამოყენება ადგილზე.</p>
            </div>
            <div className="section-badge">გალერეა</div>
          </div>
          <div className="gallery-mosaic">
            <div className="gallery-tile gallery-large">
              <Image
                src="/from-you-1.png"
                alt="სამუშაო სივრცის ფოტო"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 640px"
              />
              <div className="gallery-caption">
                <strong>ძლიერი ადგილზე</strong>
                <span>სერვისი და საწყობი</span>
              </div>
            </div>
            <div className="gallery-stack">
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-2.png"
                  alt="სერვისისა და პროდუქტის ფოტო"
                  width={2048}
                  height={1536}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-3.png"
                  alt="შეფუთვა და მიწოდება"
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
