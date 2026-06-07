"use client";

import { useState, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { IconArrow, IconShield } from "./icons";

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

type FieldProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  full?: boolean;
  /** Latin input (phone/email): render LTR but keep text right-aligned. */
  ltr?: boolean;
};

// Defined at module scope (not inside LeadForm) so its identity is stable
// across renders. A component re-created each render makes React remount the
// <input> on every keystroke, which drops focus after a single character.
function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
  full = false,
  ltr = false,
}: FieldProps) {
  return (
    <div
      className={`field ${error ? "invalid" : ""}`}
      style={{ gridColumn: full ? "1 / -1" : "auto" }}
    >
      <label>
        {label}
        {required && <span className="req">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        dir={ltr ? "ltr" : "rtl"}
        style={ltr ? { textAlign: "right" } : undefined}
      />
      <span className="err">{error || ""}</span>
    </div>
  );
}

export function LeadForm() {
  const router = useRouter();
  const [v, setV] = useState<Values>(INITIAL);
  const [err, setErr] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

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
    if (submitting) return;
    if (!validate()) return;
    setSubmitting(true);
    // No backend yet — on success, send the user to the thank-you page.
    // router.push() prepends basePath automatically (unlike asset()).
    router.push("/thank-you");
  };

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
        <Field
          label="الاسم بالكامل"
          value={v.name}
          onChange={set("name")}
          error={err.name}
          required
          placeholder="اكتب اسمك"
        />
        <Field
          label="رقم الهاتف"
          value={v.phone}
          onChange={set("phone")}
          error={err.phone}
          type="tel"
          required
          placeholder="01x xxx xxxx"
          ltr
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
          label="البريد الإلكتروني (اختياري)"
          value={v.email}
          onChange={set("email")}
          error={err.email}
          type="email"
          placeholder="name@email.com"
          ltr
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={submitting}
        style={{
          marginTop: 6,
          width: "100%",
          opacity: submitting ? 0.75 : 1,
          cursor: submitting ? "default" : "pointer",
        }}
      >
        {submitting ? "جارٍ الإرسال…" : "احجز استشارة مجانية"}
        {!submitting && (
          <IconArrow size={16} style={{ transform: "scaleX(-1)" }} />
        )}
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
