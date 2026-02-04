"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem("powersa_welcome_dismissed");
    if (dismissed === "1") return;
    const timer = window.setTimeout(() => setOpen(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const dismiss = () => {
    window.localStorage.setItem("powersa_welcome_dismissed", "1");
    setOpen(false);
  };

  return (
    <div className="welcome-modal-backdrop" onClick={dismiss}>
      <div
        className="welcome-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="welcome-modal-hero">
          <Image
            className="welcome-mascot"
            src="/mascot.png"
            alt="Powersa maskotu"
            width={1200}
            height={900}
            quality={95}
            priority
          />
          <div className="welcome-copy">
            <span className="eyebrow">Powersa Filter</span>
            <h2 id="welcome-title">Sitemize hoş geldiniz!</h2>
            <p>
              Maskotumuz size eşlik ediyor. Katalog arama ile doğru filtreyi saniyeler
              içinde bulun.
            </p>
            <div className="welcome-actions">
              <a className="btn btn-primary" href="/urun-ara" onClick={dismiss}>
                Kataloğa Git
              </a>
              <a className="btn btn-ghost" href="/" onClick={dismiss}>
                Ana sayfa
              </a>
              <button className="btn btn-ghost" type="button" onClick={dismiss}>
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
