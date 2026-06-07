import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { IconArrow, IconCheck, IconClock } from "@/components/landing/icons";

export const metadata: Metadata = {
  title: "شكراً لك — رأس الحكمة",
  description:
    "تم استلام طلبك بنجاح. سيتواصل معك أحد مستشارينا خلال 24 ساعة لتنسيق استشارتك المجانية.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      style={{
        flex: 1,
        position: "relative",
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "48px 24px",
        background: "var(--bg-deep)",
        color: "var(--on-deep)",
        overflow: "hidden",
      }}
    >
      {/* Coastal backdrop + overlay — mirrors the lead-form card treatment. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url("${asset("/hero-coastal.jpeg")}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.28,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(120% 120% at 50% 0%, rgba(8,27,44,.55) 0%, rgba(8,27,44,.88) 55%, rgba(8,27,44,.97) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 560,
          textAlign: "center",
        }}
      >
        <Link
          href="/"
          aria-label="رأس الحكمة"
          style={{ display: "inline-flex", marginBottom: 28 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/logo.png")}
            alt="رأس الحكمة"
            style={{ height: 72, width: "auto", display: "block" }}
          />
        </Link>

        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "var(--accent-soft)",
            color: "var(--accent)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 24px",
            boxShadow: "0 0 0 8px rgba(200,154,75,.08)",
          }}
        >
          <IconCheck size={34} stroke={2} />
        </div>

        <div
          className="eyebrow"
          style={{ justifyContent: "center", marginBottom: 16 }}
        >
          <span>تم الإرسال بنجاح</span>
        </div>

        <h1
          className="ar-display"
          style={{ fontSize: 40, margin: 0, color: "var(--on-deep)" }}
        >
          شكراً لتواصلك معنا
        </h1>

        <p
          style={{
            marginTop: 18,
            fontSize: 16.5,
            lineHeight: 1.9,
            color: "rgba(240,233,218,.78)",
          }}
        >
          تم استلام طلبك بنجاح. سيتواصل معك أحد مستشارينا خلال 24 ساعة لتنسيق
          استشارتك المجانية وعرض أحدث التفاصيل والأسعار وخطط السداد المتاحة.
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginTop: 24,
            padding: "10px 18px",
            borderRadius: 999,
            border: "1px solid var(--accent-soft)",
            background: "rgba(200,154,75,.06)",
            color: "var(--on-deep)",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <span style={{ color: "var(--accent)", display: "grid" }}>
            <IconClock size={18} />
          </span>
          سنتواصل معك خلال 24 ساعة
        </div>

        <div style={{ marginTop: 36 }}>
          <Link
            href="/"
            className="btn btn-primary"
            style={{ paddingInline: 30 }}
          >
            العودة للصفحة الرئيسية
            <IconArrow size={16} style={{ transform: "scaleX(-1)" }} />
          </Link>
        </div>
      </div>
    </main>
  );
}
