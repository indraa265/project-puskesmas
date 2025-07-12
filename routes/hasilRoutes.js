// routes/hasilRoutes.js
const express = require('express');
const router = express.Router();
const Hasil = require('../models/hasil');

// GET semua hasil
router.get('/', async (req, res) => {
  try {
    const hasil = await Hasil.find();
    res.json(hasil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST hasil baru
router.post('/', async (req, res) => {
  const hasil = new Hasil({
    nama_pasien: req.body.nama_pasien,
    nama_dokter: req.body.nama_dokter,
    diagnosa: req.body.diagnosa,
    tanggal: req.body.tanggal
  });

  try {
    const saved = await hasil.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update hasil
router.put('/:id', async (req, res) => {
  try {
    const updated = await Hasil.findByIdAndUpdate(
      req.params.id,
      {
        nama_pasien: req.body.nama_pasien,
        nama_dokter: req.body.nama_dokter,
        diagnosa: req.body.diagnosa,
        tanggal: req.body.tanggal
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE hasil
router.delete('/:id', async (req, res) => {
  try {
    await Hasil.findByIdAndDelete(req.params.id);
    res.json({ message: 'Hasil pemeriksaan dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
