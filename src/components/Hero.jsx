import { motion } from "framer-motion";
import { BRAND } from "../config";

/* ── Smoke wisps — subtle, slow, vertical-only ────────────── */
function SmokeWisp({ delay, left, scale = 1, opacity = 0.08 }) {
  return (
    <motion.svg
      viewBox="0 0 120 300"
      style={{
        position: "absolute",
        left,
        bottom: 0,
        width: 100 * scale,
        opacity: 0,
        mixBlendMode: "screen",
        filter: "blur(3px)",
      }}
      animate={{
        y: [40, -300],
        opacity: [0, opacity, opacity * 0.6, 0],
      }}
      transition={{
        duration: 14,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M60 300 C20 260, 95 220, 55 170 C20 130, 95 100, 55 60 C30 35, 75 15, 55 0"
        stroke="var(--coconut-dim)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </motion.svg>
  );
}

/* ── Animated word reveal ──────────────────────────────────── */
const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const line1Words = ["Diasap", "sabut", "kelapa."];
  const line2Words = ["Dipresto", "sempurna."];

  return (
    <section
      id="top"
      style={{
        paddingTop: 180,
        paddingBottom: 110,
        overflow: "hidden",
        position: "relative",
        background:
          "radial-gradient(ellipse 1000px 600px at 50% 0%, var(--char-3) 0%, var(--char-0) 70%)",
      }}
    >
      {/* Background gradient orbs — static, no animation */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(193,72,30,0.08) 0%, transparent 70%)",
          top: "-10%",
          left: "20%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,164,65,0.06) 0%, transparent 70%)",
          top: "20%",
          right: "15%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Smoke — only 2 wisps, very subtle */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <SmokeWisp delay={0} left="20%" scale={1.2} opacity={0.06} />
        <SmokeWisp delay={5} left="65%" scale={0.9} opacity={0.05} />
      </div>

      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: "var(--radius-pill)",
            background: "rgba(217,164,65,0.08)",
            border: "1px solid rgba(217,164,65,0.2)",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--lawar)",
              boxShadow: "0 0 8px rgba(124,139,84,0.5)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--turmeric)",
            }}
          >
            Asli Tabanan, Bali
          </span>
        </motion.div>

        {/* Main heading — word-by-word reveal */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(42px, 7.5vw, 82px)",
            lineHeight: 1.06,
            margin: 0,
            color: "var(--coconut)",
          }}
        >
          <span style={{ display: "block" }}>
            {line1Words.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span style={{ display: "block", fontStyle: "italic", color: "var(--ember-bright)" }}>
            {line2Words.map((word, i) => (
              <motion.span
                key={word}
                custom={i + line1Words.length}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 560,
            margin: "28px auto 0",
            fontSize: 16.5,
            lineHeight: 1.75,
            color: "var(--coconut-dim)",
          }}
        >
          Betutu Asap De mengasap ayam &amp; bebek dengan sabut kelapa sebelum
          dipresto, dibalut base rajang dan base genep khas Bali sampai
          meresap ke tulang.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginTop: 38,
            flexWrap: "wrap",
          }}
        >
          <a href="#menu" className="btn btn-ember" style={{ fontSize: 15 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
            Lihat menu &amp; harga
          </a>
          <a
            href={`https://wa.me/${BRAND.waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ fontSize: 15 }}
          >
            Order sekarang
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator — simple, single animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 11, color: "var(--ash)", fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}>
            SCROLL
          </span>
          <div
            style={{
              width: 20,
              height: 32,
              borderRadius: 10,
              border: "1.5px solid rgba(140,132,120,0.4)",
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 3,
                height: 6,
                borderRadius: 2,
                background: "var(--ash)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
