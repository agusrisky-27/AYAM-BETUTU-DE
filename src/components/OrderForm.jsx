import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, SHEETS_WEBHOOK_URL } from "../config";

const initialForm = { nama: "", noHp: "", alamat: "", pesanan: "", catatan: "" };

export default function OrderForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildWaMessage = () =>
    `Halo Betutu Asap De, saya mau order:\n\n` +
    `Nama: ${form.nama}\n` +
    `No HP: ${form.noHp}\n` +
    `Alamat: ${form.alamat}\n` +
    `Pesanan: ${form.pesanan}\n` +
    (form.catatan ? `Catatan: ${form.catatan}\n` : "") +
    `\nMohon konfirmasi ya. Terima kasih!`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama || !form.noHp || !form.alamat || !form.pesanan) return;

    setStatus("sending");

    // Kirim ke Google Sheets lewat Google Apps Script (kalau sudah di-setup).
    if (SHEETS_WEBHOOK_URL) {
      try {
        await fetch(SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            nama: form.nama,
            noHp: form.noHp,
            alamat: form.alamat,
            pesanan: form.pesanan,
            catatan: form.catatan,
            status: "Baru",
          }),
        });
      } catch (err) {
        console.error("Gagal mengirim ke Google Sheets:", err);
      }
    }

    setStatus("sent");
    const waUrl = `https://wa.me/${BRAND.waNumber}?text=${encodeURIComponent(buildWaMessage())}`;
    window.open(waUrl, "_blank");
  };

  const inputBaseStyle = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(16,13,10,0.6)",
    border: "1px solid rgba(243,234,218,0.1)",
    borderRadius: 12,
    color: "var(--coconut)",
    fontSize: 14.5,
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
  };

  const getInputStyle = (field) => ({
    ...inputBaseStyle,
    borderColor: focusedField === field ? "var(--turmeric)" : "rgba(243,234,218,0.1)",
    boxShadow: focusedField === field ? "0 0 0 3px rgba(217,164,65,0.12)" : "none",
    background: focusedField === field ? "rgba(16,13,10,0.8)" : "rgba(16,13,10,0.6)",
  });

  const labelStyle = {
    fontSize: 13,
    color: "var(--coconut-dim)",
    marginBottom: 8,
    display: "block",
    fontWeight: 500,
  };

  return (
    <section id="kontak" style={{ background: "var(--char-1)", position: "relative" }}>
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(193,72,30,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div className="order-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">Order</div>
            <h2 className="section-title">Isi form, atau langsung chat WA</h2>
            <p className="section-sub">
              Pesanan kamu otomatis tercatat dan bisa langsung kamu konfirmasi
              lewat WhatsApp.
            </p>

            <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 20 }}>
              <ContactRow
                icon="phone"
                label="WhatsApp"
                value={BRAND.waDisplay}
                href={`https://wa.me/${BRAND.waNumber}`}
              />
              <ContactRow icon="mail" label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <ContactRow
                icon="instagram"
                label="Instagram"
                value={BRAND.instagram ? `@${BRAND.instagram}` : "Segera hadir"}
                href={BRAND.instagram ? `https://instagram.com/${BRAND.instagram}` : undefined}
              />
              <ContactRow icon="pin" label="Lokasi" value={BRAND.location} />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--glass-border)",
              borderRadius: "var(--radius-card)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div>
              <label style={labelStyle} htmlFor="nama">Nama</label>
              <input
                id="nama"
                style={getInputStyle("nama")}
                value={form.nama}
                onChange={update("nama")}
                onFocus={() => setFocusedField("nama")}
                onBlur={() => setFocusedField(null)}
                required
                placeholder="Nama lengkap"
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="noHp">No HP / WA</label>
              <input
                id="noHp"
                style={getInputStyle("noHp")}
                value={form.noHp}
                onChange={update("noHp")}
                onFocus={() => setFocusedField("noHp")}
                onBlur={() => setFocusedField(null)}
                required
                placeholder="08xxxxxxxxxx"
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="alamat">Alamat pengiriman</label>
              <input
                id="alamat"
                style={getInputStyle("alamat")}
                value={form.alamat}
                onChange={update("alamat")}
                onFocus={() => setFocusedField("alamat")}
                onBlur={() => setFocusedField(null)}
                required
                placeholder="Alamat lengkap"
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="pesanan">Pesanan</label>
              <textarea
                id="pesanan"
                style={{ ...getInputStyle("pesanan"), resize: "vertical", minHeight: 88 }}
                value={form.pesanan}
                onChange={update("pesanan")}
                onFocus={() => setFocusedField("pesanan")}
                onBlur={() => setFocusedField(null)}
                required
                placeholder="Contoh: 1x Ayam betutu asap, 1x Paket complete bebek"
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="catatan">Catatan (opsional)</label>
              <input
                id="catatan"
                style={getInputStyle("catatan")}
                value={form.catatan}
                onChange={update("catatan")}
                onFocus={() => setFocusedField("catatan")}
                onBlur={() => setFocusedField(null)}
                placeholder="Contoh: tidak pedas"
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-ember"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                justifyContent: "center",
                marginTop: 4,
                fontSize: 14.5,
                padding: "15px 28px",
                width: "100%",
              }}
            >
              {status === "sending" ? (
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: "2px solid rgba(243,234,218,0.3)",
                      borderTopColor: "var(--coconut)",
                      borderRadius: "50%",
                      animation: "spin 0.7s linear infinite",
                    }}
                  />
                  Mengirim...
                </div>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Kirim pesanan &amp; lanjut ke WA
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {status === "sent" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "rgba(124,139,84,0.12)",
                    border: "1px solid rgba(124,139,84,0.25)",
                    fontSize: 13.5,
                    color: "var(--lawar)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Pesanan tercatat. Jendela WhatsApp terbuka untuk konfirmasi.
                </motion.div>
              )}
            </AnimatePresence>

            {!SHEETS_WEBHOOK_URL && (
              <div style={{ fontSize: 12, color: "var(--ash)", textAlign: "center" }}>
                Catatan: pencatatan otomatis ke Google Sheets belum aktif —
                lihat panduan setup untuk mengaktifkan.
              </div>
            )}
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .order-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Contact row icons ─────────────────────────────────────── */
const ICONS = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div
      style={{ display: "flex", alignItems: "center", gap: 16 }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 14,
          background: "var(--glass-bg)",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--glass-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--turmeric)",
          flexShrink: 0,
          transition: "all 0.3s ease",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          {ICONS[icon]}
        </svg>
      </div>
      <div>
        <div style={{ fontSize: 12, color: "var(--ash)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {label}
        </div>
        <div style={{ fontSize: 15, color: "var(--coconut)", fontWeight: 500, marginTop: 2 }}>{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
