const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); // <== Tambahkan ini

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 🟩 Session middleware
app.use(session({
  secret: 'rahasia-session-puskesmas',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // true jika pakai HTTPS
}));

// 🟩 Koneksi MongoDB
mongoose.connect('mongodb://localhost:27017/puskesmas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// 🟩 Routes
const adminRoutes = require('./routes/adminRoutes');
const pasienRoutes = require('./routes/pasien');
const dokterRoutes = require('./routes/dokterRoutes');
const jadwalRoutes = require('./routes/jadwalRoutes');
const hasilRoutes = require('./routes/hasilRoutes');
const obatRoutes = require('./routes/obat');
const resepRoutes = require('./routes/resep');


app.use('/api/summary', require('./routes/indexRoutes'));
app.use('/api/admin', adminRoutes);
app.use('/api/pasien', pasienRoutes);
app.use('/api/dokter', dokterRoutes);
app.use('/api/jadwal', jadwalRoutes);
app.use('/api/hasil', hasilRoutes);
app.use('/api/obat', obatRoutes);
app.use('/api/resep', resepRoutes);


// 🟩 Jalankan server
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
