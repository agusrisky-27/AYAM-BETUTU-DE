export default function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <div className="menu-header">
          <div>
            <div className="section-eyebrow">Pilihan Lezat</div>
            <h2 className="section-title">Menu Kami</h2>
          </div>
          <div className="menu-tabs">
            <button className="tab-btn active">Semua</button>
            <button className="tab-btn">Ayam</button>
            <button className="tab-btn">Bebek</button>
            <button className="tab-btn">Paket</button>
          </div>
        </div>
        
        <div className="menu-grid" id="menuGrid">
          {/* Ayam Betutu Utuh */}
          <div className="menu-item visible">
            <div className="menu-img">
              <div className="menu-img-placeholder">
                <i className="fas fa-drumstick-bite"></i>
                <span>Ayam Betutu Utuh</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>(taruh foto)</span>
              </div>
              <span className="menu-badge">Bestseller</span>
            </div>
            <div className="menu-body">
              <h3>Ayam Betutu Utuh</h3>
              <p>Satu ekor ayam kampung dengan bumbu base genep khas Bali, dimasak 10 jam hingga sempurna.</p>
              <div className="menu-footer">
                <div className="menu-price">Rp 120.000<small>/ ekor</small></div>
                <button className="add-btn"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
          
          {/* Ayam Merah */}
          <div className="menu-item visible">
            <div className="menu-img">
              <div className="menu-img-placeholder">
                <i className="fas fa-fire"></i>
                <span>Ayam Betutu Merah</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>(taruh foto)</span>
              </div>
              <span className="menu-badge" style={{ background: 'var(--red)' }}>Pedas</span>
            </div>
            <div className="menu-body">
              <h3>Ayam Betutu Merah</h3>
              <p>Versi ekstra pedas dengan bumbu sambal matah merah yang menggugah selera.</p>
              <div className="menu-footer">
                <div className="menu-price">Rp 130.000<small>/ ekor</small></div>
                <button className="add-btn"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
          
          {/* Bebek Betutu */}
          <div className="menu-item visible">
            <div className="menu-img">
              <div className="menu-img-placeholder">
                <i className="fas fa-feather-alt"></i>
                <span>Bebek Betutu Utuh</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>(taruh foto)</span>
              </div>
              <span className="menu-badge" style={{ background: 'var(--gold)', color: '#1a0d05' }}>Premium</span>
            </div>
            <div className="menu-body">
              <h3>Bebek Betutu Utuh</h3>
              <p>Bebek pilihan yang dimasak dengan rempah kuat hingga dagingnya sangat empuk dan beraroma.</p>
              <div className="menu-footer">
                <div className="menu-price">Rp 150.000<small>/ ekor</small></div>
                <button className="add-btn"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
