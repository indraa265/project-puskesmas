const express = require('express');
const router = express.Router();

const Pasien = require('../models/pasien'); // match: Pasien.js
const Dokter = require('../models/dokter'); // match: Dokter.js
const Obat = require('../models/obat');
const Resep = require('../models/resep');

// ⬇️ Tambahkan model Jadwal dan Hasil Pemeriksaan
const Jadwal = require('../models/jadwal');
const Hasil = require('../models/hasil');

// Route untuk data dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const totalPasien = await Pasien.countDocuments();
    const totalDokter = await Dokter.countDocuments();
    const totalObat = await Obat.countDocuments();
    const totalResep = await Resep.countDocuments();
    const totalJadwal = await Jadwal.countDocuments(); // ✅ Tambahan
    const totalHasil = await Hasil.countDocuments();   // ✅ Tambahan

    res.json({
      pasien: totalPasien,
      dokter: totalDokter,
      obat: totalObat,
      resep: totalResep,
      jadwal: totalJadwal, // ✅ Tambahan
      hasil: totalHasil    // ✅ Tambahan
    });
  } catch (err) {
    console.error('Error fetch dashboard:', err);
    res.status(500).json({ message: 'Gagal memuat data dashboard' });
  }
});

module.exports = router;
