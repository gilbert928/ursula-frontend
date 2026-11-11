import KartuBarang from './KartuBarang'

function DaftarBarang({ daftarBarang, onHapus }) {
  if (daftarBarang.length === 0) {
    return (
      <div className="alert alert-light border text-center" role="status">
        Belum ada data Barang
      </div>
    )
  }

  return (
    <div className="row g-3">
      {daftarBarang.map((barang) => (
        <div className="col-12 col-sm-6 col-xl-4" key={barang.id}>
          <KartuBarang barang={barang} onHapus={onHapus} />
        </div>
      ))}
    </div>
  )
}

export default DaftarBarang
