import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="tentang">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Kenali Kami</div>
          <h2 className="section-title">Tentang <em style={{ color: 'var(--accent)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>BETUTU DE</em></h2>
          <p className="section-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
            BETUTU DE lahir dari kecintaan terhadap masakan tradisional Bali. Kami menghadirkan betutu autentik yang dimasak dengan bumbu <em>base genep</em> pilihan, menggunakan metode tradisional turun-temurun.
          </p>
        </motion.div>
        
        <motion.div 
          className="keunggulan-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="kcard" variants={itemVariants}>
            <div className="kcard-icon"><i className="fas fa-leaf"></i></div>
            <h4>Rempah Asli Bali</h4>
            <p>Bumbu base genep 100% asli menggunakan rempah segar pilihan langsung dari pasar tradisional Bali.</p>
          </motion.div>
          <motion.div className="kcard" variants={itemVariants}>
            <div className="kcard-icon"><i className="fas fa-clock"></i></div>
            <h4>Masak 8–12 Jam</h4>
            <p>Diproses dengan metode tradisional slow-cook dibungkus daun pisang untuk cita rasa maksimal.</p>
          </motion.div>
          <motion.div className="kcard" variants={itemVariants}>
            <div className="kcard-icon"><i className="fas fa-hand-holding-heart"></i></div>
            <h4>Higienis & Segar</h4>
            <p>Daging segar pilihan, diproses dengan standar kebersihan tinggi tanpa pengawet tambahan.</p>
          </motion.div>
          <motion.div className="kcard" variants={itemVariants}>
            <div className="kcard-icon"><i className="fas fa-box"></i></div>
            <h4>Siap Kirim & Catering</h4>
            <p>Layanan pengiriman area Bali dan tersedia paket catering untuk acara keluarga, pernikahan, dan event.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
