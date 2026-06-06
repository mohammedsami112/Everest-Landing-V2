"use client";

import { IconArrow } from "../icons";

export function Hero() {
  const scrollToForm = () => {
    const el = document.querySelector("[data-lead-form]");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="reh-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-deep)",
        color: "var(--on-deep)",
        minHeight: 720,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url("/hero-coastal.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(265deg, rgba(8,27,44,.94) 0%, rgba(8,27,44,.85) 30%, rgba(8,27,44,.4) 65%, rgba(8,27,44,.15) 100%)",
        }}
      />

      <div
        className="reh-hero-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 48px 140px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "right",
        }}
      >
        <div className="reveal" style={{ maxWidth: 720, width: "100%" }}>
          <div
            className="eyebrow reh-hero-eyebrow"
            style={{
              color: "var(--accent)",
              marginBottom: 28,
              justifyContent: "flex-start",
            }}
          >
            <span>واحدة من أقوى الفرص العقارية في الساحل</span>
          </div>

          <h1
            className="ar-display reh-hero-h1"
            style={{
              fontSize: 88,
              margin: 0,
              color: "var(--on-deep)",
              fontWeight: 800,
              textShadow: "0 2px 30px rgba(0,0,0,.35)",
            }}
          >
            مدينة ساحلية
            <br />
            <em
              style={{
                fontFamily: "var(--font-display), var(--font-ar)",
                fontStyle: "italic",
              }}
            >
              بمعايير عالمية
            </em>
          </h1>

          <div
            className="reh-hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 28,
              padding: "10px 18px",
              border: "1px solid var(--accent)",
              borderRadius: 999,
              color: "var(--accent)",
              fontSize: 14,
              fontWeight: 600,
              background: "rgba(8,27,44,.35)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--accent)",
                borderRadius: "50%",
              }}
            />
            تحت إشراف إماراتي
          </div>

          <p
            className="reh-hero-p"
            style={{
              marginTop: 28,
              fontSize: 18,
              lineHeight: 1.9,
              color: "rgba(240,233,218,.85)",
              maxWidth: 520,
              textShadow: "0 1px 14px rgba(0,0,0,.4)",
            }}
          >
            تجربة متكاملة تجمع بين الفخامة والهدوء والاستثمار…
            <br />
            في واحدة من أقوى الوجهات الجديدة على ساحل البحر المتوسط.
          </p>

          <div
            className="reh-hero-cta-row"
            style={{
              marginTop: 40,
              display: "flex",
              gap: 12,
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-primary" onClick={scrollToForm}>
              اكتشف تفاصيل المشروع{" "}
              <IconArrow size={16} style={{ transform: "scaleX(-1)" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
