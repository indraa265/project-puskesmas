// models/jadwal.js
const mongoose = require('mongoose');

const jadwalSchema = new mongoose.Schema({
  id_pasien: { type: Number, required: true },
  id_dokter: { type: Number, required: true },
  tanggal: { type: Date, required: true },
  waktu: { type: String, required: true }
});

module.exports = mongoose.model('Jadwal', jadwalSchema);
