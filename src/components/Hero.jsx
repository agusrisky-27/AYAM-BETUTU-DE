import { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 0,
    title: "Ayam Betutu Utuh",
    desc: "Satu ekor ayam, bumbu meresap sempurna",
    icon: "fa-drumstick-bite",
    label: "Ayam Betutu",
    style: {}
  },
  {
    id: 1,
    title: "Ayam Betutu Merah",
    desc: "Pedas menyengat, sambal matah segar",
    icon: "fa-fire",
    label: "Ayam Merah",
    style: { borderColor: 'rgba(179,43,26,0.5)', background: 'radial-gradient(circle,rgba(179,43,26,0.08),transparent)', color: 'var(--red)' }
  },
  {
    id: 2,
    title: "Bebek Betutu Utuh",
    desc: "Daging bebek empuk, aroma rempah kuat",
    icon: "fa-feather-alt",
    label: "Bebek Betutu",
    style: { borderColor: 'rgba(212,168,67,0.5)', background: 'radial-gradient(circle,rgba(212,168,67,0.06),transparent)', color: 'var(--gold)' }
  },
  {
    id: 3,
    title: "Betutu Paha",
    desc: "Potongan paha juicy, cocok untuk 1 porsi",
    icon: "fa-drumstick-bite",
    label: "Betutu Paha",
    style: {}
  },
  {
    id: 4,
    title: "Betutu Dada",
    desc: "Dada ayam lembut, bumbu meresap dalam",
    icon: "fa-egg",
    label: "Betutu Dada",
    style: {}
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Optional: Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="beranda">
      <div className="hero-bg"></div>
      <div className="hero-texture"></div>
      <div className="hero-inner">
        <div className="hero-text-col">
          <div className="hero-badge"><i className="fas fa-fire"></i> Asli Bali · Rempah Pilihan</div>
          <h1 className="hero-title">
            Betutu <em>Terbaik</em><br />
            <span className="line2">Cita Rasa Sejati</span>
          </h1>
          <p className="hero-desc">
            Dimasak dengan bumbu base genep khas Bali, dibungkus daun pisang, dan diproses dengan metode tradisional selama berjam-jam — menghadirkan kelezatan yang tak tertandingi.
          </p>
          <div className="hero-actions">
            <a href="#pesan" className="btn-primary"><i className="fas fa-shopping-bag"></i> Pesan Sekarang</a>
            <a href="#menu" className="btn-ghost"><i className="fas fa-utensils"></i> Lihat Menu</a>
          </div>
        </div>

        <div className="hero-slider-wrap">
          <div className="slider-glow"></div>
          <div className="slider-ring"></div>
          <div className="slides-container">
            {SLIDES.map((slide, idx) => (
              <div key={slide.id} className={`slide ${idx === activeSlide ? 'active' : ''}`}>
                <div className="slide-img-wrap">
                  <div 
                    className="food-placeholder" 
                    style={{
                      borderColor: slide.style.borderColor, 
                      background: slide.style.background
                    }}
                  >
                    <i className={`fas ${slide.icon}`} style={{ color: slide.style.color || 'var(--accent)' }}></i>
                    <span className="food-label" style={{ color: slide.style.color || 'var(--accent2)' }}>{slide.label}</span>
                    <span>Taruh foto di sini</span>
                  </div>
                </div>
                <div className="slide-caption">
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="s-btn" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
            <div className="dots">
              {SLIDES.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === activeSlide ? 'active' : ''}`} 
                  onClick={() => setActiveSlide(idx)}
                ></span>
              ))}
            </div>
            <button className="s-btn" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
}
