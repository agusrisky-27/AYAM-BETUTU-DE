export default function Contact() {
  return (
    <section id="kontak">
      <div className="container">
        <div className="kontak-grid">
          <div className="kontak-info">
            <div className="section-eyebrow">Hubungi Kami</div>
            <h3>Punya Pertanyaan atau Ingin Pesan Partai Besar?</h3>
            <p>Kami siap melayani kebutuhan Anda, baik untuk makan siang sehari-hari, acara keluarga, hingga catering untuk event besar.</p>
            
            <div className="kontak-items">
              <div className="kontak-item">
                <div className="kontak-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4>Lokasi Kami</h4>
                  <p>Jl. Denpasar Raya No. 88, Bali</p>
                </div>
              </div>
              
              <div className="kontak-item">
                <div className="kontak-icon"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <h4>Telepon / WhatsApp</h4>
                  <p>+62 812 3456 7890</p>
                </div>
              </div>
              
              <div className="kontak-item">
                <div className="kontak-icon"><i className="fas fa-clock"></i></div>
                <div>
                  <h4>Jam Operasional</h4>
                  <p>Setiap Hari: 09.00 - 21.00 WITA</p>
                </div>
              </div>
            </div>
            
            <div className="socials">
              <a href="#" className="soc-btn"><i className="fab fa-instagram"></i></a>
              <a href="#" className="soc-btn"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="soc-btn"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          
          <div className="kontak-form-box">
            <h3>Tinggalkan Pesan</h3>
            <div className="form-group">
              <label>Nama Anda</label>
              <input type="text" placeholder="Masukkan nama..." />
            </div>
            <div className="form-group">
              <label>Email / No. HP</label>
              <input type="text" placeholder="Kontak yang bisa dihubungi..." />
            </div>
            <div className="form-group">
              <label>Pesan</label>
              <textarea placeholder="Tuliskan pertanyaan Anda..."></textarea>
            </div>
            <button className="send-btn">
              <i className="fas fa-paper-plane"></i> Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
