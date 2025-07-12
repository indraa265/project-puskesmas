// 📁 models/Pasien.js
const mongoose = require('mongoose');

const pasienSchema = new mongoose.Schema({
  nik: String,
  nama: String,
  alamat: String,
  kontak: String,
  jenis_kelamin: String,
  keluhan: String,
  status: String,
  tipe_kamar: String,
  harga_kamar: String,
  tanggal: String
});

module.exports = mongoose.model('Pasien', pasienSchema);
    