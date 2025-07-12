// routes/jadwalRoutes.js
const express = require('express');
const router = express.Router();
const Jadwal = require('../models/jadwal');

// GET semua jadwal
router.get('/', async (req, res) => {
  try {
    const data = await Jadwal.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST tambah jadwal
router.post('/', async (req, res) => {
  const jadwal = new Jadwal(req.body);
  try {
    const saved = await jadwal.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT edit jadwal
router.put('/:id', async (req, res) => {
  try {
    const updated = await Jadwal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE jadwal
router.delete('/:id', async (req, res) => {
  try {
    await Jadwal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Jadwal dihapus' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
