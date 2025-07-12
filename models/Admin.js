const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username_admin: { type: String, required: true, unique: true },
  email_admin: { type: String, required: true, unique: true },
  password_admin: { type: String, required: true }
});

module.exports = mongoose.model('Admin', adminSchema);
