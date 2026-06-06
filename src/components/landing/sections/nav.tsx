"use client";

import { Logo } from "../logo";

// The nav uses the Dark / charcoal palette regardless of the page theme —
// keeps the top bar feeling like a fixed chrome element rather than part of
// the section it overlays. Values here match the `charcoal` background tweak
// (see prototype: deep #0b0d11, deep-soft #13161a) baked in directly.
const NAV_BG = "rgba(11, 13, 17, 0.85)";
const NAV_BORDER = "rgba(255, 255, 255, 0.08)";
const NAV_FG = "#f0e9da";

export function Nav() {
  const scrollToForm = () => {
    const el = document.querySelector("[data-lead-form]");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="nav"
      style={{
        background: NAV_BG,
        borderBottom: `1px solid ${NAV_BORDER}`,
        color: NAV_FG,
      }}
    >
      <div
        className="reh-nav-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 48px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <Logo tone="on-dark" />
        <button
          className="btn btn-primary reh-nav-cta-btn"
          onClick={scrollToForm}
          style={{
            height: 42,
            padding: "0 18px",
            fontSize: 14,
            borderRadius: "var(--radius-sm)",
          }}
        >
          احجز استشارة
        </button>
      </div>
    </header>
  );
}
