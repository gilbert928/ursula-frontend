# Ursula - Aplikasi Kasir

Ursula adalah aplikasi kasir berbasis web untuk mengelola data barang dagangan.
Dikembangkan bertahap: HTML + CSS + Bootstrap, lalu React + Vite, lalu konsumsi API.
Entitas utamanya adalah **Barang** (nama, harga, stok, kategori, deskripsi).

## Fitur

- **Dashboard**: jumlah jenis barang, total stok, nilai persediaan, dan daftar barang yang stoknya di bawah 10.
- **Daftar Barang**: tabel semua barang. Jika kosong tampil "Belum ada data barang".
- **Tambah Barang**: form controlled, data dikirim ke API (POST) lalu masuk ke daftar.
- **Detail Barang**: informasi lengkap satu barang.
- **Status data**: loading, success, dan error. Saat error tersedia tombol **Coba Lagi**.

## Teknologi

React 18, Vite, Bootstrap 5.3, `fetch()`.

## Struktur

```
src/
  App.jsx                 state utama, fetch GET/POST, navigasi
  App.css
  format.js               format rupiah
  components/
    Header.jsx            navigasi
    Dashboard.jsx         ringkasan toko
    BarangList.jsx        daftar + kondisi kosong
    BarangItem.jsx        satu baris barang
    BarangDetail.jsx      detail barang
    BarangForm.jsx        form tambah (controlled)
    StatusMessage.jsx     tampilan loading dan error
```

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`. Untuk menyimulasikan error (screenshot tugas),
buka `http://localhost:5173/?error`, lalu klik **Coba Lagi** setelah membuka
URL tanpa `?error`.

## Penjelasan API (Bab 7)

| Aksi | Endpoint | Fungsi |
| --- | --- | --- |
| GET | `https://dummyjson.com/products?limit=12` | Mengambil daftar barang |
| POST | `https://dummyjson.com/products/add` | Menyimulasikan penyimpanan barang baru |

Field API dipetakan ke entitas Barang: `title` menjadi nama, `price` (dolar,
dikali 16.000) menjadi harga, `stock` menjadi stok, `category` menjadi kategori,
`description` menjadi deskripsi.

**Penanganan loading dan error** ada di fungsi `muatBarang` pada `App.jsx`.
Sebelum request, state `status` diisi `loading`. Jika `response.ok` bernilai
true, data dipetakan lalu `status` menjadi `success`. Jika request gagal atau
server membalas selain 2xx, `catch` mengisi pesan error dan `status` menjadi
`error`. `StatusMessage` lalu menampilkan spinner atau pesan error dengan
tombol **Coba Lagi** yang memanggil `muatBarang` lagi.
