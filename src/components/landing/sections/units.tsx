import {
  IconAnchor,
  IconBag,
  IconBed,
  IconBuilding,
  IconChart,
  IconHeadphones,
  IconHome,
  IconLeaf,
  IconStar,
  IconSun,
  IconTree,
  IconUtensils,
  IconWaves,
} from "../icons";

export function UnitsSection() {
  const units = [
    { icon: <IconWaves size={26} />, label: "الشاليهات" },
    { icon: <IconHome size={26} />, label: "الفيلات المستقلة" },
    { icon: <IconBuilding size={26} />, label: "التاون هاوس" },
    { icon: <IconBuilding size={26} />, label: "التوين هاوس" },
    { icon: <IconBed size={26} />, label: "الوحدات الفندقية" },
    { icon: <IconStar size={26} />, label: "Branded Residences" },
  ];

  const uses = [
    { icon: <IconSun size={22} />, label: "الاستخدام الصيفي" },
    { icon: <IconStar size={22} />, label: "السكن الفاخر" },
    { icon: <IconChart size={22} />, label: "الاستثمار طويل المدى" },
  ];

  const views = [
    { icon: <IconWaves size={20} />, label: "البحر مباشرة" },
    { icon: <IconWaves size={20} />, label: "البحيرات" },
    { icon: <IconAnchor size={20} />, label: "المارينا" },
    { icon: <IconTree size={20} />, label: "المساحات الخضراء" },
    { icon: <IconWaves size={20} />, label: "مناطق الـ Waterfront" },
  ];

  const amenities = [
    { icon: <IconBed size={20} />, label: "فنادق عالمية" },
    { icon: <IconSun size={20} />, label: "Beach Clubs" },
    { icon: <IconAnchor size={20} />, label: "Marina District" },
    { icon: <IconBag size={20} />, label: "مناطق تجارية وترفيهية" },
    { icon: <IconUtensils size={20} />, label: "مطاعم وكافيهات" },
    { icon: <IconHeadphones size={20} />, label: "خدمات تشغيل وصيانة" },
    {
      icon: <IconLeaf size={20} />,
      label: "مساحات مخصصة للراحة والاستجمام طوال العام",
    },
  ];

  return (
    <section
      className="reh-units"
      style={{
        background: "var(--bg-deep)",
        color: "var(--on-deep)",
        padding: "100px 48px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="reveal eyebrow" style={{ marginBottom: 24 }}>
          <span>مدينة صُممت لتناسب أنماط حياة مختلفة… وليس نوعاً واحداً من السكن</span>
        </div>

        <div className="reveal">
          <h2
            className="ar-display reh-units-h2"
            style={{ fontSize: 52, margin: 0, color: "var(--on-deep)" }}
          >
            تفاصيل الحياة <em>داخل رأس الحكمة</em>
          </h2>
          <p
            style={{
              marginTop: 22,
              fontSize: 17,
              lineHeight: 1.9,
              color: "var(--on-deep-mute)",
              maxWidth: 640,
            }}
          >
            يضم المشروع مجموعة متنوعة من الوحدات بمساحات وأنماط متعددة، إلى جانب
            مدينة متكاملة الخدمات تعمل طوال العام.
          </p>
        </div>

        {/* الوحدات */}
        <div
          className="reveal reh-units-grid"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {units.map((u, i) => (
            <div
              key={i}
              className="reh-units-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "22px 24px",
                borderRadius: "var(--radius)",
                border: "1px solid var(--on-deep-line)",
                background: "rgba(255,255,255,.03)",
                transition: "background .2s, border-color .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,154,75,.06)";
                e.currentTarget.style.borderColor = "var(--accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.03)";
                e.currentTarget.style.borderColor = "var(--on-deep-line)";
              }}
            >
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                }}
              >
                {u.icon}
              </span>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--on-deep)",
                }}
              >
                {u.label}
              </div>
            </div>
          ))}
        </div>

        {/* الاستخدامات */}
        <div
          className="reveal reh-units-uses"
          style={{
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {uses.map((u, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid var(--accent-soft)",
                color: "var(--on-deep)",
                fontSize: 14,
                fontWeight: 600,
                background: "rgba(200,154,75,.05)",
              }}
            >
              <span style={{ color: "var(--accent)", display: "grid" }}>
                {u.icon}
              </span>
              {u.label}
            </span>
          ))}
        </div>

        {/* الإطلالات + الخدمات */}
        <div
          className="reveal reh-units-panels"
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 24,
          }}
        >
          <Panel title="إطلالات صُممت بعناية" items={views} />
          <Panel title="مدينة متكاملة الخدمات" items={amenities} columns={2} />
        </div>
      </div>
    </section>
  );
}

function Panel({
  title,
  items,
  columns = 1,
}: {
  title: string;
  items: { icon: React.ReactNode; label: string }[];
  columns?: number;
}) {
  return (
    <div
      style={{
        padding: "28px 28px 24px",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--on-deep-line)",
        background: "rgba(255,255,255,.025)",
      }}
    >
      <h3
        className="ar-display"
        style={{ margin: "0 0 18px", fontSize: 22, color: "var(--on-deep)" }}
      >
        {title}
      </h3>
      <div
        className="reh-panel-list"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "14px 24px",
        }}
      >
        {items.map((it, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <span
              style={{
                color: "var(--accent)",
                display: "grid",
                flexShrink: 0,
              }}
            >
              {it.icon}
            </span>
            <span
              style={{
                fontSize: 15,
                color: "var(--on-deep-mute)",
                lineHeight: 1.5,
              }}
            >
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
