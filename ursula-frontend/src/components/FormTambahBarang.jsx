import { useState } from 'react'

const formAwal = {
  nama: '',
  harga: '',
  stok: '',
  kategori: '',
  deskripsi: '',
}

function FormTambahBarang({ onTambah }) {
  const [form, setForm] = useState(formAwal)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.nama.trim() === '') return

    onTambah({
      nama: form.nama.trim(),
      harga: Number(form.harga),
      stok: Number(form.stok),
      kategori: form.kategori,
      deskripsi: form.deskripsi.trim(),
    })
    setForm(formAwal)
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="h5">Tambah Barang</h2>
        <p className="text-secondary">Isi formulir untuk memasukkan barang baru.</p>

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <label htmlFor="nama" className="form-label">Nama Barang</label>
            <input
              type="text"
              className="form-control"
              id="nama"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Contoh: Spidol Whiteboard"
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="harga" className="form-label">Harga Barang (Rp)</label>
            <input
              type="number"
              className="form-control"
              id="harga"
              name="harga"
              min="0"
              value={form.harga}
              onChange={handleChange}
              placeholder="Contoh: 8000"
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="stok" className="form-label">Jumlah Stok</label>
            <input
              type="number"
              className="form-control"
              id="stok"
              name="stok"
              min="0"
              value={form.stok}
              onChange={handleChange}
              placeholder="Contoh: 24"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="kategori" className="form-label">Kategori Barang</label>
            <select
              className="form-select"
              id="kategori"
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              required
            >
              <option value="">-- Pilih Kategori --</option>
              <option value="Alat Tulis">Alat Tulis</option>
              <option value="Buku">Buku</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="deskripsi" className="form-label">Deskripsi Barang</label>
            <textarea
              className="form-control"
              id="deskripsi"
              name="deskripsi"
              rows="3"
              value={form.deskripsi}
              onChange={handleChange}
              placeholder="Tulis deskripsi singkat barang"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Tambah</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormTambahBarang
