import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">Hakkımızda</span>
            <h1>Powersa Filter, doğru filtreyi hızlı ve güvenilir şekilde sunar.</h1>
            <p>
              Otomotiv, ticari ve ağır hizmet segmentlerinde filtre çözümleri sunan
              Powersa Filter; ürün seçimini kolaylaştıran arama deneyimi, güçlü stok
              bilgisi ve net ürün kategorileriyle müşterilerine hız kazandırır.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Ürün Aramaya Başla
              </a>
              <a className="btn btn-ghost" href="/hizmetler">
                Hizmetleri Gör
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>Geniş Ürün Portföyü</strong>
              <p>Farklı araç tiplerine uygun çözümler.</p>
            </div>
            <div>
              <strong>Hızlı ve Net Seçim</strong>
              <p>Kod ve kategori temelli hızlı arama.</p>
            </div>
            <div>
              <strong>Kurumsal Güven</strong>
              <p>Uzun vadeli iş ortaklığı yaklaşımı.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-visuals">
        <div className="container about-visuals-inner">
          <div className="about-visual-main">
            <Image
              src="/featured-2.png"
              alt="Powersa ürünleri serviste"
              width={2048}
              height={1536}
              quality={90}
              sizes="(max-width: 1024px) 90vw, 620px"
            />
            <div className="about-visual-badge">Sahada Güçlü Çözümler</div>
          </div>
          <div className="about-visual-stack">
            <div className="about-visual-card">
              <Image
                src="/featured-1.png"
                alt="Powersa ürün rafı"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <div className="about-visual-card">
              <Image
                src="/from-you-3.png"
                alt="Powersa paketleme"
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
              <h2>Kurumsal Özet</h2>
              <p>Güçlü portföy ve hızlı erişim odaklı altyapı.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <strong>18.000+</strong>
              <span>Ürün portföyü</span>
            </div>
            <div className="stat-card">
              <strong>5</strong>
              <span>Filtre grubu</span>
            </div>
            <div className="stat-card">
              <strong>4</strong>
              <span>Aktif şube</span>
            </div>
            <div className="stat-card">
              <strong>24 Saat</strong>
              <span>Hızlı dönüş hedefi</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-split">
        <div className="container about-split-inner">
          <div className="about-split-copy">
            <span className="eyebrow">Operasyon Gücü</span>
            <h2>Doğru ürünü hızlı eşleştiren altyapı.</h2>
            <p>
              Katalog arama ve üretici bazlı filtreleme sistemimiz, stok kodu
              doğrulamasını hızlandırır. Böylece ekipler doğru ürüne minimum
              zamanda ulaşır.
            </p>
            <ul>
              <li>Stok kodu ve üretici kodu eşleştirme</li>
              <li>Net kategori yapısı</li>
              <li>Saha ihtiyaçlarına hızlı yanıt</li>
            </ul>
          </div>
          <div className="about-split-visual">
            <Image
              src="/from-you-1.png"
              alt="Powersa ürün teslim süreci"
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
              <h2>Biz Kimiz</h2>
              <p>Powersa Filter, sektör ihtiyaçlarına özel filtre çözümleri sunar.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <p>
                Ürün seçimini kolaylaştıran arama motoru ve net kategorilerle
                doğru ürünle hızlıca buluşmanızı hedefliyoruz. Amacımız, tüm
                filtre ihtiyaçlarınızı tek bir merkezden güvenle yönetebilmeniz.
              </p>
            </div>
            <div className="info-card">
              <p>
                Yağ, hava, yakıt, polen ve hidrolik filtrelerinde geniş bir ürün
                yelpazesiyle hem günlük kullanım hem de ağır hizmet koşullarında
                istikrarlı performans sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Misyon & Vizyon</h2>
              <p>Kalite, hız ve güven esaslı bir yaklaşım.</p>
            </div>
            <div className="section-badge">Kurumsal</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Misyon</h3>
              <p>
                Doğru filtreyi en hızlı şekilde sunarak araçların performansını
                korumak, müşterilerimizin operasyonlarında süreklilik sağlamak.
              </p>
            </div>
            <div className="info-card">
              <h3>Vizyon</h3>
              <p>
                Filtre çözümlerinde tercih edilen, güvenilir ve erişilebilir bir
                marka olarak sektörde sürdürülebilir değer üretmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Değerlerimiz</h2>
              <p>İş yapış şeklimizi belirleyen temel ilkeler.</p>
            </div>
            <div className="section-badge">Değerler</div>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <h3>Güvenilirlik</h3>
              <p>Kaliteyi standart hale getirir, sürdürülebilir çözümler sunarız.</p>
            </div>
            <div className="value-card">
              <h3>Hız</h3>
              <p>Doğru ürüne hızlı erişim için süreçlerimizi optimize ederiz.</p>
            </div>
            <div className="value-card">
              <h3>Şeffaflık</h3>
              <p>Ürün bilgilerini net ve erişilebilir şekilde sunarız.</p>
            </div>
            <div className="value-card">
              <h3>İş Ortaklığı</h3>
              <p>Müşterilerimizle uzun vadeli ve güçlü bağlar kurarız.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section scope-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Ürün Kapsamı</h2>
              <p>İhtiyacınıza uygun filtre gruplarını tek yerde sunuyoruz.</p>
            </div>
            <div className="section-badge">Kapsam</div>
          </div>
          <div className="scope-grid">
            <span>Yağ Filtresi</span>
            <span>Hava Filtresi</span>
            <span>Yakıt Filtresi</span>
            <span>Polen Filtresi</span>
            <span>Hidrolik Filtresi</span>
            <span>Özel Filtre Çözümleri</span>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Aradığınız ürünü şimdi bulun</h2>
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
