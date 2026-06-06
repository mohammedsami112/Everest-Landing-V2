import { IconAward, IconChart, IconLeaf } from "../icons";
import { Placeholder } from "../placeholder";

export function InvestmentSection() {
  const pillars = [
    { icon: <IconLeaf size={24} />, label: "جودة الحياة" },
    { icon: <IconChart size={24} />, label: "الاستثمار طويل المدى" },
    { icon: <IconAward size={24} />, label: "النمو المستمر لسنوات" },
  ];

  return (
    <section
      className="reh-invest"
      style={{ background: "var(--bg)", padding: "100px 48px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal eyebrow" style={{ marginBottom: 24 }}>
          <span>حين تتجه الاستثمارات الدولية إلى مكان واحد… فغالباً هناك رؤية أكبر خلفه</span>
        </div>

        <div
          className="reh-invest-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <h2
              className="ar-display reh-invest-h2"
              style={{ fontSize: 52, margin: 0 }}
            >
              المدن الساحلية الكبرى
              <br />
              <em>لا تُبنى بالصدفة</em>
            </h2>

            <p
              style={{
                marginTop: 24,
                fontSize: 16.5,
                lineHeight: 2,
                color: "var(--ink-soft)",
                maxWidth: 540,
              }}
            >
              شهدت السنوات الأخيرة تحركات ضخمة من الدولة المصرية والشراكات
              الدولية لتطوير رأس الحكمة وتحويلها إلى واحدة من أهم الوجهات
              الساحلية والاستثمارية في المنطقة.
              <br />
              <br />
              ومع دخول كيانات إماراتية كبرى في التطوير… أصبحت المدينة مرشحة بقوة
              لتكرار نماذج ناجحة عالمياً جمعت بين:
            </p>

            <div
              className="reh-invest-pillars"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
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
                    padding: "22px 12px",
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
                    }}
                  >
                    {p.icon}
                  </span>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--ink)",
                      lineHeight: 1.4,
                    }}
                  >
                    {p.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Placeholder
            kind="aerial"
            label="رأس الحكمة — المخطط العام"
            className="reveal reh-invest-image"
            style={{ height: 520, width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
