export default function About() {
  return (
    <section id="tentang">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Kenali Kami</div>
          <h2 className="section-title">Tentang <em style={{ color: 'var(--accent)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>BETUTU DE</em></h2>
          <p className="section-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
            BETUTU DE lahir dari kecintaan terhadap masakan tradisional Bali. Kami menghadirkan betutu autentik yang dimasak dengan bumbu <em>base genep</em> pilihan, menggunakan metode tradisional turun-temurun.
          </p>
        </div>
        <div className="keunggulan-grid">
          <div className="kcard reveal visible">
            <div className="kcard-icon"><i className="fas fa-leaf"></i></div>
            <h4>Rempah Asli Bali</h4>
            <p>Bumbu base genep 100% asli menggunakan rempah segar pilihan langsung dari pasar tradisional Bali.</p>
          </div>
          <div className="kcard reveal visible">
            <div className="kcard-icon"><i className="fas fa-clock"></i></div>
            <h4>Masak 8–12 Jam</h4>
            <p>Diproses dengan metode tradisional slow-cook dibungkus daun pisang untuk cita rasa maksimal.</p>
          </div>
          <div className="kcard reveal visible">
            <div className="kcard-icon"><i className="fas fa-hand-holding-heart"></i></div>
            <h4>Higienis & Segar</h4>
            <p>Daging segar pilihan, diproses dengan standar kebersihan tinggi tanpa pengawet tambahan.</p>
          </div>
          <div className="kcard reveal visible">
            <div className="kcard-icon"><i className="fas fa-box"></i></div>
            <h4>Siap Kirim & Catering</h4>
            <p>Layanan pengiriman area Bali dan tersedia paket catering untuk acara keluarga, pernikahan, dan event.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
