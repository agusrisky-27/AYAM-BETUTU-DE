import { motion } from "framer-motion";

const STEPS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 6 4 10 4 14a8 8 0 0016 0c0-4-4-8-8-12z" />
        <path d="M12 18v-4" />
      </svg>
    ),
    title: "Diasap sabut kelapa",
    text: "Ayam, bebek, atau ayam merah diasap perlahan dengan sabut kelapa. Bukan arang biasa — asap sabut kelapa memberi aroma khas yang meresap sampai ke dalam daging.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.2 0-2.4.6-3 1.5A3.5 3.5 0 006 8c-2.2 0-4 1.8-4 4s1.8 4 4 4h12c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.3-1.7-1.6-3-3.2-3.5-.5-.9-1.6-1.5-2.8-1.5z" />
        <path d="M8 18v2M12 18v2M16 18v2" />
      </svg>
    ),
    title: "Dibalut base rajang & genep",
    text: "Setelah diasap, daging dibalut base rajang dan base genep khas Bali — racikan rempah lengkap yang jadi identitas rasa betutu.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
        <path d="M3 12h18" />
        <path d="M8 4v4M16 4v4M12 18v2" />
      </svg>
    ),
    title: "Dipresto sampai empuk",
    text: "Proses presto membuat daging empuk sampai ke tulang, sementara bumbu tetap menyatu dan tidak hilang selama proses masak.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section id="tentang" style={{ position: "relative" }}>
      {/* Subtle bg gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(193,72,30,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
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
          <div className="eyebrow">Cara kami memasak</div>
          <h2 className="section-title">
            Bukan betutu biasa —<br />diasap dulu, baru dipresto
          </h2>
          <p className="section-sub">
            Urutan ini yang membedakan Betutu Asap De. Kebanyakan betutu langsung
            dipresto atau dipanggang. Kami mengasap lebih dulu supaya rasa
            smoky-nya benar-benar tertanam.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="glass-card"
              style={{
                padding: "36px 30px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Step number background */}
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  right: -8,
                  fontFamily: "var(--font-display)",
                  fontSize: 120,
                  fontWeight: 700,
                  color: "rgba(243,234,218,0.03)",
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(224,100,48,0.1)",
                  border: "1px solid rgba(224,100,48,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ember-bright)",
                  marginBottom: 20,
                }}
              >
                {s.icon}
              </div>

              {/* Step counter */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--ember-bright)",
                  letterSpacing: "0.1em",
                }}
              >
                LANGKAH {String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 600,
                  marginTop: 10,
                  color: "var(--coconut)",
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </div>

              {/* Description */}
              <p
                style={{
                  marginTop: 14,
                  color: "var(--coconut-dim)",
                  lineHeight: 1.75,
                  fontSize: 14.5,
                }}
              >
                {s.text}
              </p>

              {/* Bottom accent line */}
              <div
                style={{
                  height: 2,
                  width: 40,
                  background: "linear-gradient(90deg, var(--ember-bright), transparent)",
                  borderRadius: 2,
                  marginTop: 20,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
