const express = require('express');
const router = express.Router();
const Obat = require('../models/obat');

// GET semua obat
router.get('/', async (req, res) => {
  try {
    const obatList = await Obat.find();
    res.json(obatList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST tambah obat
router.post('/', async (req, res) => {
  try {
    const newObat = new Obat(req.body);
    await newObat.save();
    res.status(201).json(newObat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT edit obat
router.put('/:id', async (req, res) => {
  try {
    const updated = await Obat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE hapus obat
router.delete('/:id', async (req, res) => {
  try {
    await Obat.findByIdAndDelete(req.params.id);
    res.json({ message: 'Obat berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
