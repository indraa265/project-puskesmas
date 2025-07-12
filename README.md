Puskesmas
Aplikasi sistem informasi pelayanan kesehatan berbasis Node.js & Express.js yang dirancang khusus untuk admin puskesmas dalam mengelola data pasien, dokter, obat, resep, jadwal pemeriksaan, dan hasil pemeriksaan. Aplikasi ini menggunakan arsitektur modular dan antarmuka berbasis HTML.

Fitur Utama
Autentikasi Admin
Login Aman: Admin dapat login melalui halaman login.html menggunakan username dan password.

Manajemen Login: Data admin dikelola melalui model Admin.js dan route adminRoutes.js.

Hashing Password (Opsional): Password dapat dihash menggunakan bcrypt untuk keamanan.

Manajemen Data
1. Pasien
Tambah, lihat, ubah, dan hapus data pasien.

Field yang dikelola: NIK, nama, keluhan, jenis kelamin, status rawat, tipe kamar (jika rawat inap), dan lainnya.

File: Pasien.js (model), pasien.js (route), pasien.html (view)

2. Dokter
Pengelolaan data dokter seperti nama, spesialis, dan kontak.

File: Dokter.js, dokterRoutes.js, dokter.html

3. Obat
Tambah/edit/hapus data obat: nama, jenis, dan harga.

File: obat.js (model dan route), obat.html

4. Resep
Input resep berdasarkan pasien dan dokter, dengan dosis dan tanggal.

File: resep.js, resep.html

5. Jadwal Pemeriksaan
Menentukan jadwal pemeriksaan berdasarkan ID dokter dan pasien.

File: jadwal.js, jadwalRoutes.js, jadwal_pemeriksaan.html

6. Hasil Pemeriksaan
Admin dapat menginput dan melihat hasil pemeriksaan berdasarkan ID pasien dan/atau jadwal.

File: hasil.js, hasilRoutes.js, hasil_pemeriksaan.html

Struktur Folder
perl
Copy
Edit
PuskesmasApp/
├── models/                   # Skema data untuk tiap entitas
│   ├── Admin.js
│   ├── Dokter.js
│   ├── hasil.js
│   ├── jadwal.js
│   ├── obat.js
│   ├── Pasien.js
│   └── resep.js
│
├── routes/                   # Pengaturan routing/endpoint Express
│   ├── adminRoutes.js
│   ├── dokterRoutes.js
│   ├── hasilRoutes.js
│   ├── indexRoutes.js
│   ├── jadwalRoutes.js
│   ├── obat.js
│   ├── pasien.js
│   └── resep.js
│
├── public/                   # Antarmuka pengguna berbasis HTML
│   ├── dokter.html
│   ├── hasil_pemeriksaan.html
│   ├── index.html
│   ├── jadwal_pemeriksaan.html
│   ├── login.html
│   ├── obat.html
│   ├── pasien.html
│   ├── register.html         # (Jika dibutuhkan untuk input admin)
│   └── resep.html
│
├── server.js                 # Entry point utama Express
├── package.json              # Konfigurasi dependensi NPM
└── package-lock.json         # Lock versi dependensi
Teknologi yang Digunakan
Backend: Node.js + Express.js

Frontend: HTML5, CSS (bisa pakai Tailwind), JS

Routing Modular: Express Router untuk tiap fitur

Database: (Diasumsikan) MongoDB atau bisa juga dengan file JSON/MySQL tergantung isi model/*.js

Fungsi Tambahan
Validasi Input: Validasi form dari sisi HTML dan backend.

Responsif & Ringan: Tampilan HTML sederhana yang bisa dikembangkan ke framework modern.

Struktur Modular: Mudah dikembangkan untuk fitur tambahan (misalnya cetak laporan PDF, export data, dsb).

Cara Menjalankan
Pastikan Node.js terinstal

Jalankan perintah berikut di terminal:
npm install
node server.js
Akses aplikasi melalui browser:
http://localhost:3000/
