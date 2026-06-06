export function Footer() {
  return (
    <footer
      className="reh-footer"
      style={{
        background: "var(--bg-deep)",
        color: "var(--on-deep-mute)",
        padding: "28px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          textAlign: "center",
          fontSize: 12.5,
        }}
      >
        © 2026 Ras El Hekma — Original design (placeholder brand)
      </div>
    </footer>
  );
}
