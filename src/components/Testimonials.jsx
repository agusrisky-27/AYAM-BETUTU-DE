import { motion } from "framer-motion";

// Ganti isi array ini dengan testimoni asli pelanggan kapan saja.
const TESTIMONIALS = [
  {
    nama: "Dewa A.",
    lokasi: "Denpasar",
    isi: "Rasa asapnya kerasa banget, beda dari betutu yang biasa saya beli. Dagingnya empuk sampai tulang.",
  },
  {
    nama: "Ayu P.",
    lokasi: "Tabanan",
    isi: "Pesan paket complete buat acara keluarga, semua suka. Bumbunya meresap sampai dalam.",
  },
  {
    nama: "Komang S.",
    lokasi: "Gianyar",
    isi: "Ayam merahnya juara, teksturnya kenyal gurih. Order lagi minggu depan.",
  },
  {
    nama: "Made W.",
    lokasi: "Badung",
    isi: "Pelayanan cepat, rasa konsisten enak. Cocok banget buat hajatan atau makan bareng keluarga.",
  },
  {
    nama: "Kadek R.",
    lokasi: "Klungkung",
    isi: "Baru pertama coba betutu yang diasap dulu, beda banget sih rasanya. Auto langganan.",
  },
];

// Generate initials for avatar
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

// Gradient colors for avatar placeholders
const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #C1481E, #E06430)",
  "linear-gradient(135deg, #D9A441, #A87F34)",
  "linear-gradient(135deg, #7C8B54, #5a6b3a)",
  "linear-gradient(135deg, #E06430, #D9A441)",
  "linear-gradient(135deg, #A87F34, #C1481E)",
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function StarRating() {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 300 }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="var(--turmeric)"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </motion.svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Bg accent */}
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,164,65,0.04) 0%, transparent 70%)",
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
          style={{ textAlign: "center" }}
        >
          <div className="eyebrow" style={{ justifyContent: "center", width: "100%" }}>
            Kata pelanggan
          </div>
          <h2 className="section-title" style={{ margin: "16px auto 0" }}>
            Sudah dicoba, sudah dipercaya
          </h2>
          <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
            Testimoni langsung dari pelanggan yang sudah menikmati Betutu Asap De.
          </p>
        </motion.div>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.nama}
              custom={i}
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
                gap: 18,
                cursor: "default",
              }}
            >
              <StarRating />

              {/* Quote */}
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    left: -4,
                    fontFamily: "var(--font-display)",
                    fontSize: 48,
                    color: "rgba(217,164,65,0.15)",
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  "
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "var(--coconut)",
                    margin: 0,
                    paddingLeft: 4,
                  }}
                >
                  {t.isi}
                </p>
              </div>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: "auto",
                  paddingTop: 16,
                  borderTop: "1px solid rgba(243,234,218,0.06)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--coconut)",
                    flexShrink: 0,
                  }}
                >
                  {getInitials(t.nama)}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--coconut)" }}>
                    {t.nama}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--ash)" }}>{t.lokasi}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
