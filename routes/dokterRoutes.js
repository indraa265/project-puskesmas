const express = require('express');
const router = express.Router();
const Dokter = require('../models/dokter');

// GET all dokter
router.get('/', async (req, res) => {
  try {
    const list = await Dokter.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data' });
  }
});

// POST tambah dokter
router.post('/', async (req, res) => {
  try {
    const dokter = new Dokter(req.body);
    await dokter.save();
    res.status(201).json(dokter);
  } catch (err) {
    res.status(400).json({ message: 'Gagal menyimpan data' });
  }
});

// PUT edit dokter
router.put('/:id', async (req, res) => {
  try {
    const updated = await Dokter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Gagal memperbarui data' });
  }
});

// DELETE dokter
router.delete('/:id', async (req, res) => {
  try {
    await Dokter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dokter berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ message: 'Gagal menghapus data' });
  }
});

module.exports = router;
