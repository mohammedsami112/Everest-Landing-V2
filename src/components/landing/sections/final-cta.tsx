import { LeadForm } from "../lead-form";
import {
  IconBuilding,
  IconCalendar,
  IconChart,
  IconCheck,
  IconCompass,
  IconKey,
  IconPin,
  IconWallet,
} from "../icons";
import { asset } from "@/lib/asset";

const pillars = [
  { icon: <IconPin size={20} />, label: "موقع استثنائي" },
  { icon: <IconBuilding size={20} />, label: "تطوير إماراتي" },
  { icon: <IconCompass size={20} />, label: "بنية حديثة" },
  { icon: <IconChart size={20} />, label: "خطة نمو طويلة المدى" },
];

const stats = [
  { icon: <IconWallet size={26} />, value: "5%", label: "مقدم" },
  { icon: <IconCalendar size={26} />, value: "8", unit: "سنوات", label: "تسهيلات سداد تصل إليها" },
  { icon: <IconKey size={26} />, value: "3.5", unit: "سنة", label: "موعد الاستلام" },
];

const details = [
  "أحدث الأسعار",
  "الوحدات المتاحة",
  "المساحات المختلفة",
  "وخطط السداد الحالية",
];

export function FinalCTA() {
  return (
    <section
      className="reh-cta"
      style={{
        background: "var(--bg)",
        padding: "96px 48px",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* القرار يبدأ من وضوح التفاصيل */}
        <div
          className="reveal"
          style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}
        >
          <div
            className="eyebrow"
            style={{ marginBottom: 18, justifyContent: "center" }}
          >
            <span>القرار يبدأ من وضوح التفاصيل</span>
          </div>
          <h2
            className="ar-display reh-cta-h2"
            style={{ fontSize: 44, margin: 0, color: "var(--ink)" }}
          >
            رأس الحكمة ليست مجرد مدينة جديدة على الساحل…
            <br />
            <em>بل مشروع متكامل</em>
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: 16.5,
              lineHeight: 1.9,
              color: "var(--ink-soft)",
            }}
          >
            بعد كل ما رأيته حتى الآن، يبدأ السؤال الطبيعي: ما هي الوحدات المتاحة؟
            وما المساحات والإطلالات المناسبة لك؟ اطّلع على أحدث التفاصيل والأسعار
            الحالية قبل تحديثات الطرح القادمة.
          </p>

          <div
            className="reh-cta-pillars"
            style={{
              marginTop: 26,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
            }}
          >
            {pillars.map((p, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 16px",
                  borderRadius: 999,
                  border: "1px solid var(--accent-soft)",
                  background: "rgba(200,154,75,.06)",
                  color: "var(--ink)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "var(--accent-deep)", display: "grid" }}>
                  {p.icon}
                </span>
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* الأرقام */}
        <div
          className="reveal reh-cta-stats"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "26px 28px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--line)",
                background: "var(--card)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "var(--radius)",
                  background: "var(--accent-soft)",
                  color: "var(--accent-deep)",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </span>
              <div>
                <div
                  className="ar-display"
                  style={{
                    fontSize: 34,
                    lineHeight: 1,
                    color: "var(--ink)",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 6,
                  }}
                >
                  {s.value}
                  {s.unit && (
                    <span style={{ fontSize: 16, color: "var(--accent-deep)" }}>
                      {s.unit}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 13.5,
                    color: "var(--ink-mute)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الفورم */}
        <div
          className="reveal"
          style={{
            marginTop: 48,
            background: "var(--bg-deep)",
            color: "var(--on-deep)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 30px 80px -30px rgba(8,27,44,.4)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: `url("${asset("/hero-coastal.jpeg")}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.32,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(265deg, rgba(8,27,44,.96) 0%, rgba(8,27,44,.86) 45%, rgba(8,27,44,.55) 100%)",
            }}
          />

          <div
            className="reh-cta-grid"
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "1fr 1.05fr",
            }}
          >
            <div
              className="reh-cta-left"
              style={{ padding: "64px 48px 64px 40px" }}
            >
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span>الخطوة التالية ليست الشراء</span>
              </div>
              <h3
                className="ar-display"
                style={{ fontSize: 32, margin: 0, color: "var(--on-deep)" }}
              >
                بل الحصول على
                <br />
                <em>المعلومات الصحيحة أولاً</em>
              </h3>
              <p
                className="reh-cta-p"
                style={{
                  marginTop: 20,
                  fontSize: 15.5,
                  lineHeight: 1.9,
                  color: "rgba(240,233,218,.78)",
                  maxWidth: 420,
                }}
              >
                إذا كانت الفكرة مناسبة لك، يمكنك الآن الاطلاع على ما يجعل اتخاذ
                القرار أسهل وأكثر وضوحاً:
              </p>

              <div
                style={{
                  marginTop: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {details.map((d, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ color: "var(--accent)", display: "grid" }}>
                      <IconCheck size={20} />
                    </span>
                    <span style={{ fontSize: 15.5, color: "var(--on-deep)" }}>
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="reh-cta-right"
              style={{
                background: "rgba(11, 32, 51, 0.72)",
                backdropFilter: "blur(18px) saturate(140%)",
                WebkitBackdropFilter: "blur(18px) saturate(140%)",
                borderInlineStart: "1px solid var(--on-deep-line)",
                padding: "48px 40px",
              }}
            >
              <div style={{ marginBottom: 18 }}>
                <div
                  className="mono"
                  style={{ color: "var(--accent)", marginBottom: 6 }}
                >
                  · سجّل بياناتك ·
                </div>
                <h3
                  className="ar-display"
                  style={{ margin: 0, fontSize: 26, color: "var(--on-deep)" }}
                >
                  اطلب التفاصيل والأسعار
                </h3>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: 13,
                    color: "var(--on-deep-mute)",
                  }}
                >
                  املأ النموذج وسيتواصل معك مستشار خلال 24 ساعة.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
