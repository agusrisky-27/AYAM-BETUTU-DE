import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_SATUAN, PAKET_COMPLETE, BRAND } from "../config";

function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

function waLinkForItem(nama, harga) {
  const msg = `Halo Betutu Asap De, saya mau pesan:\n- ${nama} (${formatRupiah(harga)})\n\nMohon info selanjutnya ya. Terima kasih!`;
  return `https://wa.me/${BRAND.waNumber}?text=${encodeURIComponent(msg)}`;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function MenuCard({ item, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -3 }}
      className="glass-card"
      style={{
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "var(--coconut)",
            lineHeight: 1.4,
            fontFamily: "var(--font-display)",
          }}
        >
          {item.nama}
        </div>
      </div>
      <p
        style={{
          fontSize: 14,
          color: "var(--coconut-dim)",
          lineHeight: 1.7,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {item.deskripsi}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 4,
          paddingTop: 16,
          borderTop: "1px solid rgba(243,234,218,0.06)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 20,
            color: "var(--turmeric)",
            fontWeight: 600,
          }}
        >
          {formatRupiah(item.harga)}
        </span>
        <a
          href={waLinkForItem(item.nama, item.harga)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
          style={{ padding: "8px 18px", fontSize: 13 }}
        >
          Pesan
        </a>
      </div>
    </motion.div>
  );
}

function PaketCard({ p, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -3 }}
      style={{
        background: "linear-gradient(160deg, rgba(44,36,25,0.9) 0%, rgba(33,27,21,0.9) 100%)",
        border: "1px solid rgba(217,164,65,0.2)",
        borderRadius: "var(--radius-card)",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "relative",
        overflow: "hidden",
        boxShadow: "var(--shadow-card)",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
      }}
    >
      {/* Glow accent */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,164,65,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {index === 0 && (
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            padding: "4px 12px",
            borderRadius: "var(--radius-pill)",
            background: "rgba(224,100,48,0.15)",
            border: "1px solid rgba(224,100,48,0.3)",
            fontSize: 11,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.1em",
            color: "var(--ember-bright)",
            textTransform: "uppercase",
          }}
        >
          Favorit
        </div>
      )}

      <div
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "var(--coconut)",
          fontFamily: "var(--font-display)",
        }}
      >
        {p.nama}
      </div>

      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {p.isi.map((line) => (
          <li
            key={line}
            style={{
              fontSize: 14,
              color: "var(--coconut-dim)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--lawar)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {line}
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 8,
          paddingTop: 18,
          borderTop: "1px solid rgba(243,234,218,0.08)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 24,
            color: "var(--turmeric)",
            fontWeight: 600,
          }}
        >
          {formatRupiah(p.harga)}
        </span>
        <a
          href={waLinkForItem(p.nama, p.harga)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ember"
          style={{ padding: "10px 20px", fontSize: 13 }}
        >
          Pesan
        </a>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [tab, setTab] = useState("satuan");

  return (
    <section id="menu" style={{ background: "var(--char-1)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Menu &amp; harga</div>
          <h2 className="section-title">Pilih satuan, atau paket lengkap</h2>
          <p className="section-sub">
            Semua harga per 1kg untuk produk utuh. Bisa juga pesan per bagian,
            atau ambil paket complete yang sudah termasuk sate dan nasi.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            marginTop: 40,
            display: "inline-flex",
            background: "var(--char-2)",
            border: "1px solid rgba(243,234,218,0.08)",
            borderRadius: "var(--radius-pill)",
            padding: 4,
            gap: 4,
          }}
        >
          {[
            { key: "satuan", label: "Menu Satuan" },
            { key: "paket", label: "Paket Complete" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: "10px 24px",
                borderRadius: "var(--radius-pill)",
                fontSize: 13.5,
                fontWeight: 600,
                border: "none",
                transition: "all 0.3s ease",
                background: tab === t.key
                  ? "linear-gradient(135deg, var(--ember), var(--ember-bright))"
                  : "transparent",
                color: tab === t.key ? "var(--coconut)" : "var(--coconut-dim)",
                boxShadow: tab === t.key ? "0 4px 16px var(--ember-glow)" : "none",
              }}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {tab === "satuan" ? (
            <motion.div
              key="satuan"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{
                marginTop: 32,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {MENU_SATUAN.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="paket"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{
                marginTop: 32,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 18,
              }}
            >
              {PAKET_COMPLETE.map((p, i) => (
                <PaketCard key={p.id} p={p} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
