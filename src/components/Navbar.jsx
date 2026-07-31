import { useState } from 'react';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header id="header">
      <div className="nav-inner">
        <a href="#beranda" className="brand">
          <div className="brand-logo" id="logoWrap">
            <div className="brand-logo-fallback">BD</div>
          </div>
          <div className="brand-name">BETUTU <span>DE</span></div>
        </a>
        
        <button 
          className={`hamburger ${navOpen ? 'open' : ''}`} 
          onClick={() => setNavOpen(!navOpen)} 
          aria-label="menu"
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="nav" className={navOpen ? 'open' : ''}>
          <ul className="nav-links">
            <li><a href="#beranda" onClick={() => setNavOpen(false)}>Beranda</a></li>
            <li><a href="#tentang" onClick={() => setNavOpen(false)}>Tentang</a></li>
            <li><a href="#menu" onClick={() => setNavOpen(false)}>Menu</a></li>
            <li><a href="#pesan" onClick={() => setNavOpen(false)}>Pemesanan</a></li>
            <li><a href="#ulasan" onClick={() => setNavOpen(false)}>Ulasan</a></li>
            <li><a href="#kontak" onClick={() => setNavOpen(false)}>Kontak</a></li>
            <li><a href="#pesan" className="nav-cta" onClick={() => setNavOpen(false)}>🛒 Pesan Sekarang</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
