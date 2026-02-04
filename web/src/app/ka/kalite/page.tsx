import Image from "next/image";

const qualityHighlights = [
  {
    title: "მაღალი ფილტრაციის ეფექტურობა",
    text: "გრძელვადიანი შესრულება, რომელიც იცავს სისტემის კომპონენტებს.",
  },
  {
    title: "ფართო გამოყენება",
    text: "პროდუქტები შესაბამისია მსუბუქი, კომერციული და მძიმე სეგმენტებისთვის.",
  },
  {
    title: "კორპორატიული კონტროლი",
    text: "სწრაფი დამთხვევა საწყობი კოდით, მწარმოებლით და კატეგორიით.",
  },
];

const qualityImages = [
  {
    src: "/filters-hero@2x.png",
    alt: "Powersa ფილტრების ასორტიმენტი",
    width: 2858,
    height: 1818,
  },
  {
    src: "/filters-grid@2x.png",
    alt: "Powersa ჰაერის ფილტრები",
    width: 1966,
    height: 1750,
  },
  {
    src: "/filters-fuel@2x.png",
    alt: "Powersa საწვავის ფილტრები",
    width: 1916,
    height: 1858,
  },
];

export default function QualityPageKa() {
  const base = "/ka";
  const link = (path: string) => `${base}${path}`;

  return (
    <>
      <section className="page-hero quality-hero">
        <div className="container page-hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">ხარისხის სტანდარტები</span>
            <h1>საიმედო ფილტრაციის კორპორატიული ხარისხი.</h1>
            <p>
              Powersa Filter იყენებს ეფექტურობის, გამძლეობის და სწორი დამთხვევის
              პრინციპებს. კატალოგის სტრუქტურა უზრუნველყოფს სწრაფ წვდომას.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                პროდუქტის ძიება
              </a>
              <a className="btn btn-ghost" href={link("/katalog")}>
                კატალოგი
              </a>
            </div>
          </div>
          <div className="quality-hero-card">
            <div>
              <strong>კონტროლის წერტილები</strong>
              <p>ეფექტურობა, შესაბამისობა და რესურსის კრიტერიუმები.</p>
            </div>
            <div>
              <strong>მკაფიო მონიტორინგი</strong>
              <p>სწორი პროდუქტის მიმართულება კატეგორიებით.</p>
            </div>
            <div>
              <strong>კორპორატიული გარანტია</strong>
              <p>საიმედო გადაწყვეტილებები საველე მოთხოვნებისთვის.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quality-gallery">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>ფილტრაციის ტექნოლოგიის ვიზუალები</h2>
              <p>თქვენ მიერ გაგზავნილი ვიზუალები აძლიერებს ხარისხის აღქმას.</p>
            </div>
            <div className="section-badge">ვიზუალი</div>
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
              <h2>ხარისხის ვალდებულებები</h2>
              <p>საიმედო შესრულება და ხანგრძლივი რესურსი.</p>
            </div>
            <div className="section-badge">სტანდარტი</div>
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
