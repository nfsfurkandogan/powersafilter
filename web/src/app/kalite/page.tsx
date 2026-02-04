import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Powersa Filter | Kalite",
  description: "Powersa Filter kalite ve ürün görselleri.",
};

const qualityImages = [
  {
    src: "/quality-1.png",
    title: "Yağ Filtresi",
    alt: "Yağ filtresi görseli",
  },
  {
    src: "/quality-2.png",
    title: "Yakıt Filtresi",
    alt: "Yakıt filtresi görseli",
  },
  {
    src: "/quality-3.png",
    title: "Hava Filtresi",
    alt: "Hava filtresi görseli",
  },
  {
    src: "/quality-4.png",
    title: "Polen Filtresi",
    alt: "Polen filtresi görseli",
  },
  {
    src: "/quality-5.png",
    title: "Hidrolik Filtresi",
    alt: "Hidrolik filtresi görseli",
  },
  {
    src: "/quality-6.png",
    title: "Özel Üretim",
    alt: "Özel üretim filtre görseli",
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="page-hero quality-hero">
        <div className="container page-hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Kalite</span>
            <h1>Filtre performansında güven, her detayda kalite standardı.</h1>
            <p>
              Bu sayfada yalnızca ChatGPT ile oluşturulan filtre görsellerini
              paylaşıyoruz. Her bir görsel, ürün portföyümüzün form ve doku
              yaklaşımını yansıtır.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Ürün Arama
              </a>
              <a className="btn btn-ghost" href="/katalog">
                Katalog Merkezi
              </a>
            </div>
          </div>
          <div className="page-hero-card quality-hero-card">
            <strong>Kalite Odaklı Üretim</strong>
            <p>Dayanıklılık, uyum ve filtrasyon verimi aynı standarda bağlı.</p>
            <p>Görseller ürün gruplarını hızlıca karşılaştırmak için seçildi.</p>
          </div>
        </div>
      </section>

      <section className="section quality-gallery">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Filtre Görselleri</h2>
              <p>ChatGPT ile oluşturulan filtre görselleri.</p>
            </div>
            <div className="section-badge">Görsel</div>
          </div>

          <div className="gallery-grid quality-grid">
            {qualityImages.map((item) => (
              <figure key={item.src} className="gallery-card quality-card">
                <div className="gallery-visual quality-visual">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1600}
                    height={1200}
                    quality={92}
                    sizes="(max-width: 1024px) 90vw, 360px"
                  />
                </div>
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
