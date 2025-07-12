const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

// === REGISTER ADMIN ===
router.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  if (!email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
    return res.status(400).json({ message: "Format email tidak valid" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Password tidak sama" });
  }

  if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return res.status(400).json({ message: "Password harus minimal 8 karakter, mengandung huruf dan angka" });
  }

  try {
    const existing = await Admin.findOne({ email_admin: email });
    if (existing) {
      return res.status(409).json({ message: "Email sudah digunakan" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      username_admin: username,
      email_admin: email,
      password_admin: hashed
    });

    await newAdmin.save();
    res.status(201).json({ message: "Registrasi berhasil" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// === LOGIN ADMIN ===
router.post('/login', async (req, res) => {
  const { email_admin, password_admin } = req.body;

  if (!email_admin || !password_admin) {
    return res.status(400).json({ message: "Email dan password wajib diisi" });
  }

  try {
    const admin = await Admin.findOne({ email_admin });
    if (!admin) {
      return res.status(401).json({ message: "Email tidak ditemukan" });
    }

    const isMatch = await bcrypt.compare(password_admin, admin.password_admin);
    if (!isMatch) {
      return res.status(401).json({ message: "Password salah" });
    }

    res.status(200).json({ message: "Login berhasil" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

module.exports = router;
