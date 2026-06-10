"use client";

import { asset } from "@/lib/asset";

export function ResultsSection() {
  const items = [
    {
      t: "الالتزام بالتسليم في الوقت المحدد",
      s: "سجل قوي في الالتزام بمواعيد التسليم",
    },
    {
      t: "جودة تنفيذ بمعايير عالمية",
      s: "شراكات مع أفضل الاستشاريين والمقاولين",
    },
    {
      t: "خدمات ما بعد التسليم",
      s: "إدارة وتشغيل وصيانة بمعايير عالمية",
    },
    {
      t: "ثقة مبنية على تجربة",
      s: "مشروعات ناجحة في مصر والإمارات",
    },
  ];
  return (
    <section
      className="reh-results"
      style={{
        background: "var(--bg-deep-soft)",
        color: "var(--on-deep)",
        padding: "100px 48px",
        borderTop: "1px solid var(--on-deep-line)",
      }}
    >
      <div
        className="reh-results-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div className="reveal" style={{ paddingTop: 12 }}>
          <img
            src={asset("/developer-logo.png")}
            alt="Developer"
            style={{
              display: "block",
              maxWidth: 240,
              width: "100%",
              height: "auto",
            }}
          />
          <p
            style={{
              marginTop: 22,
              fontSize: 13,
              color: "var(--on-deep-mute)",
              lineHeight: 1.7,
            }}
          >
            احدى شركات مدن القابضة
          </p>
        </div>

        <div className="reveal">
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            <span>الخبرة الحقيقية لا تحتاج إلى ضجيج</span>
          </div>
          <h2
            className="ar-display reh-results-h2"
            style={{ fontSize: 38, margin: 0, color: "var(--on-deep)" }}
          >
            <em>لأن النتائج</em> دائماً تتحدث عن نفسها
          </h2>
          <p
            className="reh-results-p"
            style={{
              marginTop: 22,
              fontSize: 15,
              lineHeight: 2,
              color: "var(--on-deep-mute)",
            }}
          >
            في الوقت الذي أصبح فيه كثير من العملاء أكثر حذراً في قراراتهم
            العقارية… تزداد أهمية اختيار مطور يمتلك القدرة على تقديم تجربة
            مستقرة وواضحة من البداية وحتى ما بعد التسليم.
            <br />
            <br />
            ولهذا تعتمد مدن القابضة الإماراتية على جودة التنفيذ، والاهتمام
            بالتفاصيل، والتطوير طويل المدى.
            <br />
            <br />
            لأن المشروع الحقيقي لا يُبنى فقط ليبدو جيداً اليوم… بل ليحافظ على
            قيمته وجودته لسنوات طويلة قادمة.
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 18,
                padding: "18px 20px",
                borderRadius: "var(--radius)",
                border: "1px solid var(--on-deep-line)",
                background: "rgba(255,255,255,.025)",
                transition: "background .2s, border-color .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,154,75,.06)";
                e.currentTarget.style.borderColor = "var(--accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.025)";
                e.currentTarget.style.borderColor = "var(--on-deep-line)";
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--on-deep)",
                    marginBottom: 4,
                  }}
                >
                  {it.t}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--on-deep-mute)",
                    lineHeight: 1.6,
                  }}
                >
                  {it.s}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
