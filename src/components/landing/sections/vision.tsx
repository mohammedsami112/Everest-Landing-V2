import { IconBuilding, IconChart, IconGlobe, IconLeaf } from "../icons";
import { asset } from "@/lib/asset";

export function VisionSection() {
  const pillars = [
    { icon: <IconLeaf size={26} />, label: "الاستدامة" },
    { icon: <IconGlobe size={26} />, label: "سهولة الاتصال بالعالم" },
    { icon: <IconBuilding size={26} />, label: "البنية الحديثة" },
    { icon: <IconChart size={26} />, label: "والاستثمار طويل المدى" },
  ];
  return (
    <section
      className="reh-vision"
      style={{
        background: "var(--bg-deep)",
        color: "var(--on-deep)",
        padding: "100px 48px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal eyebrow" style={{ marginBottom: 24 }}>
          <span>أغلب المدن الساحلية الناجحة عالمياً بدأت بفكرة مختلفة</span>
        </div>

        <div
          className="reh-vision-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <h2
              className="ar-display reh-vision-h2"
              style={{ fontSize: 56, margin: 0, color: "var(--on-deep)" }}
            >
              مدينة متكاملة…
              <br />
              <em>وليست مجرد وحدات للبيع</em>
            </h2>

            <p
              style={{
                marginTop: 26,
                fontSize: 17,
                lineHeight: 1.9,
                color: "var(--on-deep-mute)",
              }}
            >
              ولهذا تبنّت مدن القابضة الإماراتية منهج تطوير يعتمد على:
            </p>

            <div
              className="reh-vision-pillars"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
                marginTop: 28,
              }}
            >
              {pillars.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 12,
                    padding: "20px 8px",
                    borderRadius: "var(--radius)",
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid var(--on-deep-line)",
                  }}
                >
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "var(--radius)",
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {p.icon}
                  </span>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--on-deep)",
                      lineHeight: 1.4,
                    }}
                  >
                    {p.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: 32,
                fontSize: 16,
                lineHeight: 1.9,
                color: "var(--on-deep-mute)",
                maxWidth: 480,
              }}
            >
              لتحويل رأس الحكمة إلى وجهة ساحلية عالمية قادرة على النمو والعمل
              طوال العام.
            </p>
          </div>

          <img
            src={asset("/vision.jpg")}
            alt="رؤية المشروع"
            className="reveal reh-vision-image"
            style={{
              height: 540,
              width: "100%",
              objectFit: "cover",
              borderRadius: "var(--radius-lg)",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
