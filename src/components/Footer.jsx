import { motion } from "framer-motion";
import { BRAND } from "../config";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ position: "relative" }}>
      {/* Divider line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(243,234,218,0.1), transparent)",
        }}
      />

      <div className="container" style={{ padding: "48px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 40,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a
              href="#top"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 22,
                display: "inline-flex",
                alignItems: "baseline",
                gap: 5,
              }}
            >
              Betutu Asap{" "}
              <span style={{ color: "var(--ember-bright)", fontStyle: "italic" }}>De</span>
            </a>
            <p
              style={{
                marginTop: 14,
                fontSize: 14,
                lineHeight: 1.7,
                color: "var(--coconut-dim)",
                maxWidth: 300,
              }}
            >
              {BRAND.tagline}. Asli {BRAND.location}, melayani pesanan untuk acara,
              hajatan, dan konsumsi sehari-hari.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div
              style={{
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--turmeric)",
                marginBottom: 18,
              }}
            >
              Menu
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { href: "#tentang", label: "Tentang" },
                { href: "#menu", label: "Menu & Harga" },
                { href: "#custom", label: "Paket Custom" },
                { href: "#galeri", label: "Galeri" },
                { href: "#kontak", label: "Order" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: 14,
                    color: "var(--coconut-dim)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--coconut)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--coconut-dim)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--turmeric)",
                marginBottom: 18,
              }}
            >
              Kontak
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href={`https://wa.me/${BRAND.waNumber}`}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 14, color: "var(--coconut-dim)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--coconut)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--coconut-dim)")}
              >
                WA: {BRAND.waDisplay}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                style={{ fontSize: 14, color: "var(--coconut-dim)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--coconut)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--coconut-dim)")}
              >
                {BRAND.email}
              </a>
              <span style={{ fontSize: 14, color: "var(--coconut-dim)" }}>
                📍 {BRAND.location}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid rgba(243,234,218,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{ fontSize: 13, color: "var(--ash)" }}>
            © {new Date().getFullYear()} Betutu Asap De. Semua hak dilindungi.
          </span>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: "var(--radius-pill)",
              background: "rgba(243,234,218,0.05)",
              border: "1px solid rgba(243,234,218,0.1)",
              color: "var(--coconut-dim)",
              fontSize: 13,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
            Kembali ke atas
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
