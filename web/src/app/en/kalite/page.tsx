import Image from "next/image";

const qualityHighlights = [
  {
    title: "High Filtration Efficiency",
    text: "Long-lasting filtration performance that protects engine and system components.",
  },
  {
    title: "Wide Application Coverage",
    text: "Product portfolio suitable for passenger, commercial, and heavy-duty segments.",
  },
  {
    title: "Corporate Control",
    text: "Fast matching with stock code, manufacturer, and category tracking.",
  },
];

const qualityImages = [
  {
    src: "/filters-hero@2x.png",
    alt: "Powersa filter range",
    width: 2858,
    height: 1818,
  },
  {
    src: "/filters-grid@2x.png",
    alt: "Powersa air filters",
    width: 1966,
    height: 1750,
  },
  {
    src: "/filters-fuel@2x.png",
    alt: "Powersa fuel filters",
    width: 1916,
    height: 1858,
  },
];

export default function QualityPageEn() {
  const base = "/en";
  const link = (path: string) => `${base}${path}`;

  return (
    <>
      <section className="page-hero quality-hero">
        <div className="container page-hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Quality Standards</span>
            <h1>Corporate quality approach for reliable filtration.</h1>
            <p>
              Powersa Filter prioritizes efficiency, durability, and accurate matching
              in filter performance. The product portfolio is managed by quality
              criteria and offers fast access through the catalog structure.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                Product Search
              </a>
              <a className="btn btn-ghost" href={link("/katalog")}>
                Catalog Center
              </a>
            </div>
          </div>
          <div className="quality-hero-card">
            <div>
              <strong>Control Points</strong>
              <p>Filtration efficiency, compatibility, and life-cycle criteria.</p>
            </div>
            <div>
              <strong>Clear Tracking</strong>
              <p>Accurate product guidance by stock and category.</p>
            </div>
            <div>
              <strong>Corporate Assurance</strong>
              <p>Reliable filter solutions aligned with field needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quality-gallery">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Filter Technology Visuals</h2>
              <p>We reinforced quality perception with the filter visuals you sent.</p>
            </div>
            <div className="section-badge">Visuals</div>
          </div>
          <div className="quality-gallery-grid">
            {qualityImages.map((image) => (
              <article key={image.src} className="quality-gallery-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 380px"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quality-features">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Quality Commitments</h2>
              <p>Reliable performance and long life in filter solutions.</p>
            </div>
            <div className="section-badge">Standard</div>
          </div>
          <div className="quality-feature-grid">
            {qualityHighlights.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
