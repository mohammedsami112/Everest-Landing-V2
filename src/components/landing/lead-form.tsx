"use client";

import { useState, type ChangeEvent } from "react";
import { IconArrow, IconCheck, IconShield } from "./icons";

type Values = {
  name: string;
  phone: string;
  time: string;
  email: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const INITIAL: Values = {
  name: "",
  phone: "",
  time: "",
  email: "",
};

const TIME_OPTIONS = ["في الصباح", "بعد الظهر", "في المساء", "في أي وقت"];

export function LeadForm() {
  const [v, setV] = useState<Values>(INITIAL);
  const [err, setErr] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof Values) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) =>
      setV((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "الاسم مطلوب";
    if (!/^[\d\s+()-]{7,}$/.test(v.phone)) e.phone = "رقم هاتف غير صالح";
    if (v.email.trim() && !/^\S+@\S+\.\S+$/.test(v.email))
      e.email = "بريد إلكتروني غير صالح";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div style={{ textAlign: "center", padding: "24px 8px" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "var(--accent-soft)",
            color: "var(--accent)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 16px",
          }}
        >
          <IconCheck size={28} stroke={2} />
        </div>
        <div
          className="ar-display"
          style={{ fontSize: 24, color: "var(--on-deep)", marginBottom: 8 }}
        >
          تم استلام طلبك
        </div>
        <p
          style={{
            color: "var(--on-deep-mute)",
            margin: 0,
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          سيتواصل معك أحد استشاريينا خلال 24 ساعة لتنسيق استشارتك المجانية.
        </p>
      </div>
    );
  }

  const Field = ({
    k,
    label,
    type = "text",
    placeholder,
    required,
    full = false,
  }: {
    k: keyof Values;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    full?: boolean;
  }) => (
    <div
      className={`field ${err[k] ? "invalid" : ""}`}
      style={{ gridColumn: full ? "1 / -1" : "auto" }}
    >
      <label>
        {label}
        {required && <span className="req">*</span>}
      </label>
      <input
        type={type}
        value={v[k]}
        onChange={set(k)}
        placeholder={placeholder}
        dir={k === "phone" || k === "email" ? "ltr" : "rtl"}
        style={
          k === "phone" || k === "email"
            ? { textAlign: "right" }
            : undefined
        }
      />
      <span className="err">{err[k] || ""}</span>
    </div>
  );

  return (
    <form
      onSubmit={submit}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <div
        className="reh-form-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
        }}
      >
        <Field k="name" label="الاسم بالكامل" required placeholder="اكتب اسمك" />
        <Field
          k="phone"
          label="رقم الهاتف"
          type="tel"
          required
          placeholder="01x xxx xxxx"
        />
        <div className="field">
          <label>الوقت المناسب للتواصل</label>
          <select
            value={v.time}
            onChange={set("time")}
            dir="rtl"
            style={{ color: v.time ? "var(--on-deep)" : "rgba(240,233,218,.35)" }}
          >
            <option value="" disabled>
              اختر الوقت
            </option>
            {TIME_OPTIONS.map((t) => (
              <option key={t} value={t} style={{ color: "#1a1814" }}>
                {t}
              </option>
            ))}
          </select>
          <span className="err" />
        </div>
        <Field
          k="email"
          label="البريد الإلكتروني (اختياري)"
          type="email"
          placeholder="name@email.com"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: 6, width: "100%" }}
      >
        احجز استشارة مجانية
        <IconArrow size={16} style={{ transform: "scaleX(-1)" }} />
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          color: "var(--on-deep-mute)",
          fontSize: 12.5,
          marginTop: 4,
        }}
      >
        <IconShield size={14} />
        سيتم التواصل معك خلال 24 ساعة
      </div>
    </form>
  );
}
