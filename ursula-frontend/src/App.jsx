import { useState } from 'react'
import Header from './components/Header'
import RingkasanBarang from './components/RingkasanBarang'
import FormTambahBarang from './components/FormTambahBarang'
import DaftarBarang from './components/DaftarBarang'

const dataAwal = [
  {
    id: 1,
    nama: 'Buku Tulis Sidu 38 Lembar',
    harga: 5000,
    stok: 20,
    kategori: 'Buku',
    deskripsi: 'Buku tulis bergaris, sampul gambar, cocok untuk catatan pelajaran.',
  },
  {
    id: 2,
    nama: 'Pulpen Gel Hitam 0.5 mm',
    harga: 3000,
    stok: 50,
    kategori: 'Alat Tulis',
    deskripsi: 'Tinta gel hitam, tulisan halus dan cepat kering.',
  },
  {
    id: 3,
    nama: 'Penggaris Plastik 30 cm',
    harga: 4000,
    stok: 15,
    kategori: 'Alat Tulis',
    deskripsi: 'Penggaris bening dengan skala cm dan inci.',
  },
]

function App() {
  const [daftarBarang, setDaftarBarang] = useState(dataAwal)

  const tambahBarang = (barangBaru) => {
    setDaftarBarang([{ id: Date.now(), ...barangBaru }, ...daftarBarang])
  }

  const hapusBarang = (id) => {
    setDaftarBarang(daftarBarang.filter((barang) => barang.id !== id))
  }

  return (
    <>
      <Header namaToko="Ursula" subjudul="Aplikasi Kasir" />

      <main className="container my-4">
        <RingkasanBarang daftarBarang={daftarBarang} />

        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <FormTambahBarang onTambah={tambahBarang} />
          </div>
          <div className="col-12 col-lg-7">
            <h2 className="h5 mb-3">Daftar Barang</h2>
            <DaftarBarang daftarBarang={daftarBarang} onHapus={hapusBarang} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
