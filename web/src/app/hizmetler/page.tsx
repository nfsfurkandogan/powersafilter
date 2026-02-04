import Image from "next/image";

const services = [
  {
    id: "yag",
    title: "Yağ Filtresi",
    subtitle: "Motorun uzun ömürlü ve verimli çalışması için kritik koruma.",
    image: {
      src: "/filters-oil@2x.png",
      alt: "Powersa yağ filtresi",
      width: 1738,
      height: 1746,
    },
    paragraphs: [
      "Yağ filtresi, motor yağındaki partikülleri ve kirleticileri süzerek motoru korur. Doğru yağ filtresi seçimi, motor bileşenlerinin ömrünü uzatır ve performans kaybını önler.",
      "Powersa Filter yağ filtreleri, farklı araç segmentlerine uygun ürün çeşitliliğiyle güvenilir filtrasyon sağlar. Stok kodu ve kategori filtreleri ile doğru ürüne hızlı erişim mümkündür.",
    ],
    bullets: [
      "Yüksek filtrasyon verimliliği",
      "Geniş ürün uyumluluğu",
      "Hızlı stok kodu erişimi",
    ],
  },
  {
    id: "hava",
    title: "Hava Filtresi",
    subtitle: "Temiz hava akışıyla motorun dengeli çalışmasını destekler.",
    image: {
      src: "/filters-grid@2x.png",
      alt: "Powersa hava filtresi",
      width: 1966,
      height: 1750,
    },
    paragraphs: [
      "Hava filtresi, motora giren havadaki toz ve partikülleri tutarak yanma verimini artırır. Temiz hava akışı, yakıt tüketimini optimize eder ve motor sağlığını korur.",
      "Powersa Filter hava filtreleri; binek, ticari ve ağır hizmet araçlarına uygun seçenekleriyle doğru filtreyi hızlıca bulmanızı sağlar.",
    ],
    bullets: [
      "Dengeli hava akışı",
      "Performans odaklı filtrasyon",
      "Araç tipine uygun seçenekler",
    ],
  },
  {
    id: "yakit",
    title: "Yakıt Filtresi",
    subtitle: "Yakıt hattında maksimum temizlik ve güvenilirlik.",
    image: {
      src: "/filters-fuel@2x.png",
      alt: "Powersa yakıt filtresi",
      width: 1916,
      height: 1858,
    },
    paragraphs: [
      "Yakıt filtresi, yakıt sistemine ulaşabilecek yabancı maddeleri süzerek enjektör ve pompa sistemlerini korur. Temiz yakıt, motor performansı ve güvenilirliği açısından kritiktir.",
      "Powersa Filter yakıt filtreleri, farklı üretici ve model uyumluluğuyla doğru ürüne hızla ulaşmanızı hedefler.",
    ],
    bullets: [
      "Yakıt hattında güçlü koruma",
      "Sistem bileşenlerini korur",
      "Hızlı ürün eşleştirme",
    ],
  },
  {
    id: "polen",
    title: "Polen Filtresi",
    subtitle: "Kabin içi hava kalitesi için etkili filtreleme.",
    image: {
      src: "/filters-cabin@2x.png",
      alt: "Powersa polen filtresi",
      width: 1994,
      height: 1730,
    },
    paragraphs: [
      "Polen filtresi, kabin içine giren havadaki toz ve alerjenleri tutarak sürüş konforunu artırır. Kabin içi hava kalitesi, özellikle yoğun şehir kullanımında önemlidir.",
      "Powersa Filter polen filtreleri, net kategori yapısı ve stok kodu arama ile hızlı seçim imkanı sağlar.",
    ],
    bullets: [
      "Kabin içi konfor",
      "Alerjen ve toz kontrolü",
      "Kolay ve hızlı ürün seçimi",
    ],
  },
  {
    id: "hidrolik",
    title: "Hidrolik Filtresi",
    subtitle: "Ağır hizmet koşullarında dayanıklı ve güvenilir filtrasyon.",
    image: {
      src: "/filters-hero@2x.png",
      alt: "Powersa hidrolik filtreleri",
      width: 2858,
      height: 1818,
    },
    paragraphs: [
      "Hidrolik filtreler, hidrolik sistemlerdeki kirleticileri süzerek ekipmanların verimli çalışmasını destekler. Ağır hizmet koşullarında doğru filtre seçimi sistem ömrü için kritiktir.",
      "Powersa Filter hidrolik filtreleri, sağlam yapısı ve farklı uygulamalara uygun çeşitliliğiyle güvenli performans sunar.",
    ],
    bullets: [
      "Yüksek dayanıklılık",
      "Ağır hizmet uyumluluğu",
      "Sistem sürekliliğini destekler",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">Hizmetler</span>
            <h1>Filtre ürün gruplarında hızlı ve güvenilir çözümler.</h1>
            <p>
              Powersa Filter; yağ, hava, yakıt, polen ve hidrolik filtrelerinde geniş
              ürün kapsamı sunar. Ürün arama motoru ile doğru filtreye hızlıca ulaşabilirsiniz.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Ürün Aramaya Başla
              </a>
              <a className="btn btn-ghost" href="/katalog">
                Kataloğu Gör
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>Hızlı Seçim</strong>
              <p>Stok kodu ve kategoriyle doğru ürün.</p>
            </div>
            <div>
              <strong>Geniş Kapsam</strong>
              <p>Farklı segmentlere uygun filtre çözümleri.</p>
            </div>
            <div>
              <strong>Kurumsal Destek</strong>
              <p>İhtiyaca göre hızlı yönlendirme.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Hizmet Kategorileri</h2>
              <p>Detaylı bilgi için kategori başlıklarını inceleyin.</p>
            </div>
            <div className="section-badge">Kategoriler</div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <a className="text-link" href={`#${service.id}`}>
                  Detaylara Git
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
              <h2>Doğru filtreyi seçin</h2>
              <p>
                Ürün arama motoru ile stok kodu veya kategori bazlı filtreleme
                yaparak hızlıca doğru ürüne ulaşın.
              </p>
            </div>
            <a className="btn btn-primary" href="/urun-ara">
              Ürün Arama
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
