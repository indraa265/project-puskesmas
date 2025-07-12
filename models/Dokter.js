const mongoose = require('mongoose');

const dokterSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  spesialis: { type: String, required: true },
  kontak: { type: String, required: true }
});

module.exports = mongoose.model('Dokter', dokterSchema);
