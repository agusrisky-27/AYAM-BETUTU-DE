import { motion } from "framer-motion";

// =====================================================================
// CARA MENGGANTI PLACEHOLDER DENGAN FOTO ASLI:
// 1. Taruh file foto di folder src/assets/gallery/ (contoh: foto1.jpg)
// 2. Import di atas, misal: import foto1 from "../assets/gallery/foto1.jpg";
// 3. Ganti value "img: null" pada array GALLERY_ITEMS jadi "img: foto1"
// Komponen ini otomatis menampilkan foto asli begitu "img" tidak null.
// =====================================================================

const GALLERY_ITEMS = [
  { id: 1, label: "Proses pengasapan sabut kelapa", icon: "🔥", img: null },
  { id: 2, label: "Ayam betutu asap utuh", icon: "🍗", img: null },
  { id: 3, label: "Bebek betutu asap", icon: "🦆", img: null },
  { id: 4, label: "Base rajang & base genep", icon: "🌿", img: null },
  { id: 5, label: "Paket complete siap saji", icon: "🍽️", img: null },
  { id: 6, label: "Proses presto", icon: "♨️", img: null },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function PlaceholderTile({ label, icon }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        color: "var(--ash)",
        padding: 24,
        textAlign: "center",
        background: "linear-gradient(160deg, var(--char-2) 0%, var(--char-1) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(243,234,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(243,234,218,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <span style={{ fontSize: 36, filter: "grayscale(0.3)" }}>{icon}</span>
      <span style={{ fontSize: 12.5, lineHeight: 1.5, maxWidth: 150, position: "relative" }}>
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galeri" style={{ background: "var(--char-1)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Lihat langsung</div>
          <h2 className="section-title">Dari asap sampai piring</h2>
          <p className="section-sub">
            Galeri proses pengasapan dan hasil akhir Betutu Asap De.
          </p>
        </motion.div>

        <div className="gallery-grid" style={{ marginTop: 44 }}>
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.015 }}
              className={`gallery-item gallery-item-${item.id}`}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: item.img
                  ? "1px solid rgba(243,234,218,0.08)"
                  : "1px dashed rgba(243,234,218,0.12)",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {item.img ? (
                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                  <img
                    src={item.img}
                    alt={item.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* Hover overlay */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 40%, rgba(16,13,10,0.85) 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: 20,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "var(--coconut)", fontWeight: 500 }}>
                      {item.label}
                    </span>
                  </div>
                </div>
              ) : (
                <PlaceholderTile label={item.label} icon={item.icon} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 200px;
          gap: 16px;
        }
        .gallery-item-1 {
          grid-row: span 2;
        }
        .gallery-item-5 {
          grid-column: span 2;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 180px;
          }
          .gallery-item-1 { grid-row: span 1; }
          .gallery-item-5 { grid-column: span 1; }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 200px;
          }
        }
      `}</style>
    </section>
  );
}
