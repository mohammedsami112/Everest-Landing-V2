import { IconCompass, IconLeaf, IconScale } from "../icons";
import { Placeholder } from "../placeholder";

export function LifestyleSection() {
  const items = [
    { icon: <IconLeaf size={26} />, label: "وقتاً أهدأ" },
    { icon: <IconScale size={26} />, label: "حياة أكثر توازناً" },
    {
      icon: <IconCompass size={26} />,
      label: "تجربة تشعر فيها أن كل شيء صُمم لتستمتع بهدوء أكبر وجودة أعلى",
    },
  ];

  return (
    <section
      className="reh-life"
      style={{ background: "var(--bg)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal eyebrow" style={{ marginBottom: 24 }}>
          <span>بعض الأماكن تغيّر طريقة شعورك بالحياة</span>
        </div>

        <div
          className="reh-life-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <Placeholder
            kind="beach"
            label="رأس الحكمة — الواجهة البحرية"
            className="reveal reh-life-image"
            style={{ height: 520, width: "100%" }}
          />

          <div className="reveal">
            <h2
              className="ar-display reh-life-h2"
              style={{ fontSize: 56, margin: 0 }}
            >
              الحياة التي تبدأ
              <br />
              <em>عندما يهدأ كل شيء</em>
            </h2>

            <p
              style={{
                marginTop: 24,
                fontSize: 17,
                lineHeight: 1.9,
                color: "var(--ink-soft)",
                maxWidth: 500,
              }}
            >
              حيث يصبح البحر جزءاً من يومك… وليس مجرد إجازة.
              <br />
              تستيقظ على هدوء مختلف… سماء مفتوحة… ونسيم يحمل إحساساً بالراحة
              والخصوصية.
            </p>

            <p
              style={{
                margin: "32px 0 16px",
                fontSize: 18,
                fontWeight: 600,
                color: "var(--ink)",
              }}
            >
              مدينة تمنحك:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {items.map((it, i) => (
                <div
                  key={i}
                  className="reh-life-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: "18px 22px",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--accent-soft)",
                    background: "rgba(255,255,255,.6)",
                  }}
                >
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "var(--radius-sm)",
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
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--ink)",
                      lineHeight: 1.6,
                    }}
                  >
                    {it.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
