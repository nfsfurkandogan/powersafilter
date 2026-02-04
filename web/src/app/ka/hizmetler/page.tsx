import Image from "next/image";

const services = [
  {
    id: "yag",
    title: "ზეთის ფილტრი",
    subtitle: "ძრავის დაცვა და ხანგრძლივი რესურსი.",
    image: {
      src: "/filters-oil@2x.png",
      alt: "Powersa ზეთის ფილტრი",
      width: 1738,
      height: 1746,
    },
    paragraphs: [
      "ზეთის ფილტრი აკავებს ნაწილაკებს და იცავს ძრავს. სწორი ფილტრის არჩევა ზრდის კომპონენტების სიცოცხლეს.",
      "Powersa Filter ზეთის ფილტრები უზრუნველყოფს საიმედო ფილტრაციას სხვადასხვა სეგმენტში.",
    ],
    bullets: ["მაღალი ფილტრაციის ეფექტურობა", "ფართო შესაბამისობა", "სწრაფი კოდის წვდომა"],
  },
  {
    id: "hava",
    title: "ჰაერის ფილტრი",
    subtitle: "სუფთა ჰაერი სტაბილური მუშაობისთვის.",
    image: {
      src: "/filters-grid@2x.png",
      alt: "Powersa ჰაერის ფილტრი",
      width: 1966,
      height: 1750,
    },
    paragraphs: [
      "ჰაერის ფილტრი აკავებს მტვერს და ნაწილაკებს, რაც ზრდის წვის ეფექტურობას.",
      "Powersa Filter ჰაერის ფილტრები წარმოდგენილია სამგზავრო, კომერციულ და მძიმე ტექნიკაში.",
    ],
    bullets: ["ბალანსირებული ჰაერის ნაკადი", "ეფექტურობაზე ორიენტირებული", "სეგმენტის შესაბამისი არჩევანი"],
  },
  {
    id: "yakit",
    title: "საწვავის ფილტრი",
    subtitle: "საწვავის ხაზში მაქსიმალური სისუფთავე.",
    image: {
      src: "/filters-fuel@2x.png",
      alt: "Powersa საწვავის ფილტრი",
      width: 1916,
      height: 1858,
    },
    paragraphs: [
      "საწვავის ფილტრი იცავს ინჟექტორსა და ტუმბოს უცხო ნაწილაკებისგან.",
      "Powersa Filter საწვავის ფილტრები უზრუნველყოფს სწრაფ წვდომას სწორი პროდუქტისკენ.",
    ],
    bullets: ["ძლიერი დაცვა საწვავის ხაზში", "სისტემის კომპონენტების დაცვა", "სწრაფი დამთხვევა"],
  },
  {
    id: "polen",
    title: "კაბინის ფილტრი",
    subtitle: "კაბინის ჰაერის ხარისხის ეფექტური ფილტრაცია.",
    image: {
      src: "/filters-cabin@2x.png",
      alt: "Powersa კაბინის ფილტრი",
      width: 1994,
      height: 1730,
    },
    paragraphs: [
      "კაბინის ფილტრი აკავებს მტვერს და ალერგენებს, ზრდის კომფორტს.",
      "Powersa Filter კაბინის ფილტრები უზრუნველყოფს სწრაფ არჩევანს კატეგორიებით.",
    ],
    bullets: ["კომფორტი", "ალერგენის კონტროლი", "მარტივი და სწრაფი არჩევანი"],
  },
  {
    id: "hidrolik",
    title: "ჰიდრავლიკის ფილტრი",
    subtitle: "ძლიერი და საიმედო ფილტრაცია მძიმე პირობებში.",
    image: {
      src: "/filters-hero@2x.png",
      alt: "Powersa ჰიდრავლიკის ფილტრები",
      width: 2858,
      height: 1818,
    },
    paragraphs: [
      "ჰიდრავლიკის ფილტრები იცავს სისტემას დაბინძურებისგან და ზრდის რესურსს.",
      "Powersa Filter ჰიდრავლიკის ფილტრები გამძლე კონსტრუქციით უზრუნველყოფს შესრულებას.",
    ],
    bullets: ["მაღალი გამძლეობა", "მძიმე პირობებთან შესაბამისობა", "სისტემის უწყვეტობა"],
  },
];

export default function ServicesPageKa() {
  const base = "/ka";
  const link = (path: string) => `${base}${path}`;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">სერვისები</span>
            <h1>სწრაფი და საიმედო გადაწყვეტები ფილტრების ჯგუფებში.</h1>
            <p>
              Powersa Filter გთავაზობთ ზეთის, ჰაერის, საწვავის, კაბინის და ჰიდრავლიკის
              ფილტრებს. სწორ ფილტრამდე სწრაფად მიაღწიეთ ძიების სისტემით.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                ძიების დაწყება
              </a>
              <a className="btn btn-ghost" href={link("/katalog")}>
                კატალოგი
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>სწრაფი არჩევანი</strong>
              <p>საწყობი კოდით და კატეგორიით.</p>
            </div>
            <div>
              <strong>ფართო სპექტრი</strong>
              <p>სხვადასხვა სეგმენტისთვის.</p>
            </div>
            <div>
              <strong>კორპორატიული მხარდაჭერა</strong>
              <p>სწრაფი მიმართულება საჭიროებების მიხედვით.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>სერვისის კატეგორიები</h2>
              <p>დეტალებისთვის ნახეთ კატეგორიები.</p>
            </div>
            <div className="section-badge">კატეგორიები</div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <a className="text-link" href={`#${service.id}`}>
                  დეტალებზე გადასვლა
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
              <h2>აირჩიეთ სწორი ფილტრი</h2>
              <p>
                პროდუქტის ძიების სისტემით სწრაფად მიაღწიეთ სწორ პროდუქტს.
              </p>
            </div>
            <a className="btn btn-primary" href={link("/urun-ara")}>
              პროდუქტის ძიება
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
