const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userPhone: { type: String, required: true },
  userPassword: { type: String, required: true },
  profilePic: { type: String, default: "" },
  eventReg1: { type: String, default: "" },
  eventReg2: { type: String, default: "" },
  eventReg3: { type: String, default: "" },
  eventReg4: { type: String, default: "" },
  eventReg5: { type: String, default: "" }
});

module.exports = mongoose.model('User', userSchema);
