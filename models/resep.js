const mongoose = require('mongoose');

const resepSchema = new mongoose.Schema({
  nama_pasien: { type: String, required: true },
  nama_dokter: { type: String, required: true },
  nama_obat: { type: String, required: true },
  dosis: { type: String, required: true },
  tanggal: { type: Date, required: true }
});

module.exports = mongoose.model('Resep', resepSchema);
