import Image from "next/image";

const services = [
  {
    id: "yag",
    title: "Oil Filter",
    subtitle: "Critical protection for long engine life and performance.",
    image: {
      src: "/filters-oil@2x.png",
      alt: "Powersa oil filter",
      width: 1738,
      height: 1746,
    },
    paragraphs: [
      "Oil filters capture particles and contaminants in engine oil to protect the engine. Choosing the right oil filter extends component life and prevents performance loss.",
      "Powersa Filter oil filters provide reliable filtration across vehicle segments with a wide product range. Stock code and category filters enable quick access to the right product.",
    ],
    bullets: ["High filtration efficiency", "Wide compatibility", "Fast stock code access"],
  },
  {
    id: "hava",
    title: "Air Filter",
    subtitle: "Balanced engine operation with clean airflow.",
    image: {
      src: "/filters-grid@2x.png",
      alt: "Powersa air filter",
      width: 1966,
      height: 1750,
    },
    paragraphs: [
      "Air filters trap dust and particles before entering the engine, improving combustion efficiency. Clean airflow optimizes fuel consumption and protects engine health.",
      "Powersa Filter air filters offer options for passenger, commercial, and heavy-duty vehicles so you can quickly find the right filter.",
    ],
    bullets: ["Balanced airflow", "Performance-focused filtration", "Vehicle-specific options"],
  },
  {
    id: "yakit",
    title: "Fuel Filter",
    subtitle: "Maximum cleanliness and reliability in the fuel line.",
    image: {
      src: "/filters-fuel@2x.png",
      alt: "Powersa fuel filter",
      width: 1916,
      height: 1858,
    },
    paragraphs: [
      "Fuel filters prevent foreign particles from reaching the fuel system, protecting injectors and pumps. Clean fuel is critical for performance and reliability.",
      "Powersa Filter fuel filters support quick access to the right product with manufacturer and model compatibility.",
    ],
    bullets: ["Strong protection in fuel line", "Protects system components", "Fast product matching"],
  },
  {
    id: "polen",
    title: "Cabin Filter",
    subtitle: "Effective filtration for cabin air quality.",
    image: {
      src: "/filters-cabin@2x.png",
      alt: "Powersa cabin filter",
      width: 1994,
      height: 1730,
    },
    paragraphs: [
      "Cabin filters capture dust and allergens entering the cabin, improving driving comfort. Cabin air quality is especially important in urban use.",
      "Powersa Filter cabin filters allow fast selection with clear categories and stock code search.",
    ],
    bullets: ["Cabin comfort", "Allergen and dust control", "Easy and fast selection"],
  },
  {
    id: "hidrolik",
    title: "Hydraulic Filter",
    subtitle: "Durable and reliable filtration for heavy-duty conditions.",
    image: {
      src: "/filters-hero@2x.png",
      alt: "Powersa hydraulic filters",
      width: 2858,
      height: 1818,
    },
    paragraphs: [
      "Hydraulic filters remove contaminants from hydraulic systems, supporting efficient equipment operation. Proper filter selection is critical for system life in heavy-duty conditions.",
      "Powersa Filter hydraulic filters offer safe performance with robust construction and application diversity.",
    ],
    bullets: ["High durability", "Heavy-duty compatibility", "Supports system continuity"],
  },
];

export default function ServicesPageEn() {
  const base = "/en";
  const link = (path: string) => `${base}${path}`;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">Services</span>
            <h1>Fast and reliable solutions across filter product groups.</h1>
            <p>
              Powersa Filter offers wide coverage in oil, air, fuel, cabin, and
              hydraulic filters. Reach the right filter quickly with the product
              search engine.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                Start Product Search
              </a>
              <a className="btn btn-ghost" href={link("/katalog")}>
                View Catalog
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>Fast Selection</strong>
              <p>Stock code and category for the right product.</p>
            </div>
            <div>
              <strong>Wide Coverage</strong>
              <p>Filter solutions for different segments.</p>
            </div>
            <div>
              <strong>Corporate Support</strong>
              <p>Quick guidance based on needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Service Categories</h2>
              <p>Review categories for detailed information.</p>
            </div>
            <div className="section-badge">Categories</div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <a className="text-link" href={`#${service.id}`}>
                  Go to details
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-detail-section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-detail ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="service-copy">
                <span className="eyebrow">{service.title}</span>
                <h2>{service.subtitle}</h2>
                {service.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <div className="service-media">
                <div className="service-image">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    quality={95}
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </div>
                <ul>
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Select the right filter</h2>
              <p>
                Use the product search engine to quickly reach the right product
                with stock code or category filters.
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
