export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="brand-name">BETUTU <span>DE</span></div>
          <p>Membawa cita rasa asli Bali langsung ke meja makan Anda. Diproses dengan dedikasi tinggi dan rempah pilihan untuk kualitas terbaik.</p>
        </div>
        
        <div className="footer-col">
          <h4>Menu Kami</h4>
          <ul>
            <li><a href="#menu">Ayam Betutu Utuh</a></li>
            <li><a href="#menu">Ayam Betutu Merah</a></li>
            <li><a href="#menu">Bebek Betutu</a></li>
            <li><a href="#menu">Paket Keluarga</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Tautan Cepat</h4>
          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang">Tentang Kami</a></li>
            <li><a href="#ulasan">Ulasan Pelanggan</a></li>
            <li><a href="#galeri">Galeri</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Bantuan</h4>
          <ul>
            <li><a href="#kontak">Hubungi Kami</a></li>
            <li><a href="#">Cara Pesan</a></li>
            <li><a href="#">Area Pengiriman</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Betutu DE. All rights reserved.</p>
        <p>Cita Rasa Asli <span>Bali</span></p>
      </div>
    </footer>
  );
}
