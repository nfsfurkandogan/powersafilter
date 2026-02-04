"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Product = {
  stokKodu?: string;
  ureticiKodu?: string;
  stokIsmi?: string;
  grupIsmi?: string;
  kod1?: string;
  kod3?: string;
  kod4?: string;
  _search: string;
  _stok: string;
  _uretici: string;
  _idx: number;
};

type Message = {
  role: "user" | "assistant";
  text: string;
  results?: Product[];
  list?: string[];
  links?: { label: string; href: string }[];
  note?: string;
};

function normalizeSearch(value: string) {
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

function normalizeKey(value: string) {
  return normalizeSearch(value).replace(/\s+/g, "");
}

function prepareProduct(raw: Product, index: number): Product {
  return {
    ...raw,
    _idx: index,
    _search: normalizeSearch(
      [raw.stokKodu, raw.ureticiKodu, raw.stokIsmi, raw.grupIsmi].join(" ")
    ),
    _stok: normalizeKey(raw.stokKodu || ""),
    _uretici: normalizeKey(raw.ureticiKodu || ""),
  };
}

function scoreProduct(item: Product, query: string, queryKey: string) {
  let score = 0;
  if (queryKey) {
    if (item._stok === queryKey) score += 8;
    if (item._uretici === queryKey) score += 6;
    if (item._stok.includes(queryKey)) score += 3;
    if (item._uretici.includes(queryKey)) score += 2;
  }
  if (item._search.startsWith(query)) score += 2;
  if (item._search.includes(query)) score += 1;
  return score;
}

const siteInfo = {
  services: [
    "Yağ Filtresi",
    "Hava Filtresi",
    "Yakıt Filtresi",
    "Polen Filtresi",
    "Hidrolik Filtresi",
  ],
  branches: ["Gürcistan Batum", "Trabzon", "Samsun", "Merkez Erzurum"],
  quality: ["Geniş ürün portföyü", "Hızlı erişim", "Güçlü performans"],
  pages: [
    "Ana Sayfa",
    "Ürün Ara (Katalog)",
    "Hakkımızda",
    "Hizmetler",
    "Kalite",
    "Şubeler",
  ],
};

function detectIntent(query: string) {
  if (
    query.includes("ILETISIM") ||
    query.includes("TELEFON") ||
    query.includes("MAIL") ||
    query.includes("EPOSTA") ||
    query.includes("ADRES")
  ) {
    return "contact";
  }
  if (
    query.includes("SUBE") ||
    query.includes("BATUM") ||
    query.includes("TRABZON") ||
    query.includes("SAMSUN") ||
    query.includes("ERZURUM")
  ) {
    return "branches";
  }
  if (query.includes("HIZMET") || query.includes("SERVIS")) {
    return "services";
  }
  if (query.includes("KALITE") || query.includes("GUVEN")) {
    return "quality";
  }
  if (query.includes("KATALOG") || query.includes("ARAMA")) {
    return "catalog";
  }
  if (query.includes("HAKKIMIZDA") || query.includes("KURUMSAL")) {
    return "about";
  }
  if (query.includes("SITE") || query.includes("SAYFA") || query.includes("MENU")) {
    return "pages";
  }
  return null;
}

export default function PowerAssistant() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Merhaba! Stok kodu, ürün adı veya üretici kodu ile arayın.",
    },
  ]);
  const productsRef = useRef<Product[] | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const loadProducts = async () => {
    if (productsRef.current) return;
    setLoading(true);
    try {
      const res = await fetch("/products.json");
      const data = (await res.json()) as Product[];
      productsRef.current = data.map((item, index) =>
        prepareProduct(item, index)
      );
    } catch {
      productsRef.current = [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      loadProducts();
    }
  }, [open]);

  useEffect(() => {
    if (!panelRef.current) return;
    panelRef.current.scrollTop = panelRef.current.scrollHeight;
  }, [messages, open]);

  const scheduleResponse = (responses: Message[]) => {
    if (!responses.length) {
      setIsTyping(false);
      return;
    }
    window.setTimeout(() => {
      setMessages((prev) => [...prev, ...responses]);
      setIsTyping(false);
    }, 900);
  };

  const runSearch = async (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    if (!productsRef.current) {
      await loadProducts();
    }

    const products = productsRef.current || [];
    const query = normalizeSearch(trimmed);
    const queryKey = normalizeKey(trimmed);
    const responses: Message[] = [];

    if (!query || query.length < 2) {
      responses.push({
        role: "assistant",
        text: "Lütfen en az 2 karakter girin veya stok kodu/üretici kodu yazın.",
      });
      return scheduleResponse(responses);
    }

    const intent = detectIntent(query);
    if (intent === "contact") {
      responses.push({
        role: "assistant",
        text: "İletişim sayfasına yönlendirebilirim.",
        links: [{ label: "İletişim", href: "/iletisim" }],
        note: "Telefon, e-posta ve adres bilgisini gönderirsen ekleyebilirim.",
      });
      return scheduleResponse(responses);
    }
    if (intent === "branches") {
      responses.push({
        role: "assistant",
        text: "Şubelerimiz:",
        list: siteInfo.branches,
        links: [{ label: "Şubeler sayfası", href: "/subeler" }],
      });
      return scheduleResponse(responses);
    }
    if (intent === "services") {
      responses.push({
        role: "assistant",
        text: "Hizmetlerimiz:",
        list: siteInfo.services,
        links: [{ label: "Hizmetler sayfası", href: "/hizmetler" }],
      });
      return scheduleResponse(responses);
    }
    if (intent === "quality") {
      responses.push({
        role: "assistant",
        text: "Kalite ve güven yaklaşımımız:",
        list: siteInfo.quality,
        links: [{ label: "Kalite sayfası", href: "/kalite" }],
      });
      return scheduleResponse(responses);
    }
    if (intent === "catalog") {
      responses.push({
        role: "assistant",
        text: "Katalog arama için Ürün Ara sayfasını kullanabilirsiniz.",
        links: [
          { label: "Ürün Ara", href: "/urun-ara" },
          { label: "Katalog Merkezi", href: "/katalog" },
        ],
      });
      return scheduleResponse(responses);
    }
    if (intent === "about") {
      responses.push({
        role: "assistant",
        text: "Powersa Filter, premium filtre çözümleri sunar.",
        links: [{ label: "Hakkımızda", href: "/hakkimizda" }],
      });
      return scheduleResponse(responses);
    }
    if (intent === "pages") {
      responses.push({
        role: "assistant",
        text: "Sitedeki ana sayfalar:",
        list: siteInfo.pages,
      });
      return scheduleResponse(responses);
    }

    const tokens = query.split(" ").filter(Boolean);
    const results: Product[] = [];

    for (let i = 0; i < products.length; i += 1) {
      const item = products[i];
      if (queryKey && (item._stok === queryKey || item._uretici === queryKey)) {
        results.push(item);
        continue;
      }
      let matches = true;
      for (let t = 0; t < tokens.length; t += 1) {
        if (!item._search.includes(tokens[t])) {
          matches = false;
          break;
        }
      }
      if (matches) results.push(item);
    }

    if (results.length === 0) {
      responses.push({
        role: "assistant",
        text: "Sonuç bulunamadı. Stok kodu veya üretici kodu ile tekrar deneyin.",
      });
      return scheduleResponse(responses);
    }

    results.sort(
      (a, b) => scoreProduct(b, query, queryKey) - scoreProduct(a, query, queryKey)
    );

    responses.push({
      role: "assistant",
      text: `Size uygun ${Math.min(results.length, 6)} sonuç buldum:`,
      results: results.slice(0, 6),
    });
    return scheduleResponse(responses);
  };

  const handleSend = async () => {
    await runSearch(input);
  };

  const suggested = useMemo(
    () => [
      "İletişim",
      "Şubelerimiz",
      "Hizmetlerimiz",
      "WK735",
      "Yakıt filtresi",
    ],
    []
  );

  return (
    <div className="power-assistant">
      <a
        className="assistant-whatsapp"
        href="https://wa.me/905492525001"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişim"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M16 3C9.4 3 4 8.3 4 14.7c0 2.4.8 4.7 2.2 6.6L5 29l7.9-1.9c2.1 1.1 4.5 1.7 7.1 1.7 6.6 0 12-5.2 12-11.6S22.6 3 16 3zm0 21.3c-2.2 0-4.2-.6-5.9-1.7l-.4-.3-4.7 1.2 1.3-4.4-.3-.4c-1.2-1.6-1.8-3.5-1.8-5.5 0-5 4.4-9.1 9.8-9.1s9.8 4.1 9.8 9.1-4.4 9.1-9.8 9.1zm5.5-6.7c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.3-.8-.6-1.3-1.4-1.5-1.7-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.1-.3.2-.4.1-.2 0-.3 0-.5s-.7-1.6-1-2.2c-.3-.6-.6-.5-.8-.5h-.6c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 1.9s.9 2.3 1 2.5c.1.2 1.9 3.1 4.7 4.2.6.3 1.1.4 1.5.5.6.2 1.1.1 1.5.1.5-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"
            fill="currentColor"
          />
        </svg>
      </a>
      <button
        className="assistant-toggle"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="assistant-toggle-dot" />
        <span>Power Asistan</span>
      </button>
      {open ? (
        <div className="assistant-panel">
          <div className="assistant-header">
            <div className="assistant-title">
              <div className="assistant-avatar">
                <Image
                  src="/mascot.png"
                  alt="Powersa maskotu"
                  width={1200}
                  height={1200}
                  quality={90}
                />
              </div>
              <span className={`assistant-status ${isTyping ? "typing" : ""}`} />
              <div>
                <strong>Power Asistan</strong>
                <small>{isTyping ? "Powersa yazıyor..." : "Ürün bulma yardımcısı"}</small>
              </div>
            </div>
            <button
              className="assistant-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Kapat"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="assistant-body" ref={panelRef}>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`assistant-msg ${message.role}`}
              >
                <p>{message.text}</p>
                {message.results ? (
                  <div className="assistant-results">
                    {message.results.map((item) => (
                      <div
                        key={`${item._idx}-${item.stokKodu}`}
                        className="assistant-result-card"
                      >
                        <strong>{item.stokIsmi || "Ürün"}</strong>
                        <span>Stok: {item.stokKodu || "-"}</span>
                        <span>Üretici: {item.ureticiKodu || "-"}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
                {message.list ? (
                  <ul className="assistant-list">
                    {message.list.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                ) : null}
                {message.links ? (
                  <div className="assistant-links">
                    {message.links.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                {message.note ? (
                  <div className="assistant-note">{message.note}</div>
                ) : null}
              </div>
            ))}
            {loading ? <div className="assistant-loading">Veriler yükleniyor...</div> : null}
            {isTyping ? (
              <div className="assistant-typing">
                <div className="assistant-typing-icons">
                  <Image
                    src="/mascot.png"
                    alt="Powersa maskotu"
                    width={160}
                    height={160}
                    quality={90}
                  />
                </div>
                <div className="assistant-typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            ) : null}
          </div>

          <div className="assistant-suggestions">
            {suggested.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  runSearch(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="assistant-input">
            <input
              type="text"
              placeholder="Stok kodu veya ürün adı yazın"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSend();
              }}
            />
            <button type="button" onClick={handleSend} aria-label="Gönder">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 12h12M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
