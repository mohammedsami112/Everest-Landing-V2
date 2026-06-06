"use client";

import { IconArrow, IconBuilding, IconPin, IconTree } from "../icons";
import { asset } from "@/lib/asset";

export function WhyHekma() {
  const items = [
    { icon: <IconTree size={28} />, label: "أكثر هدوءاً" },
    { icon: <IconBuilding size={28} />, label: "أكثر تنظيماً" },
    { icon: <IconPin size={28} />, label: "وأكثر قرباً مما يبحث عنه الناس اليوم" },
  ];
  return (
    <section
      className="reh-why"
      style={{ background: "var(--bg)", padding: "96px 48px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal eyebrow" style={{ marginBottom: 24 }}>
          <span>ربما لهذا السبب تتجه الأنظار نحو رأس الحكمة</span>
        </div>

        <div
          className="reh-why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div className="reveal">
            <h2
              className="ar-display reh-why-h2"
              style={{ fontSize: 56, margin: 0 }}
            >
              لأن بعض المدن
              <br />
              <em>لا تُبنى فقط للبيع</em>
            </h2>
            <p
              className="reh-why-p"
              style={{
                marginTop: 22,
                fontSize: 17,
                lineHeight: 1.9,
                color: "var(--ink-soft)",
                maxWidth: 480,
              }}
            >
              بل لتقديم تجربة حياة مختلفة بالكامل.
            </p>

            <img
              src={asset("/why-hekma.jpg")}
              alt="رأس الحكمة"
              className="reveal reh-why-image"
              style={{
                marginTop: 36,
                height: 320,
                width: "100%",
                objectFit: "cover",
                borderRadius: "var(--radius-lg)",
                display: "block",
              }}
            />
          </div>

          <div className="reveal" style={{ paddingTop: 8 }}>
            <p
              style={{
                margin: "0 0 28px",
                fontSize: 18,
                color: "var(--ink-soft)",
                fontWeight: 500,
              }}
            >
              مدينة يشعر فيها كل شيء بأنه:
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              {items.map((it, i) => (
                <div
                  key={i}
                  className="card reh-why-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 22,
                    padding: "22px 26px",
                    border: "1px solid var(--accent-soft)",
                    background: "rgba(255,255,255,.6)",
                    transition: "transform .2s, box-shadow .2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "var(--shadow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <span
                    className="reh-why-card-icon"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "var(--radius)",
                      background: "var(--accent-soft)",
                      color: "var(--accent-deep)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    {it.icon}
                  </span>
                  <div
                    className="reh-why-card-label"
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    {it.label}
                  </div>
                  <span
                    style={{
                      marginInlineStart: "auto",
                      color: "var(--accent)",
                      opacity: 0.5,
                    }}
                  >
                    <IconArrow
                      size={18}
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: 36,
                fontSize: 16,
                lineHeight: 1.9,
                color: "var(--ink-soft)",
              }}
            >
              ولهذا أصبحت المشروعات المتكاملة هي الأكثر جذباً لمن يبحثون عن
              جودة حياة واستثمار أقوى.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
