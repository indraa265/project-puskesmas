// models/hasil.js
const mongoose = require('mongoose');

const hasilSchema = new mongoose.Schema({
  nama_pasien: { type: String, required: true },
  nama_dokter: { type: String, required: true },
  diagnosa: { type: String, required: true },
  tanggal: { type: Date, required: true }
});

module.exports = mongoose.model('Hasil', hasilSchema);
