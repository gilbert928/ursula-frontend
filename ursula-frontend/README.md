# Ursula Frontend

Frontend aplikasi kasir **Ursula** (React + Vite) untuk mengelola data **Barang**.
Project ini dikembangkan bertahap sampai Pekan 14 dan akan disambungkan ke backend/API pada Pekan 11.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Struktur component

- `Header` : judul aplikasi
- `RingkasanBarang` : jumlah jenis, total stok, nilai persediaan
- `FormTambahBarang` : form controlled untuk menambah barang
- `DaftarBarang` : render list barang, atau pesan "Belum ada data Barang"
- `KartuBarang` : tampilan satu barang
