"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

type Kind = "coastal" | "aerial" | "beach" | "master";

type GalleryItem = {
  kind: Kind;
  alt: string;
  /**
   * Real photo path under /public, e.g. "/gallery/01.jpg". While empty the tile
   * renders the matching `.ph` placeholder gradient — drop files into
   * public/gallery/ and fill these in to go live (asset() adds the GH Pages
   * base path). No other change needed.
   */
  src?: string;
};

const items: GalleryItem[] = [
  { kind: "aerial", alt: "منظر جوي لمدينة رأس الحكمة" },
  { kind: "beach", alt: "الشاطئ والمياه الفيروزية" },
  { kind: "coastal", alt: "الواجهة البحرية عند الغروب" },
  { kind: "master", alt: "المخطط العام للمشروع" },
  { kind: "beach", alt: "منطقة البيتش كلوب" },
  { kind: "coastal", alt: "المارينا واليخوت" },
  { kind: "aerial", alt: "البحيرات والمساحات الخضراء" },
  { kind: "master", alt: "نماذج الوحدات السكنية" },
  { kind: "beach", alt: "ممشى الواجهة البحرية" },
];

// Lightbox control glyphs — same stroke language as icons.tsx.
function Chevron({ dir, size = 30 }: { dir: "left" | "right"; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function CloseGlyph({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastIndexRef = useRef<number | null>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const go = useCallback(
    (delta: number) =>
      setOpenIndex((cur) =>
        cur === null ? cur : (cur + delta + items.length) % items.length,
      ),
    [],
  );

  // Keyboard navigation + body scroll-lock while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // RTL: left arrow advances, right arrow goes back.
      else if (e.key === "ArrowLeft") go(1);
      else if (e.key === "ArrowRight") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, go]);

  // Return focus to the tile that opened the lightbox once it closes.
  useEffect(() => {
    if (openIndex !== null) lastIndexRef.current = openIndex;
    else if (lastIndexRef.current !== null) {
      tileRefs.current[lastIndexRef.current]?.focus();
    }
  }, [openIndex]);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <section
      id="gallery"
      className="reh-gallery"
      style={{ background: "var(--bg)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal eyebrow" style={{ marginBottom: 24 }}>
          <span>معرض المشروع</span>
        </div>

        <h2
          className="ar-display reveal reh-gallery-h2"
          style={{ fontSize: 52, margin: "0 0 44px" }}
        >
          لمحات من <em>رأس الحكمة</em>
        </h2>

        <div
          className="reveal reh-gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {items.map((it, i) => (
            <button
              key={i}
              type="button"
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              className="reh-gallery-tile"
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              aria-label={`عرض الصورة: ${it.alt}`}
            >
              {it.src ? (
                <img
                  className="reh-gallery-img"
                  src={asset(it.src)}
                  alt={it.alt}
                  loading="lazy"
                />
              ) : (
                <span
                  className={`ph ${it.kind} reh-gallery-img`}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="reh-lb"
          role="dialog"
          aria-modal="true"
          aria-label="معرض الصور"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="reh-lb-close"
            aria-label="إغلاق"
            onClick={close}
          >
            <CloseGlyph />
          </button>

          {/* RTL: previous sits on the right, next on the left. */}
          <button
            type="button"
            className="reh-lb-nav reh-lb-prev"
            aria-label="الصورة السابقة"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <Chevron dir="right" />
          </button>

          <figure
            className="reh-lb-stage"
            onClick={(e) => e.stopPropagation()}
          >
            {active.src ? (
              <img
                className="reh-lb-img"
                src={asset(active.src)}
                alt={active.alt}
              />
            ) : (
              <span
                className={`ph ${active.kind} reh-lb-img`}
                role="img"
                aria-label={active.alt}
              />
            )}
          </figure>

          <button
            type="button"
            className="reh-lb-nav reh-lb-next"
            aria-label="الصورة التالية"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <Chevron dir="left" />
          </button>

          <div className="reh-lb-counter mono">
            {openIndex! + 1} / {items.length}
          </div>
        </div>
      )}
    </section>
  );
}
