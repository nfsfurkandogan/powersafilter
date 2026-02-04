"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  stokKodu?: string;
  ureticiKodu?: string;
  stokIsmi?: string;
  kod1?: string;
  kod3?: string;
  kod4?: string;
  grupIsmi?: string;
};

function normalize(value: string | undefined) {
  return (value || "")
    .toString()
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleUpperCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z0-9 ]+/g, " ")
    .trim();
}

function countBy(items: Product[], key: keyof Product) {
  const map = new Map<string, number>();
  items.forEach((item) => {
    const raw = item[key];
    if (!raw) return;
    const value = raw.toString().trim();
    if (!value) return;
    map.set(value, (map.get(value) || 0) + 1);
  });
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let active = true;
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        setProducts(data as Product[]);
      })
      .catch(() => {
        if (!active) return;
        setProducts([]);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const totals = useMemo(() => {
    const total = products.length;
    const brands = new Set(products.map((p) => p.ureticiKodu).filter(Boolean)).size;
    const kod3 = new Set(products.map((p) => p.kod3).filter(Boolean)).size;
    const kod4 = new Set(products.map((p) => p.kod4).filter(Boolean)).size;
    return { total, brands, kod3, kod4 };
  }, [products]);

  const topCategories = useMemo(() => {
    return countBy(products, "kod3").slice(0, 6);
  }, [products]);

  const topBrands = useMemo(() => {
    return countBy(products, "ureticiKodu").slice(0, 6);
  }, [products]);

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q || q.length < 2) return [];
    const out: Product[] = [];
    for (let i = 0; i < products.length; i += 1) {
      const item = products[i];
      const hay = normalize(
        [item.stokKodu, item.ureticiKodu, item.stokIsmi, item.grupIsmi].join(" ")
      );
      if (hay.includes(q)) out.push(item);
      if (out.length >= 6) break;
    }
    return out;
  }, [products, query]);

  const maxCategory = topCategories[0]?.[1] || 1;
  const maxBrand = topBrands[0]?.[1] || 1;

  return (
    <>
      <section className="catalog-hero">
        <div className="container catalog-hero-inner">
          <div>
            <span className="eyebrow">Katalog Merkezi</span>
            <h1>Katalog verilerini tek merkezden yönetin.</h1>
            <p>
              Ürün portföyü, üretici ve kategori dağılımı burada özetlenir. Detaylı
              arama için ürün arama sayfasını kullanabilirsiniz.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Ürün Arama
              </a>
              <a className="btn btn-ghost" href="/hizmetler">
                Hizmetleri Gör
              </a>
            </div>
          </div>
          <div className="catalog-hero-card">
            <strong>Katalog Durumu</strong>
            <p>Toplam ürün: {totals.total.toLocaleString("tr-TR")}</p>
            <p>Üretici sayısı: {totals.brands.toLocaleString("tr-TR")}</p>
            <p>Kategori (Kod-3): {totals.kod3.toLocaleString("tr-TR")}</p>
            <p>Tip (Kod-4): {totals.kod4.toLocaleString("tr-TR")}</p>
          </div>
        </div>
      </section>

      <section className="section catalog-stats">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Katalog Analizi</h2>
              <p>En yoğun kategoriler ve üretici dağılımı.</p>
            </div>
            <div className="section-badge">Analiz</div>
          </div>
          <div className="catalog-panels">
            <div className="catalog-panel">
              <h3>Öne Çıkan Kategoriler</h3>
              {topCategories.map(([label, count]) => (
                <div key={label} className="catalog-item">
                  <div>
                    <strong>{label}</strong>
                    <span>{count.toLocaleString("tr-TR")} ürün</span>
                  </div>
                  <div className="catalog-bar">
                    <span style={{ width: `${(count / maxCategory) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="catalog-panel">
              <h3>Öne Çıkan Üreticiler</h3>
              {topBrands.map(([label, count]) => (
                <div key={label} className="catalog-item">
                  <div>
                    <strong>{label}</strong>
                    <span>{count.toLocaleString("tr-TR")} ürün</span>
                  </div>
                  <div className="catalog-bar">
                    <span style={{ width: `${(count / maxBrand) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section catalog-preview">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Hızlı Arama Önizlemesi</h2>
              <p>Hızlı arama ile birkaç sonuç görüntüleyin.</p>
            </div>
            <div className="section-badge">Önizleme</div>
          </div>
          <div className="catalog-preview-card">
            <div className="input-group wide">
              <label htmlFor="catalog-query">Ürün / Stok / Üretici</label>
              <input
                id="catalog-query"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Örn: WK735, P502478, Yakıt Filtresi..."
              />
            </div>
            {loading ? (
              <div className="result-empty">Katalog yükleniyor...</div>
            ) : results.length === 0 ? (
              <div className="result-empty">Arama yapmak için en az 2 karakter girin.</div>
            ) : (
              <div className="preview-list">
                {results.map((item, index) => (
                  <div key={`${item.stokKodu}-${index}`} className="preview-item">
                    <div>
                      <strong>{item.stokIsmi || "Ürün"}</strong>
                      <span>Stok: {item.stokKodu || "-"}</span>
                    </div>
                    <a href="/urun-ara">Detaylı Ara</a>
                  </div>
                ))}
              </div>
            )}
            <div className="preview-actions">
              <a className="btn btn-primary" href="/urun-ara">
                Ürün Arama Sayfası
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
