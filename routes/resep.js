const express = require('express');
const router = express.Router();
const Resep = require('../models/resep');
const Pasien = require('../models/pasien');
const Dokter = require('../models/dokter');
const Obat = require('../models/obat');

// GET semua resep
router.get('/', async (req, res) => {
  try {
    const resepList = await Resep.find(); // tidak pakai populate lagi
    res.json(resepList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST tambah resep
router.post('/', async (req, res) => {
  try {
    const { nama_pasien, nama_dokter, nama_obat, dosis, tanggal } = req.body;

    if (!nama_pasien || !nama_dokter || !nama_obat || !dosis || !tanggal) {
      return res.status(400).json({ error: 'Semua data wajib diisi' });
    }

    // Validasi (opsional, bisa dihapus jika tidak perlu)
    const pasien = await Pasien.findOne({ nama: nama_pasien });
    const dokter = await Dokter.findOne({ nama: nama_dokter });
    const obat = await Obat.findOne({ nama_obat: nama_obat });

    if (!pasien) return res.status(404).json({ error: 'Pasien tidak ditemukan' });
    if (!dokter) return res.status(404).json({ error: 'Dokter tidak ditemukan' });
    if (!obat) return res.status(404).json({ error: 'Obat tidak ditemukan' });

    const resepBaru = new Resep({
      nama_pasien,
      nama_dokter,
      nama_obat,
      dosis,
      tanggal: new Date(tanggal)
    });

    await resepBaru.save();
    res.status(201).json({ message: 'Resep berhasil disimpan', data: resepBaru });

  } catch (error) {
    console.error('Gagal menyimpan resep:', error);
    res.status(500).json({ error: 'Gagal menyimpan resep' });
  }
});

// PUT update resep
router.put('/:id', async (req, res) => {
  try {
    const { nama_pasien, nama_dokter, nama_obat, dosis, tanggal } = req.body;

    const updated = await Resep.findByIdAndUpdate(
      req.params.id,
      { nama_pasien, nama_dokter, nama_obat, dosis, tanggal },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Resep tidak ditemukan' });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE resep
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Resep.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Resep tidak ditemukan' });

    res.json({ message: 'Resep berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
