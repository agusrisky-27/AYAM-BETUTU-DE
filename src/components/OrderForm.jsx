import { useState } from 'react';

export default function OrderForm() {
  const [qty, setQty] = useState(1);
  const [selectedItem, setSelectedItem] = useState('Ayam Betutu Utuh');
  const [price, setPrice] = useState(120000);
  const [formData, setFormData] = useState({ nama: '', telepon: '', alamat: '', catatan: '' });

  const handleQtyChange = (delta) => {
    setQty(Math.max(1, qty + delta));
  };

  const handleItemSelect = (name, p) => {
    setSelectedItem(name);
    setPrice(p);
  };

  const handleSendWA = () => {
    const text = `Halo BETUTU DE,\nSaya ingin memesan:\n\nMenu: ${selectedItem}\nJumlah: ${qty} porsi\nTotal: Rp ${(price * qty).toLocaleString('id-ID')}\n\nNama: ${formData.nama}\nNo. HP: ${formData.telepon}\nAlamat: ${formData.alamat}\nCatatan: ${formData.catatan}\n\nMohon info total dengan ongkir. Terima kasih.`;
    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="pesan">
      <div className="container">
        <div className="section-eyebrow">Mudah & Cepat</div>
        <h2 className="section-title">Pesan Sekarang</h2>
        
        <div className="order-layout">
          <div className="harga-list">
            <div 
              className={`harga-item ${selectedItem === 'Ayam Betutu Utuh' ? 'selected' : ''}`}
              onClick={() => handleItemSelect('Ayam Betutu Utuh', 120000)}
            >
              <div className="harga-info">
                <div className="harga-dot"></div>
                <div>
                  <h4>Ayam Betutu Utuh</h4>
                  <p>1 ekor + Sambal Matah</p>
                </div>
              </div>
              <div className="harga-price">Rp 120.000<small>/ ekor</small></div>
            </div>
            
            <div 
              className={`harga-item ${selectedItem === 'Ayam Betutu Merah' ? 'selected' : ''}`}
              onClick={() => handleItemSelect('Ayam Betutu Merah', 130000)}
            >
              <div className="harga-info">
                <div className="harga-dot" style={{ background: 'var(--red)' }}></div>
                <div>
                  <h4>Ayam Betutu Merah</h4>
                  <p>1 ekor ekstra pedas</p>
                </div>
              </div>
              <div className="harga-price">Rp 130.000<small>/ ekor</small></div>
            </div>

            <div 
              className={`harga-item ${selectedItem === 'Bebek Betutu Utuh' ? 'selected' : ''}`}
              onClick={() => handleItemSelect('Bebek Betutu Utuh', 150000)}
            >
              <div className="harga-info">
                <div className="harga-dot" style={{ background: 'var(--gold)' }}></div>
                <div>
                  <h4>Bebek Betutu Utuh</h4>
                  <p>1 ekor premium + Sambal</p>
                </div>
              </div>
              <div className="harga-price">Rp 150.000<small>/ ekor</small></div>
            </div>
            
            <div 
              className={`harga-item ${selectedItem === 'Paket Keluarga' ? 'selected' : ''}`}
              onClick={() => handleItemSelect('Paket Keluarga', 250000)}
            >
              <div className="harga-info">
                <div className="harga-dot"></div>
                <div>
                  <h4>Paket Keluarga</h4>
                  <p>2 ekor Ayam + 4 Nasi + Sate Lilit</p>
                </div>
              </div>
              <div className="harga-price">Rp 250.000<small>/ paket</small></div>
            </div>
          </div>

          <div className="order-box">
            <h3>Detail Pesanan</h3>
            <p>Isi form berikut untuk mengirim pesanan via WhatsApp</p>
            
            <div className="form-group">
              <label>Pilihan Menu</label>
              <input type="text" value={selectedItem} readOnly style={{ opacity: 0.8 }} />
            </div>
            
            <div className="form-group qty-row">
              <label style={{ margin: 0 }}>Jumlah Porsi</label>
              <div className="qty-ctrl">
                <button onClick={() => handleQtyChange(-1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => handleQtyChange(1)}>+</button>
              </div>
            </div>
            
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Misal: Budi Santoso" 
                value={formData.nama} 
                onChange={e => setFormData({ ...formData, nama: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <label>No. WhatsApp</label>
              <input 
                type="tel" 
                placeholder="Misal: 081234567890" 
                value={formData.telepon}
                onChange={e => setFormData({ ...formData, telepon: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <label>Alamat Pengiriman</label>
              <textarea 
                placeholder="Alamat lengkap beserta patokan..."
                value={formData.alamat}
                onChange={e => setFormData({ ...formData, alamat: e.target.value })}
              ></textarea>
            </div>
            
            <div className="order-summary">
              <div className="row">
                <span>Total Item</span>
                <span>{qty}x {selectedItem}</span>
              </div>
              <div className="row">
                <span>Subtotal</span>
                <span>Rp {(price * qty).toLocaleString('id-ID')}</span>
              </div>
              <div className="total">
                <span>Total Estimasi</span>
                <span>Rp {(price * qty).toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <button className="wa-btn" onClick={handleSendWA}>
              <i className="fab fa-whatsapp"></i> Pesan via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
