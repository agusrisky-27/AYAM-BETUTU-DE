export default function Gallery() {
  return (
    <section id="galeri">
      <div className="container">
        <div className="galeri-info">
          <div>
            <div className="section-eyebrow">Visualisasi Rasa</div>
            <h2 className="section-title">Galeri Kami</h2>
          </div>
          <p className="section-sub" style={{ margin: 0, flex: 1, maxWidth: '400px' }}>
            Lihat lebih dekat bagaimana kami menyiapkan setiap sajian dengan penuh cinta dan dedikasi, menghasilkan hidangan yang menggugah selera.
          </p>
        </div>
        
        <div className="galeri-mosaic">
          <div className="galeri-cell large">
            <div className="galeri-placeholder">
              <i className="fas fa-image"></i>
              <span>Foto Besar</span>
            </div>
            <div className="galeri-overlay"><i className="fab fa-instagram"></i></div>
          </div>
          <div className="galeri-cell">
            <div className="galeri-placeholder">
              <i className="fas fa-camera"></i>
              <span>Foto 1</span>
            </div>
            <div className="galeri-overlay"><i className="fab fa-instagram"></i></div>
          </div>
          <div className="galeri-cell">
            <div className="galeri-placeholder">
              <i className="fas fa-camera"></i>
              <span>Foto 2</span>
            </div>
            <div className="galeri-overlay"><i className="fab fa-instagram"></i></div>
          </div>
          <div className="galeri-cell">
            <div className="galeri-placeholder">
              <i className="fas fa-camera"></i>
              <span>Foto 3</span>
            </div>
            <div className="galeri-overlay"><i className="fab fa-instagram"></i></div>
          </div>
          <div className="galeri-cell">
            <div className="galeri-placeholder">
              <i className="fas fa-camera"></i>
              <span>Foto 4</span>
            </div>
            <div className="galeri-overlay"><i className="fab fa-instagram"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
