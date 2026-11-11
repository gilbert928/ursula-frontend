import { formatRupiah } from '../utils/formatRupiah'

function KartuBarang({ barang, onHapus }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <span className="badge text-bg-secondary align-self-start mb-2">
          {barang.kategori}
        </span>
        <h3 className="h6 card-title">{barang.nama}</h3>
        <p className="card-text text-secondary small flex-grow-1">
          {barang.deskripsi || 'Belum ada deskripsi.'}
        </p>
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <div className="fw-semibold">{formatRupiah(barang.harga)}</div>
            <div className="small text-secondary">Stok: {barang.stok}</div>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={() => onHapus(barang.id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  )
}

export default KartuBarang
