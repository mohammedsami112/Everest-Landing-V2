// `LOGO_RENDER` is how big the logo actually looks; `LOGO_LAYOUT` is the
// vertical space it reserves in the nav. Keeping LAYOUT fixed at 56 means the
// navbar height never changes no matter how large RENDER gets — the extra
// height bleeds out symmetrically via the negative margin below.
const LOGO_RENDER = 80;
const LOGO_LAYOUT = 56;

export function Logo({ tone = "on-dark" }: { tone?: "on-dark" | "on-light" }) {
  return (
    <a
      href="#"
      aria-label="Ras El Hekma"
      style={{
        display: "inline-flex",
        alignItems: "center",
        color: tone === "on-dark" ? "var(--on-deep)" : "var(--ink)",
        textDecoration: "none",
      }}
    >
      <img
        src="/logo.png"
        alt="Ras El Hekma"
        style={{
          height: LOGO_RENDER,
          width: "auto",
          display: "block",
          // Pull the box back down to LOGO_LAYOUT so the larger image
          // overflows the row instead of stretching it.
          marginBlock: (LOGO_LAYOUT - LOGO_RENDER) / 2,
        }}
      />
    </a>
  );
}
