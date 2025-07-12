const mongoose = require('mongoose');

const obatSchema = new mongoose.Schema({
  nama_obat: {
    type: String,
    required: true,
  },
  jenis_obat: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Obat', obatSchema);
