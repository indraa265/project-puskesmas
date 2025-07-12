const express = require('express');
const router = express.Router();
const Pasien = require('../models/pasien');

// GET semua pasien
router.get('/', async (req, res) => {
  try {
    const pasien = await Pasien.find();
    res.json(pasien);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST tambah pasien
router.post('/', async (req, res) => {
  try {
    const pasienBaru = new Pasien(req.body);
    const simpan = await pasienBaru.save();
    res.status(201).json(simpan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
