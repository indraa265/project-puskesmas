const express = require('express');
const router = express.Router();
const Jadwal = require('../../models/JadwalPemeriksaan');

// Middleware autentikasi pasien
const { verifyPasien } = require('../../middlewares/authPasien');

router.get('/', verifyPasien, async (req, res) => {
  try {
    const jadwal = await Jadwal.find({ id_pasien: req.pasien.id })
      .populate('id_pasien', 'nik nama jenis_kelamin')
      .populate('id_dokter', 'nama_dokter spesialis');

    res.render('jadwal_pemeriksaan_pasien', { jadwal });
  } catch (err) {
    res.status(500).send('Gagal mengambil data jadwal pemeriksaan');
  }
});

module.exports = router;
