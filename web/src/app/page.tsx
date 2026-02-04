import Image from "next/image";
import WelcomeModal from "@/components/WelcomeModal";

export default function Home() {
  return (
    <>
      <section className="hero-banner">
        <div className="container hero-banner-inner">
          <div className="hero-banner-copy">
            <span className="hero-tag">Powersa Filter</span>
            <h1>Kurumsal filtre çözümlerinde hızlı ve net sonuç.</h1>
            <p>
              Stok kodu, üretici ve kategori filtreleriyle doğru ürüne saniyeler içinde
              ulaşın.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Katalog Arama
              </a>
              <a className="btn btn-ghost" href="/hizmetler">
                Hizmetleri Gör
              </a>
            </div>
            <div className="hero-strip">
              <span>Yağ</span>
              <span>Yakıt</span>
              <span>Hava</span>
              <span>Polen</span>
              <span>Hidrolik</span>
            </div>
          </div>

          <div className="hero-banner-visual">
            <div className="hero-banner-frame" />
            <Image
              className="hero-pack-primary"
              src="/powersa-pack-1.png"
              alt="Powersa ürün kutuları"
              width={1536}
              height={1024}
              quality={95}
              priority
              sizes="(max-width: 1024px) 88vw, 640px"
            />
            <Image
              className="hero-pack-secondary"
              src="/powersa-pack-2.png"
              alt="Powersa ürün çeşitleri"
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
                alt="Yağ filtresi"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>Yağ Filtresi</figcaption>
          </figure>
          <figure className="gallery-card float-2">
            <div className="gallery-visual photo">
              <Image
                src="/featured-2.png"
                alt="Yakıt filtresi"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>Yakıt Filtresi</figcaption>
          </figure>
          <figure className="gallery-card float-3">
            <div className="gallery-visual photo">
              <Image
                src="/featured-3.png"
                alt="Polen filtresi"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <figcaption>Polen Filtresi</figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-search">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Ürün Arama Merkezi</h2>
              <p>Stok kodu, üretici veya kategori ile hızlı arama yapın.</p>
            </div>
            <div className="section-badge">Katalog</div>
          </div>
          <div className="home-search-card">
            <div className="home-search-copy">
              <span className="eyebrow">Katalog Arama</span>
              <h3>Doğru filtreyi saniyeler içinde bulun.</h3>
              <p>
                Stok kodu, üretici ve kategori filtreleriyle net sonuçlar. Detaylı
                arama için katalog sayfasına geçin.
              </p>
            </div>
            <div className="home-search-panel">
              <div className="home-search-field">
                <label htmlFor="home-search-input">Ürün / Stok / Üretici</label>
                <input
                  id="home-search-input"
                  type="text"
                  placeholder="Örn: WK735, P502478, Yakıt Filtresi..."
                />
              </div>
              <div className="home-search-actions">
                <a className="btn btn-primary" href="/urun-ara">
                  Katalog Arama
                </a>
                <a className="btn btn-ghost" href="/urun-ara">
                  Detaylı Filtre
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="section catalog-highlight">
        <div className="container highlight-inner">
          <div className="highlight-copy">
            <span className="eyebrow">Katalog Arama Merkezi</span>
            <h2>Ürün arama en önemli alan.</h2>
            <p>Hızlı, net ve profesyonel sonuç akışı için tasarlandı.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Katalog Arama Sayfası
              </a>
              <a className="btn btn-ghost" href="/hizmetler">
                Hizmetlerimiz
              </a>
            </div>
          </div>
          <div className="highlight-card">
            <div>
              <strong>Akıllı Eşleştirme</strong>
              <p>Stok kodu, üretici kodu ve isim bazlı hızlı sonuçlar.</p>
            </div>
            <div>
              <strong>Kategori Filtreleri</strong>
              <p>Yağ, hava, yakıt, polen ve hidrolik filtreleri için net kategori seçimi.</p>
            </div>
            <div>
              <strong>Profesyonel Arayüz</strong>
              <p>Kurumsal görünüm, hızlı işlem ve güvenilir bilgi akışı.</p>
            </div>
          </div>
        </div>
      </section>

      <WelcomeModal />

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Hizmetlerimiz</h2>
              <p>Filtre ürün gruplarımızı buradan inceleyebilirsiniz.</p>
            </div>
            <div className="section-badge">Hizmetler</div>
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
                  <h3>Yağ Filtresi</h3>
                  <p>Motor koruması ve performans için yüksek filtrasyon.</p>
                  <a className="text-link" href="/hizmetler#yag">
                    Detayları gör
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 10h10a3 3 0 1 0-3-3" />
                    <path d="M3 16h14a3 3 0 1 0-3-3" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>Hava Filtresi</h3>
                  <p>Temiz hava akışıyla verimli ve sağlıklı çalışma.</p>
                  <a className="text-link" href="/hizmetler#hava">
                    Detayları gör
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 4h7a2 2 0 0 1 2 2v12a3 3 0 1 1-6 0v-2" />
                    <path d="M7 4v10" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>Yakıt Filtresi</h3>
                  <p>Yakıt hattında maksimum temizlik ve güvenilirlik.</p>
                  <a className="text-link" href="/hizmetler#yakit">
                    Detayları gör
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>Polen Filtresi</h3>
                  <p>Kabin içi hava kalitesi için etkili filtreleme.</p>
                  <a className="text-link" href="/hizmetler#polen">
                    Detayları gör
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v6" />
                    <path d="M8 7h8" />
                    <rect x="6" y="9" width="12" height="10" rx="2" />
                  </svg>
                </div>
                <div className="service-body">
                  <h3>Hidrolik Filtresi</h3>
                  <p>Ağır hizmet koşullarında güçlü koruma ve dayanıklılık.</p>
                  <a className="text-link" href="/hizmetler#hidrolik">
                    Detayları gör
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
              <h2>Kalite ve Güven Standartları</h2>
              <p>Detaylı kalite yaklaşımımızı ayrı sayfada paylaştık.</p>
            </div>
            <div className="section-badge">Kalite</div>
          </div>
          <div className="quality-highlight-card">
            <div>
              <h3>Filtrasyonda maksimum güven.</h3>
              <p>
                Dayanıklılık, yüksek verimlilik ve geniş ürün kapsamı için kalite
                sayfasını inceleyin.
              </p>
            </div>
            <a className="btn btn-primary" href="/kalite">
              Kalite Sayfasına Git
            </a>
          </div>
        </div>
      </section>

      <section id="branches" className="section branches-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Şubelerimiz</h2>
              <p>
                Şube iletişim bilgilerini
                <br />
                paylaştıkça güncelleyebiliriz.
              </p>
            </div>
            <div className="section-badge">Şubeler</div>
          </div>
          <div className="branch-grid">
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-batum.png"
                  alt="Gürcistan Batum şubesi"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Gürcistan Batum</h3>
              <p>Şube iletişim bilgilerini paylaşın, burada yayınlayalım.</p>
              <div className="branch-meta">
                <span>Adres: —</span>
                <span>Telefon: —</span>
                <span>Saat: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-trabzon.png"
                  alt="Trabzon şubesi"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Trabzon</h3>
              <p>Şube iletişim bilgilerini paylaşın, burada yayınlayalım.</p>
              <div className="branch-meta">
                <span>Adres: —</span>
                <span>Telefon: —</span>
                <span>Saat: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-samsun.png"
                  alt="Samsun şubesi"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Samsun</h3>
              <p>Şube iletişim bilgilerini paylaşın, burada yayınlayalım.</p>
              <div className="branch-meta">
                <span>Adres: —</span>
                <span>Telefon: —</span>
                <span>Saat: —</span>
              </div>
            </article>
            <article className="branch-card">
              <div className="branch-photo">
                <Image
                  src="/branch-erzurum.png"
                  alt="Merkez Erzurum şubesi"
                  width={1600}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
              </div>
              <h3>Merkez Erzurum</h3>
              <p>Şube iletişim bilgilerini paylaşın, burada yayınlayalım.</p>
              <div className="branch-meta">
                <span>Adres: —</span>
                <span>Telefon: —</span>
                <span>Saat: —</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section gallery-section compact">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Sizden Gelenler</h2>
              <p>Powersa filtrelerinin sahadaki gerçek kullanımları.</p>
            </div>
            <div className="section-badge">Galeri</div>
          </div>
          <div className="gallery-mosaic">
            <div className="gallery-tile gallery-large">
              <Image
                src="/from-you-1.png"
                alt="Sizden gelen çalışma alanı fotoğrafı"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 640px"
              />
              <div className="gallery-caption">
                <strong>Sahada Güçlü</strong>
                <span>Servis ve depo uygulamaları</span>
              </div>
            </div>
            <div className="gallery-stack">
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-2.png"
                  alt="Sizden gelen servis ve ürün fotoğrafı"
                  width={2048}
                  height={1536}
                  quality={90}
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
              </div>
              <div className="gallery-tile gallery-small">
                <Image
                  src="/from-you-3.png"
                  alt="Powersa paketleme ve sevkiyat"
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
