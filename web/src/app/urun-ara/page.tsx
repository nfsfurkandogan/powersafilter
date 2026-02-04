"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Product = {
  stokKodu?: string;
  ureticiKodu?: string;
  stokIsmi?: string;
  kod1?: string;
  kod3?: string;
  kod4?: string;
  grupIsmi?: string;
  _idx: number;
  _kod1: string;
  _kod3: string;
  _kod4: string;
  _brand: string;
  _search: string;
  _stok: string;
  _uretici: string;
  _name: string;
  _group: string;
};

const labelOverrides: Record<string, string> = {
  YAG: "YAĞ",
  BENZIN: "BENZİN",
  HIDROLIK: "HİDROLİK",
};

const quickFilters = [
  { label: "Yağ Filtresi", kod3: "Yağ" },
  { label: "Hava Filtresi", kod3: "Hava" },
  { label: "Yakıt Filtresi", kod3: "Yakıt" },
  { label: "Polen Filtresi", kod3: "Polen" },
  { label: "Hidrolik Filtresi", kod3: "Hidrolik" },
];

function normalizeSearch(value: string | undefined) {
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

function normalizeKey(value: string | undefined) {
  return normalizeSearch(value).replace(/\s+/g, "");
}

function formatLabel(value: string | undefined) {
  if (!value) return "";
  const normalized = normalizeKey(value);
  if (labelOverrides[normalized]) return labelOverrides[normalized];
  return value.toString().trim().toLocaleUpperCase("tr-TR");
}

function prepareProduct(raw: Product, index: number): Product {
  return {
    ...raw,
    _idx: index,
    _kod1: normalizeKey(raw.kod1),
    _kod3: normalizeKey(raw.kod3),
    _kod4: normalizeKey(raw.kod4),
    _brand: normalizeKey(raw.ureticiKodu),
    _search: normalizeSearch(
      [raw.stokKodu, raw.ureticiKodu, raw.stokIsmi, raw.grupIsmi].join(" ")
    ),
    _stok: normalizeKey(raw.stokKodu),
    _uretici: normalizeKey(raw.ureticiKodu),
    _name: normalizeSearch(raw.stokIsmi),
    _group: normalizeSearch(raw.grupIsmi),
  };
}

function matchesFilters(
  item: Product,
  filters: {
    kod1: string;
    kod3: string;
    kod4: string;
    brand: string;
  },
  excludeKey?: string
) {
  if (excludeKey !== "kod1" && filters.kod1 && item._kod1 !== filters.kod1) {
    return false;
  }
  if (excludeKey !== "kod3" && filters.kod3 && item._kod3 !== filters.kod3) {
    return false;
  }
  if (excludeKey !== "kod4" && filters.kod4 && item._kod4 !== filters.kod4) {
    return false;
  }
  if (excludeKey !== "brand" && filters.brand && item._brand !== filters.brand) {
    return false;
  }
  return true;
}

function scoreProduct(item: Product, query: string, queryKey: string) {
  if (!query) return 0;
  let score = 0;
  if (queryKey) {
    if (item._stok === queryKey) score += 8;
    if (item._uretici === queryKey) score += 6;
    if (item._kod4 === queryKey) score += 4;
    if (item._stok.includes(queryKey)) score += 3;
    if (item._uretici.includes(queryKey)) score += 2;
  }
  if (item._name.includes(query)) score += 2;
  if (item._group.includes(query)) score += 1;
  if (item._search.startsWith(query)) score += 1;
  return score;
}

function buildOptions(items: Product[], key: keyof Product, labelKey: keyof Product) {
  const map = new Map<string, string>();
  items.forEach((item) => {
    const value = item[key] as string;
    if (!value) return;
    if (!map.has(value)) {
      const label = item[labelKey] as string;
      map.set(value, formatLabel(label || value));
    }
  });
  return Array.from(map.entries())
    .map(([value, label]) => ({ value, label }))
    .sort((a, b) => a.label.localeCompare(b.label, "tr"));
}

export default function SearchPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");
  const [kod1, setKod1] = useState("");
  const [kod3, setKod3] = useState("");
  const [kod4, setKod4] = useState("");
  const [brand, setBrand] = useState("");
  const [limit, setLimit] = useState(30);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        const prepared = (data as Product[]).map((item, index) =>
          prepareProduct(item, index)
        );
        setProducts(prepared);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(queryInput);
    }, 180);
    return () => clearTimeout(timer);
  }, [queryInput]);

  const queryNorm = useMemo(() => normalizeSearch(query), [query]);
  const queryKey = useMemo(() => normalizeKey(query), [query]);
  const queryTokens = useMemo(() => {
    if (!queryNorm) return [] as string[];
    return queryNorm.split(" ").filter(Boolean);
  }, [queryNorm]);

  const filters = useMemo(
    () => ({ kod1, kod3, kod4, brand }),
    [kod1, kod3, kod4, brand]
  );

  const filtered = useMemo(() => {
    const result: Product[] = [];
    for (let i = 0; i < products.length; i += 1) {
      const item = products[i];
      if (!matchesFilters(item, filters)) continue;
      if (queryNorm) {
        if (queryKey && (item._stok === queryKey || item._uretici === queryKey)) {
          result.push(item);
          continue;
        }
        let matches = true;
        for (let t = 0; t < queryTokens.length; t += 1) {
          if (!item._search.includes(queryTokens[t])) {
            matches = false;
            break;
          }
        }
        if (!matches) continue;
      }
      result.push(item);
    }
    if (queryNorm) {
      result.sort((a, b) => {
        const scoreDiff =
          scoreProduct(b, queryNorm, queryKey) -
          scoreProduct(a, queryNorm, queryKey);
        if (scoreDiff !== 0) return scoreDiff;
        return a._idx - b._idx;
      });
    }
    return result;
  }, [products, filters, queryNorm, queryKey, queryTokens]);

  const visibleResults = useMemo(
    () => filtered.slice(0, limit),
    [filtered, limit]
  );

  const optionsBase = useMemo(() => {
    return {
      kod1: buildOptions(
        products.filter((item) => matchesFilters(item, filters, "kod1")),
        "_kod1",
        "kod1"
      ),
      kod3: buildOptions(
        products.filter((item) => matchesFilters(item, filters, "kod3")),
        "_kod3",
        "kod3"
      ),
      kod4: buildOptions(
        products.filter((item) => matchesFilters(item, filters, "kod4")),
        "_kod4",
        "kod4"
      ),
      brand: buildOptions(
        products.filter((item) => matchesFilters(item, filters, "brand")),
        "_brand",
        "ureticiKodu"
      ),
    };
  }, [products, filters]);

  const activeChips = useMemo(() => {
    const chips: string[] = [];
    if (queryNorm) chips.push(`Arama: ${query}`);
    if (kod1) chips.push(`Kod-1: ${formatLabel(kod1)}`);
    if (kod3) chips.push(`Kod-3: ${formatLabel(kod3)}`);
    if (kod4) chips.push(`Kod-4: ${formatLabel(kod4)}`);
    if (brand) chips.push(`Üretici: ${formatLabel(brand)}`);
    return chips;
  }, [queryNorm, query, kod1, kod3, kod4, brand]);

  const hasCriteria = useMemo(
    () => Boolean(queryNorm || kod1 || kod3 || kod4 || brand),
    [queryNorm, kod1, kod3, kod4, brand]
  );

  const relatedSearches = useMemo(() => {
    const base = [
      "Yağ filtresi",
      "Yakıt filtresi",
      "Hava filtresi",
      "Polen filtresi",
      "Hidrolik filtresi",
      "WK735",
      "P502478",
    ];
    if (!queryNorm) return base;
    if (queryNorm.includes("YAG") || queryNorm.includes("YAĞ")) {
      return ["Yağ filtresi", "Hidrolik filtresi", "Yakıt filtresi", "WK735"];
    }
    if (queryNorm.includes("YAKIT")) {
      return ["Yakıt filtresi", "Hava filtresi", "WK735", "P502478"];
    }
    if (queryNorm.includes("HAVA")) {
      return ["Hava filtresi", "Polen filtresi", "Yağ filtresi"];
    }
    if (queryNorm.includes("POLEN")) {
      return ["Polen filtresi", "Hava filtresi", "Kabin filtresi"];
    }
    return base;
  }, [queryNorm]);

  const handleReset = () => {
    setQueryInput("");
    setQuery("");
    setKod1("");
    setKod3("");
    setKod4("");
    setBrand("");
    setLimit(30);
  };

  const handleQuickFilter = (label: string) => {
    setKod1(normalizeKey("FILTRE"));
    setKod3(normalizeKey(label));
    setLimit(30);
    setTimeout(() => setModalOpen(true), 0);
  };

  const handleSearchOpen = () => {
    if (!hasCriteria) return;
    setModalOpen(true);
  };

  const handleCopy = async (value: string | undefined) => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modalOpen]);

  return (
    <>
      <section id="search-panel" className="section search-section search-page">
        <div className="container wide">
          <div className="section-head">
            <div>
              <h2>Ürün Arama</h2>
            </div>
            <div className="section-badge">Katalog</div>
          </div>

          <div className="search-panel">
            <div className="search-grid">
              <div className="input-group wide">
                <label htmlFor="query">Ürün / Stok / Üretici / Grup</label>
                <input
                  id="query"
                  type="text"
                  placeholder="Örn: WK735, P502478, Yakıt Filtresi..."
                  value={queryInput}
                  onChange={(event) => setQueryInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleSearchOpen();
                    }
                  }}
                />
              </div>
              <div className="input-group">
                <label htmlFor="filter-kod1">Kategori (Kod-1)</label>
                <select
                  id="filter-kod1"
                  value={kod1}
                  onChange={(event) => {
                    setKod1(event.target.value);
                    setLimit(30);
                  }}
                >
                  <option value="">Tümü</option>
                  {optionsBase.kod1.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="filter-kod3">Alt Kategori (Kod-3)</label>
                <select
                  id="filter-kod3"
                  value={kod3}
                  onChange={(event) => {
                    setKod3(event.target.value);
                    setLimit(30);
                  }}
                >
                  <option value="">Tümü</option>
                  {optionsBase.kod3.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="filter-kod4">Tip (Kod-4)</label>
                <select
                  id="filter-kod4"
                  value={kod4}
                  onChange={(event) => {
                    setKod4(event.target.value);
                    setLimit(30);
                  }}
                >
                  <option value="">Tümü</option>
                  {optionsBase.kod4.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="filter-brand">Üretici</label>
                <select
                  id="filter-brand"
                  value={brand}
                  onChange={(event) => {
                    setBrand(event.target.value);
                    setLimit(30);
                  }}
                >
                  <option value="">Tümü</option>
                  {optionsBase.brand.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="search-actions">
              <div className="active-filters">
                {activeChips.length === 0 ? (
                  <div className="filter-empty">
                    <strong>Filtre seçilmedi</strong>
                    <span>Arama yapın veya filtre seçin</span>
                  </div>
                ) : (
                  activeChips.map((chip) => (
                    <span key={chip} className="pill">
                      {chip}
                    </span>
                  ))
                )}
              </div>
              <div className="search-buttons">
                <button className="btn btn-ghost" type="button" onClick={handleReset}>
                  Temizle
                </button>
                <button className="btn btn-primary" type="button" onClick={handleSearchOpen}>
                  Ara
                </button>
              </div>
            </div>
          </div>

          <div className="quick-filters">
            <span>Hızlı filtre:</span>
            {quickFilters.map((item) => (
              <button
                key={item.label}
                className="chip"
                type="button"
                onClick={() => handleQuickFilter(item.kod3)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="related-searches">
            <span>Bunu arayan bunu da aradı</span>
            <div className="related-chips">
              {relatedSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setQueryInput(item);
                    setTimeout(handleSearchOpen, 0);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {hasCriteria ? (
            <div className="result-summary">
              <div>
                <strong>
                  {loading
                    ? "Ürünler yükleniyor"
                    : `${filtered.length.toLocaleString("tr-TR")} ürün bulundu`}
                </strong>
                <span>Sonuçları görmek için açın</span>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {modalOpen ? (
        <div className="result-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div
            className="result-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="result-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="result-modal-header">
              <div className="modal-brand">
                <Image
                  className="modal-logo"
                  src="/logo.png"
                  alt="Powersa Filter"
                  width={743}
                  height={154}
                  quality={100}
                />
                <div>
                  <strong id="result-modal-title">Arama Sonuçları</strong>
                  <span>
                    {loading
                      ? "Ürünler yükleniyor"
                      : `${filtered.length.toLocaleString("tr-TR")} ürün bulundu`}
                  </span>
                </div>
              </div>
              <div className="modal-actions">
                <div className="modal-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.65" y1="16.65" x2="21" y2="21" />
                  </svg>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setModalOpen(false)}
                  aria-label="Kapat"
                >
                  Kapat
                </button>
              </div>
            </div>
            <div className="result-modal-hero">
              <div className="modal-hero-copy">
                <span className="eyebrow">Powersa Katalog</span>
                <h3>Net ve hızlı eşleşme</h3>
                <p>Stok kodu, üretici ve kategori bazlı güçlü filtreleme.</p>
              </div>
              <Image
                className="modal-hero-image"
                src="/sepet-transparent.png"
                alt="Powersa ürün kolisi"
                width={1335}
                height={927}
                quality={95}
              />
            </div>
            <div className="result-modal-body">
              {loading ? (
                <div className="result-empty">Veriler yükleniyor...</div>
              ) : visibleResults.length === 0 ? (
                <div className="result-empty">
                  <strong>Sonuç bulunamadı.</strong> Filtreleri genişletip tekrar deneyin.
                </div>
              ) : (
                <>
                  <div className="result-table">
                    <div className="result-body">
                      {visibleResults.map((item) => (
                        <div key={`${item._idx}-${item.stokKodu}`} className="result-row">
                          <div className="result-col">
                            <span className="result-label">Ürün</span>
                            <div className="result-name">{item.stokIsmi || "Ürün"}</div>
                            <div className="result-sub">Grup: {item.grupIsmi || "-"}</div>
                          </div>
                          <div className="result-col">
                            <span className="result-label">Stok Kodu</span>
                            <div className="result-value">{item.stokKodu || "-"}</div>
                          </div>
                          <div className="result-col">
                            <span className="result-label">Üretici</span>
                            <div className="result-value">{item.ureticiKodu || "-"}</div>
                          </div>
                          <div className="result-col">
                            <span className="result-label">Kategori</span>
                            <div className="result-tags">
                            {item.kod1 ? (
                              <span className="pill">{formatLabel(item.kod1)}</span>
                            ) : null}
                            {item.kod3 ? (
                              <span className="pill">{formatLabel(item.kod3)}</span>
                            ) : null}
                            {item.kod4 ? (
                              <span className="pill">{formatLabel(item.kod4)}</span>
                            ) : null}
                          </div>
                          </div>
                          <div className="result-col result-actions">
                            <span className="result-label">İşlem</span>
                            <button type="button" onClick={() => handleCopy(item.stokKodu)}>
                              Stok Kodu Kopyala
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {filtered.length > limit ? (
                    <button
                      className="load-more"
                      type="button"
                      onClick={() => setLimit(limit + 30)}
                    >
                      Daha Fazla Göster
                    </button>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
