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

export default function CatalogPageAr() {
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
    <div className="rtl" dir="rtl">
      <section className="catalog-hero">
        <div className="container catalog-hero-inner">
          <div>
            <span className="eyebrow">مركز الكتالوج</span>
            <h1>إدارة بيانات الكتالوج من مركز واحد.</h1>
            <p>
              يتم تلخيص توزيع محفظة المنتجات والمُصنِّعين والفئات هنا. للبحث التفصيلي
              استخدم صفحة بحث المنتجات.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/ar/urun-ara">
                بحث المنتجات
              </a>
              <a className="btn btn-ghost" href="/ar/hizmetler">
                عرض الخدمات
              </a>
            </div>
          </div>
          <div className="catalog-hero-card">
            <strong>حالة الكتالوج</strong>
            <p>إجمالي المنتجات: {totals.total.toLocaleString("ar-EG")}</p>
            <p>عدد المُصنِّعين: {totals.brands.toLocaleString("ar-EG")}</p>
            <p>الفئة (Kod-3): {totals.kod3.toLocaleString("ar-EG")}</p>
            <p>النوع (Kod-4): {totals.kod4.toLocaleString("ar-EG")}</p>
          </div>
        </div>
      </section>

      <section className="section catalog-stats">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>تحليل الكتالوج</h2>
              <p>أكثر الفئات والمُصنِّعين تكرارًا.</p>
            </div>
            <div className="section-badge">تحليل</div>
          </div>
          <div className="catalog-panels">
            <div className="catalog-panel">
              <h3>الفئات الأبرز</h3>
              {topCategories.map(([label, count]) => (
                <div key={label} className="catalog-item">
                  <div>
                    <strong>{label}</strong>
                    <span>{count.toLocaleString("ar-EG")} منتج</span>
                  </div>
                  <div className="catalog-bar">
                    <span style={{ width: `${(count / maxCategory) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="catalog-panel">
              <h3>المُصنِّعون الأبرز</h3>
              {topBrands.map(([label, count]) => (
                <div key={label} className="catalog-item">
                  <div>
                    <strong>{label}</strong>
                    <span>{count.toLocaleString("ar-EG")} منتج</span>
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
              <h2>معاينة البحث السريع</h2>
              <p>اعرض بعض النتائج عبر البحث السريع.</p>
            </div>
            <div className="section-badge">معاينة</div>
          </div>
          <div className="catalog-preview-card">
            <div className="input-group wide">
              <label htmlFor="catalog-query">المنتج / كود المخزون / المُصنِّع</label>
              <input
                id="catalog-query"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="مثال: WK735، P502478، فلتر الوقود..."
              />
            </div>
            {loading ? (
              <div className="result-empty">يتم تحميل الكتالوج...</div>
            ) : results.length === 0 ? (
              <div className="result-empty">أدخل على الأقل حرفين للبحث.</div>
            ) : (
              <div className="preview-list">
                {results.map((item, index) => (
                  <div key={`${item.stokKodu}-${index}`} className="preview-item">
                    <div>
                      <strong>{item.stokIsmi || "منتج"}</strong>
                      <span>كود المخزون: {item.stokKodu || "-"}</span>
                    </div>
                    <a href="/ar/urun-ara">بحث تفصيلي</a>
                  </div>
                ))}
              </div>
            )}
            <div className="preview-actions">
              <a className="btn btn-primary" href="/ar/urun-ara">
                صفحة بحث المنتجات
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
