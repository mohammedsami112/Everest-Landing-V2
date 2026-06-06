import type { CSSProperties } from "react";

type Kind = "coastal" | "aerial" | "beach" | "master";

export function Placeholder({
  kind = "coastal",
  label,
  style,
  className = "",
}: {
  kind?: Kind;
  label: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div className={`ph ${kind} ${className}`} style={style}>
      <div className="ph-label">
        <span>{label}</span>
        <span className="mono" style={{ opacity: 0.6 }}>
          placeholder
        </span>
      </div>
    </div>
  );
}
