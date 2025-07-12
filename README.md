# Puskesmas 🏥

Aplikasi Sistem Informasi Pelayanan Kesehatan berbasis **Node.js & Express.js** yang dirancang khusus untuk admin puskesmas. Aplikasi ini memungkinkan pengelolaan data pasien, dokter, obat, resep, jadwal pemeriksaan, dan hasil pemeriksaan secara terpusat dan efisien.

---

## ✨ Fitur Utama

### 🔐 Autentikasi Admin
- Login admin melalui halaman `login.html`
- Validasi username dan password
- Password dapat disimpan dalam format hash (`bcrypt`) untuk keamanan

### 👥 Manajemen Data
- **Pasien**: Tambah, ubah, hapus data pasien (NIK, nama, keluhan, jenis kelamin, status rawat inap/jalan, tipe kamar, dll)
- **Dokter**: Kelola data dokter (nama, spesialis, kontak)
- **Obat**: Input data obat (nama, jenis, harga)
- **Resep**: Buat resep berdasarkan pasien dan dokter
- **Jadwal Pemeriksaan**: Atur jadwal pemeriksaan dokter-pasien
- **Hasil Pemeriksaan**: Input hasil pemeriksaan berdasarkan pasien/jadwal

---

## 🗂️ Struktur Folder



---

## 🧰 Teknologi yang Digunakan

- **Node.js** – Backend runtime environment
- **Express.js** – Web framework untuk routing dan middleware
- **HTML + CSS** – Tampilan antarmuka pengguna
- **JavaScript** – Logika frontend dan interaktivitas
- **(Opsional) MongoDB / JSON / MySQL** – Database untuk penyimpanan data
- **bcrypt** – Keamanan hashing password (jika digunakan)

---

## 🚀 Cara Menjalankan Aplikasi

1. Clone repositori ini:
   git clone https://github.com/username/Puskesmas.git
   cd Puskesmas
   
install semua dependensi:
npm install

Jalankan server:
node server.js

Buka browser dan akses:
http://localhost:3000/
