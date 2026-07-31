import { useMemo, useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { HARGA_CUSTOM, BRAND } from "../config";

function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

/* ── Animated number that counts up ──────────────────────── */
function AnimatedTotal({ value }) {
  const spring = useSpring(value, { stiffness: 100, damping: 20 });
  const display = useTransform(spring, (v) => "Rp " + Math.round(v).toLocaleString("id-ID"));
  const ref = useRef(null);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsub = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [display]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 30,
        color: "var(--turmeric)",
        fontWeight: 600,
      }}
    >
      {formatRupiah(value)}
    </span>
  );
}

/* ── Stepper component ───────────────────────────────────── */
function Stepper({ label, unitLabel, value, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
        background: "var(--glass-bg)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--glass-border)",
        borderRadius: 16,
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(243,234,218,0.18)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
    >
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--coconut)" }}>{label}</div>
        <div style={{ fontSize: 12.5, color: "var(--ash)", marginTop: 3, fontFamily: "var(--font-mono)" }}>{unitLabel}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <motion.button
          whileTap={{ scale: 0.85 }}
          aria-label={`Kurangi ${label}`}
          onClick={() => onChange(Math.max(0, value - 1))}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1px solid rgba(243,234,218,0.15)",
            background: value > 0 ? "rgba(243,234,218,0.06)" : "transparent",
            color: "var(--coconut)",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          −
        </motion.button>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 20,
            minWidth: 28,
            textAlign: "center",
            color: value > 0 ? "var(--turmeric)" : "var(--ash)",
            fontWeight: 600,
            transition: "color 0.2s ease",
          }}
        >
          {value}
        </span>
        <motion.button
          whileTap={{ scale: 0.85 }}
          aria-label={`Tambah ${label}`}
          onClick={() => onChange(value + 1)}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1px solid rgba(217,164,65,0.3)",
            background: "rgba(217,164,65,0.08)",
            color: "var(--turmeric)",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          +
        </motion.button>
      </div>
    </div>
  );
}

export default function CustomPackage() {
  const [qty, setQty] = useState({ ayam: 1, nasi: 0, sate: 0 });

  const total = useMemo(() => {
    return (
      qty.ayam * HARGA_CUSTOM.ayam.harga +
      qty.nasi * HARGA_CUSTOM.nasi.harga +
      qty.sate * HARGA_CUSTOM.sate.harga
    );
  }, [qty]);

  const itemCount = qty.ayam + qty.nasi + qty.sate;
  const isEmpty = itemCount === 0;

  const waLink = useMemo(() => {
    const lines = [];
    if (qty.ayam > 0) lines.push(`- Ayam betutu asap x${qty.ayam}`);
    if (qty.nasi > 0) lines.push(`- Nasi x${qty.nasi}`);
    if (qty.sate > 0) lines.push(`- Sate ayam x${qty.sate}`);
    const msg = `Halo Betutu Asap De, saya mau pesan paket custom:\n${lines.join(
      "\n"
    )}\n\nTotal: ${formatRupiah(total)}\n\nMohon info selanjutnya ya. Terima kasih!`;
    return `https://wa.me/${BRAND.waNumber}?text=${encodeURIComponent(msg)}`;
  }, [qty, total]);

  return (
    <section id="custom" style={{ position: "relative" }}>
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,164,65,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">Atur sendiri</div>
          <h2 className="section-title">Paket custom</h2>
          <p className="section-sub">
            Mau porsi beda dari paket biasa? Atur sendiri jumlah ayam, nasi, dan
            sate — harga langsung terhitung otomatis.
          </p>
        </motion.div>

        <div
          style={{
            marginTop: 44,
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 24,
          }}
          className="custom-grid"
        >
          {/* Steppers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <Stepper
              label="Ayam betutu asap"
              unitLabel={`${formatRupiah(HARGA_CUSTOM.ayam.harga)} / ekor`}
              value={qty.ayam}
              onChange={(v) => setQty((q) => ({ ...q, ayam: v }))}
            />
            <Stepper
              label="Nasi"
              unitLabel={`${formatRupiah(HARGA_CUSTOM.nasi.harga)} / porsi`}
              value={qty.nasi}
              onChange={(v) => setQty((q) => ({ ...q, nasi: v }))}
            />
            <Stepper
              label="Sate ayam"
              unitLabel={`${formatRupiah(HARGA_CUSTOM.sate.harga)} / porsi`}
              value={qty.sate}
              onChange={(v) => setQty((q) => ({ ...q, sate: v }))}
            />
          </motion.div>

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "linear-gradient(160deg, rgba(44,36,25,0.95) 0%, rgba(33,27,21,0.95) 100%)",
              border: "1px solid rgba(217,164,65,0.18)",
              borderRadius: "var(--radius-card)",
              padding: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow-card)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 150,
                height: 150,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(217,164,65,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <div className="eyebrow">Ringkasan pesanan</div>
              <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 12 }}>
                {qty.ayam > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      color: "var(--coconut-dim)",
                    }}
                  >
                    <span>🍗 Ayam x{qty.ayam}</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--coconut)" }}>
                      {formatRupiah(qty.ayam * HARGA_CUSTOM.ayam.harga)}
                    </span>
                  </motion.div>
                )}
                {qty.nasi > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      color: "var(--coconut-dim)",
                    }}
                  >
                    <span>🍚 Nasi x{qty.nasi}</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--coconut)" }}>
                      {formatRupiah(qty.nasi * HARGA_CUSTOM.nasi.harga)}
                    </span>
                  </motion.div>
                )}
                {qty.sate > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      color: "var(--coconut-dim)",
                    }}
                  >
                    <span>🥩 Sate x{qty.sate}</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--coconut)" }}>
                      {formatRupiah(qty.sate * HARGA_CUSTOM.sate.harga)}
                    </span>
                  </motion.div>
                )}
                {isEmpty && (
                  <div style={{ fontSize: 14, color: "var(--ash)", fontStyle: "italic" }}>
                    Atur jumlah di samping untuk mulai.
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: 28, position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  borderTop: "1px solid rgba(243,234,218,0.1)",
                  paddingTop: 18,
                }}
              >
                <span style={{ fontSize: 14, color: "var(--coconut-dim)" }}>Total</span>
                <AnimatedTotal value={total} />
              </div>
              <motion.a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ember"
                whileHover={!isEmpty ? { scale: 1.02 } : {}}
                whileTap={!isEmpty ? { scale: 0.98 } : {}}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: 18,
                  pointerEvents: isEmpty ? "none" : "auto",
                  opacity: isEmpty ? 0.35 : 1,
                  fontSize: 14.5,
                  transition: "opacity 0.3s ease",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pesan paket ini via WA
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .custom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
