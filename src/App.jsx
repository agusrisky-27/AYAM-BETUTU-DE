import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import CustomPackage from "./components/CustomPackage";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

/* ── Loading / Splash Screen ──────────────────────────────── */
function SplashScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "var(--char-0)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      {/* Animated brand */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 32,
          display: "flex",
          alignItems: "baseline",
          gap: 6,
        }}
      >
        <span style={{ color: "var(--coconut)" }}>Betutu Asap</span>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ color: "var(--ember-bright)", fontStyle: "italic" }}
        >
          De
        </motion.span>
      </motion.div>

      {/* Loading bar */}
      <div
        style={{
          width: 120,
          height: 3,
          borderRadius: 2,
          background: "rgba(243,234,218,0.08)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--ember), var(--turmeric))",
            borderRadius: 2,
          }}
        />
      </div>

      {/* Tagline */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          color: "var(--ash)",
          textTransform: "uppercase",
        }}
      >
        Diasap sabut kelapa
      </motion.span>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{loading && <SplashScreen onDone={() => setLoading(false)} />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <CustomPackage />
          <Gallery />
          <Testimonials />
          <OrderForm />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
