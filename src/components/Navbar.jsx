import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "../config";

const LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#custom", label: "Custom" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveHash("#" + e.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(16,13,10,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.3)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.3)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(243,234,218,0.08)"
            : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <a
            href="#top"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 21,
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "baseline",
              gap: 5,
              position: "relative",
            }}
          >
            <span>Betutu Asap</span>
            <span
              style={{
                color: "var(--ember-bright)",
                fontStyle: "italic",
              }}
            >
              De
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link ${activeHash === l.href ? "nav-link-active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={`https://wa.me/${BRAND.waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ember nav-cta"
            style={{ padding: "10px 22px", fontSize: 13.5 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan via WA
          </a>

          {/* Mobile toggle */}
          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen(!open)}
            className="nav-toggle"
          >
            <motion.div
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{ width: 22, height: 2, background: "var(--coconut)", borderRadius: 2 }}
            />
            <motion.div
              animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              style={{ width: 16, height: 2, background: "var(--coconut)", borderRadius: 2 }}
            />
            <motion.div
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{ width: 22, height: 2, background: "var(--coconut)", borderRadius: 2 }}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                overflow: "hidden",
                background: "rgba(16,13,10,0.95)",
                backdropFilter: "blur(24px)",
                borderTop: "1px solid rgba(243,234,218,0.06)",
              }}
            >
              <div style={{ padding: "12px 24px 28px", display: "flex", flexDirection: "column", gap: 4 }}>
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(243,234,218,0.05)",
                      color: activeHash === l.href ? "var(--turmeric)" : "var(--coconut-dim)",
                    }}
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href={`https://wa.me/${BRAND.waNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ember"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  style={{ marginTop: 8, fontSize: 14, textAlign: "center" }}
                >
                  Pesan via WhatsApp
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        .nav-desktop {
          display: none;
          gap: 6px;
        }
        .nav-link {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--coconut-dim);
          padding: 8px 14px;
          border-radius: var(--radius-pill);
          transition: all 0.25s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--coconut);
          background: rgba(243,234,218,0.06);
        }
        .nav-link-active {
          color: var(--turmeric) !important;
          background: rgba(217,164,65,0.1);
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }
        @media (min-width: 860px) {
          .nav-desktop { display: flex !important; }
          .nav-toggle { display: none !important; }
        }
        @media (max-width: 859px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
