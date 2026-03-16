import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "3px solid rgba(255,215,0,0.15)",
      background: "#0A0A0A",
      padding: "60px 24px 40px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Logo + tagline */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{
            fontFamily: "var(--font-bebas), 'Arial Black', Arial, sans-serif",
            fontSize: "2.5rem",
            letterSpacing: "0.05em",
            marginBottom: "8px",
          }}>
            <span style={{ color: "#FFD700" }}>SPAGHETTI</span>
            {" "}
            <span style={{ color: "#FF3333" }}>BURRITOS</span>
          </div>
          <p style={{
            color: "#888888",
            fontSize: "0.95rem",
            margin: 0,
            fontStyle: "italic",
          }}>
            Nobody asked for this. You clicked anyway. We respect it.
          </p>
        </div>

        {/* Links row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 40px",
          marginBottom: "40px",
        }}>
          <Link href="/blog" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            BLOG
          </Link>
          <Link href="/about" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            ABOUT
          </Link>
          <Link href="/privacy" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            PRIVACY
          </Link>
          <Link href="/terms" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            TERMS
          </Link>
          <Link href="/disclaimer" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            DISCLAIMER
          </Link>
          <Link href="/dmca" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            DMCA
          </Link>
          <Link href="/contact" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            CONTACT
          </Link>
          <a href="mailto:tips@spaghettiburritos.com" style={{ color: "#888888", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            SEND TIPS
          </a>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(255,215,0,0.1)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ color: "#888888", fontSize: "0.75rem", margin: 0 }}>
            &copy; {new Date().getFullYear()} Spaghetti Burritos. All chaos reserved.
          </p>
          <p style={{ color: "#888888", fontSize: "0.75rem", margin: 0 }}>
            Powered by The Voice of Cash Team
          </p>
          <div style={{ width: "100%", display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", paddingTop: "12px" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,215,0,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Chaotic Sources</span>
            <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" style={{ color: "#888888", fontSize: "0.75rem", textDecoration: "none" }}>Reddit — Where opinions come from →</a>
            <a href="https://www.theringer.com" target="_blank" rel="noopener noreferrer" style={{ color: "#888888", fontSize: "0.75rem", textDecoration: "none" }}>The Ringer →</a>
            <a href="https://deadspin.com" target="_blank" rel="noopener noreferrer" style={{ color: "#888888", fontSize: "0.75rem", textDecoration: "none" }}>Deadspin →</a>
            <a href="https://apnews.com" target="_blank" rel="noopener noreferrer" style={{ color: "#888888", fontSize: "0.75rem", textDecoration: "none" }}>AP News — Real news we borrow from →</a>
            <a href="https://www.poynter.org" target="_blank" rel="noopener noreferrer" style={{ color: "#888888", fontSize: "0.75rem", textDecoration: "none" }}>Poynter — Journalism Ethics →</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
