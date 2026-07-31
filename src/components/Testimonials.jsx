import { useState } from 'react';

const REVIEWS = [
  { id: 1, name: "Budi Santoso", date: "12 Okt 2023", rating: 5, text: "Bumbu betutunya meresap sampai ke tulang. Sangat direkomendasikan untuk pecinta kuliner Bali!", avatar: "B" },
  { id: 2, name: "Siti Aminah", date: "05 Nov 2023", rating: 5, text: "Pesanan cepat sampai dan masih hangat. Rasanya otentik sekali, persis seperti yang saya makan di Ubud.", avatar: "S" },
  { id: 3, name: "Wayan Darma", date: "20 Nov 2023", rating: 4, text: "Ayam merahnya benar-benar nendang pedasnya. Mantap buat makan bareng keluarga di akhir pekan.", avatar: "W" },
];

export default function Testimonials() {
  const [rating, setRating] = useState(0);

  return (
    <section id="ulasan">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Kata Mereka</div>
          <h2 className="section-title">Ulasan Pelanggan</h2>
        </div>

        <div className="ulasan-form-box">
          <h3 className="ulasan-form-title"><i className="fas fa-comment-dots"></i> Berikan Ulasan Anda</h3>
          <div className="ulasan-form-grid">
            <div className="form-group">
              <label>Nama Anda</label>
              <input type="text" placeholder="Masukkan nama..." />
            </div>
            <div className="form-group">
              <label>Penilaian</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <i 
                    key={star}
                    className={`fas fa-star star ${star <= rating ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                  ></i>
                ))}
              </div>
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Ulasan</label>
              <textarea placeholder="Bagaimana pengalaman Anda menikmati Betutu DE?"></textarea>
            </div>
          </div>
          <button className="ulasan-submit-btn">Kirim Ulasan</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '3rem' }}>
          <button className="sort-btn active">Terbaru</button>
          <button className="sort-btn">Tertinggi</button>
        </div>

        <div className="ulasan-grid" id="ulasanList">
          {REVIEWS.map(rev => (
            <div key={rev.id} className="ulasan-card">
              <div className="ulasan-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fa${i < rev.rating ? 's' : 'r'} fa-star`}></i>
                ))}
              </div>
              <p className="ulasan-text">"{rev.text}"</p>
              <div className="ulasan-profile">
                <div className="ulasan-avatar">{rev.avatar}</div>
                <div>
                  <strong>{rev.name}</strong>
                  <span>Pelanggan</span>
                </div>
              </div>
              <div className="ulasan-date">{rev.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
