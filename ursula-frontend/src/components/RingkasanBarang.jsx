import { formatRupiah } from '../utils/formatRupiah'

function RingkasanBarang({ daftarBarang }) {
  const jumlahJenis = daftarBarang.length
  const totalStok = daftarBarang.reduce((total, barang) => total + barang.stok, 0)
  const nilaiPersediaan = daftarBarang.reduce(
    (total, barang) => total + barang.harga * barang.stok,
    0,
  )

  const ringkasan = [
    { label: 'Jumlah Jenis Barang', nilai: jumlahJenis },
    { label: 'Total Stok', nilai: totalStok },
    { label: 'Nilai Persediaan', nilai: formatRupiah(nilaiPersediaan) },
  ]

  return (
    <section className="row g-3 mb-4" aria-label="Ringkasan barang">
      {ringkasan.map((item) => (
        <div className="col-12 col-sm-4" key={item.label}>
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <div className="text-secondary small">{item.label}</div>
              <div className="stat-value">{item.nilai}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default RingkasanBarang
